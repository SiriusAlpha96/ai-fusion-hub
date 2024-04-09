import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"
// import {Configuration, OpenAIApi } from "openai"
import OpenAI from "openai"
import  CreateChatCompletionRequestMessage  from "openai"
import { increaseApiLimit, checkApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY 
  });


// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
// })

// const openai = new OpenAIApi(configuration)

const instructionMessage: CreateChatCompletionRequestMessage = {
    role: "system",
    content: "You are a code generator. You must answer only in markdown code snippets. Use code comments for explanation"
}

export async function POST(
    req: Request
) {
    try{
        const { userId }= auth()
        const body = await req.json()
        const { messages } = body

        // if(!userId){
        //     return new NextResponse("Unauthorized", { status:401 })
        // }
        // if(!configuration.apiKey){
        //     return new NextResponse("OpenAI API key not configured", {status:500})
        // }
        if(!messages){
            return new NextResponse("Message are required", {status:400})
        }

        const freeTrail = await checkApiLimit()
        const isPro = await checkSubscription()
        if(!freeTrail && !isPro){
            return new NextResponse("Free Trail has expired.", {status:403})
        }

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages:[instructionMessage, ...messages]
        })

        if(!isPro){
            await increaseApiLimit()
        }
        
        return NextResponse.json(response.choices[0].message)
    }

    catch(error){
        console.log("[CODE_ERROR]",error)
        return new NextResponse("Internal error", {status:501})
    }
}
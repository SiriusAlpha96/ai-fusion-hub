import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
 import OpenAI from "openai";
// import OpenAIApi from 'openai';
// import { Configuration, OpenAIApi } from "openai";
import { increaseApiLimit, checkApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY 
  });

// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
// })

// const openai = new OpenAIApi(configuration)

export async function POST(
    req: Request
) {
    try{
        const { userId }= auth()
        const body = await req.json()
        const { prompt, amount=1, resolution="512x512"} = body

        if(!userId){
            return new NextResponse("Unauthorized", { status:401 })
        }
        // if(!configuration.apiKey){
        //     return new NextResponse("OpenAI API key not configured", {status:400})
        // }
        // console.log(NextResponse)
        if(!prompt){
            return new NextResponse("Prompt are required", {status:400})
        }
        if(!amount){
            return new NextResponse("Amount are required", {status:400})
        }
        if(!resolution){
            return new NextResponse("Resolution are required", {status:400})
        }

        const freeTrail = await checkApiLimit()
        const isPro = await checkSubscription()

        if(!freeTrail && !isPro){
            return new NextResponse("Free Trail has expired.", {status:403})
        } 
        
        const response = await openai.createImage({
            prompt,
            n: parseInt(amount, 10),
            size: resolution,
        })
        if(!isPro){
            await increaseApiLimit()
        }

        return NextResponse.json(response.data.data)
    }

    catch(error){
        console.log("[IMAGE_ERROR]",error)
        return new NextResponse("Internal error", {status:500})
    }
}
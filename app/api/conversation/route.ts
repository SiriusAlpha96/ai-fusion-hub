import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
// import OpenAI from "openai";
import {Configuration, OpenAIApi } from "openai"
// import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

 const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
  })
  
  const openai = new OpenAIApi(configuration);

//   const openai = new OpenAIApi(configuration)
// const instructionMessage: ChatCompletionMessageParam = {
//   role: "system",
//   content: "Answer questions as short and quickly as possible. You must do it under 75 tokens."
// }

export async function POST(
  req: Request
) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages  } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if(!configuration.apiKey){
          return new NextResponse("OpenAI API key not configured", {status:500})
      }
      console.log(NextResponse)

    // if (!openai.apiKey) {
    //   return new NextResponse("OpenAI API Key not configured.", { status: 500 });
    // }

    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    const response = await openai.createChatCompletion({
      model: "gpt-4-turbo",
      messages
    });
    
    return NextResponse.json(response.data.choices[0].message);
  } catch (error) {
    console.log('[CONVERSATION_ERROR]', error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};
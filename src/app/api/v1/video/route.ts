import { NextRequest, NextResponse } from "next/server";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { PromptType } from "@/types/promptType";
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function POST(req: NextRequest) {
    try {
        // const body = await req.json();
        // const {prompt} = body;

        
        //const context = "context will be facts. Generate 6 random facts, each fact may take around 7 seconds to finish if an AI reads it and make them sound good, create a corresponding prompt for image generation. ";

        const context = "context will be funny story in english, Generate 30 second funny story generate 6 random lines each line may take around 7 second for AI to read,  create a corresponding prompt for image generation."
        const prompt = `
        ${context}
        The response should be formatted as JSON with the following structure: 
        
        {
          "data": [
            { 
              "imageText": "<fact_text>", 
              "imageLink": "<image_url>" 
            }, 
            ...
          ]
        }
        
        The "imageLink" field should follow the format: 
        https://image.pollinations.ai/prompt/{description}?width=600&height=600&nologo=true&model=turbo, where {description} is an encoded prompt following this pattern: {sceneDetailed}%20{adjective}%20{charactersDetailed}%20{visualStyle}%20{genre}%20{artistReference}.
        
        Do not include any code blocks or markdown in the response. Only return valid JSON.
        `;


        const result = await model.generateContent(prompt);
        let finalResult: PromptType;

        try {
            finalResult = JSON.parse(result.response.text());
        } catch (error) {
            return NextResponse.json({
                success: false,
                message: "Error while generating the prompt! Please try again with valid prompt",
            },
                { status: 200 }
            );
        }
        return NextResponse.json({
            success: true,
            data: finalResult,
        },
            { status: 200 }
        );
    }
    catch (error) {
        console.log(error)
        return NextResponse.json({
            success: false,
            message: "There was a problem, Please try again",
        },
            { status: 500 }
        );
    }
}
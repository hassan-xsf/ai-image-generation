import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GOOGLE_GEMINI_KEY!;


const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function POST(req: NextRequest) {
    try {

        const body = await req.json();
        const { contextProvided } = body;

        // const context = "The context will be a scary story. Generate a scary story, make it sound scaryt as hell with 5 parts, ";
        const context = contextProvided?.length > 2 ? "The context is related to " + contextProvided : "The context will be totally random, Could be either of games, facts , technologies , scary story , fairy tale stories , ai news , jokes etc";
        console.log(context)
        // const context = "The context will be facts about technology. Generate unique and very intelligent facts in 5 parts, ";

        const prompt = `
        ${context} Make sure that the content generated is always random and different, Each part must not have more than 150 characters. Each part should take around 7 seconds to read aloud if an AI narrates it. This is for image text, so ensure that the story parts are engaging and well-structured, creating a corresponding prompt for image generation.

        Please provide a response only in JSON format, structured as follows:

        {
            "data": [
                "part 1",
                "part 2",
                "part 3",
                "part 4",
                "part 5",
                "part 6"
            ]
        }

        Only return valid JSON and do not include any code blocks or markdown in the response.
        `;

        const result = await model.generateContent(prompt);
        const resultText = result.response.text();

        try {
            const finalResult = JSON.parse(resultText);
            return NextResponse.json({
                success: true,
                data: finalResult,
            }, { status: 200 });
        }
        catch {
            return NextResponse.json({
                success: false,
                message: "There was a problem generating prompt! Please try again",
            }, { status: 400 });
        }

    } catch (error) {
        console.error("Error generating content:", error);
        return NextResponse.json({
            success: false,
            message: "There was a problem. Please try again.",
        }, { status: 500 });
    }
}

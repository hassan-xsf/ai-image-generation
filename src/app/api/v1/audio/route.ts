import { randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import UnrealSpeech, { save } from "unrealspeech";
import { AssemblyAI } from 'assemblyai';

const unrealSpeech = new UnrealSpeech(process.env.UNREAL_SPEECH_KEY!);
const client = new AssemblyAI({
    apiKey: process.env.ASSEMBLY_AI_KEY!,
});


export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { captions , model}: { captions: string  , model: string} = body;


        const speechBuffer = await unrealSpeech.stream(
            captions,  // text: string
            model,     // voiceId?: string (optional)
        );

        const name = randomUUID();

        save(speechBuffer, "public/audios/" + name + ".mp3");

        const transcript = await client.transcripts.transcribe({ audio: "public/audios/" + name + ".mp3" });

        return NextResponse.json({
            success: true,
            message: "Audio saved!",
            data: {
                name,
                transcript: transcript.words,
            }
        }, { status: 200 });

    } catch (error) {
        console.error(error);
        return NextResponse.json({
            success: false,
            message: "There was a problem, Please try again",
        }, { status: 500 });
    }
}

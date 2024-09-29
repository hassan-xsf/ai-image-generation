import { randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import UnrealSpeech, { save } from "unrealspeech";
import { AssemblyAI, TranscriptWord } from 'assemblyai';

const unrealSpeech = new UnrealSpeech("WMI7atwHMC1QkrNQP0tph8Nnintt43o9xMqLsglACTOwKH1J3GZKyB");
const client = new AssemblyAI({
    apiKey: '6480d95ba97d4b20bd80045c82a68eda',
});


export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { captions } = body;

        const speechBuffer = await unrealSpeech.stream(captions);
        const name = randomUUID();

        await save(speechBuffer, "public/audios/" + name + ".mp3");

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

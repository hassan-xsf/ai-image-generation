"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import type { PromptType, Prompt } from '@/types/promptType'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { Button } from '@/components/ui/button'
import { Player } from '@remotion/player';

import { MyVideo } from '@/remotion/MyVideo';
import type { Caption } from '@/types/caption';


const Generate = () => {

    const { register, handleSubmit } = useForm()
    const [promptStatus, setPromptStatus] = useState<string>("Still")

    const [imageList, setimageList] = useState<Array<string>>([])
    const [captions, setCaptions] = useState<Array<Caption>>([])
    const [audioName, setaudioName] = useState<string>("")




    const onGenerate = async () => {
        try {
            setPromptStatus("Loading data...")
            const res = await axios.post<AxiosResponse<PromptType>>('api/v1/video')

            console.log(res.data.data.data)

            setPromptStatus("Loading audio and captions...")
            const captions = res.data.data.data.map(e => e.imageText).join('.............');
            console.log(captions)
            const imageLink = res.data.data.data.map(e => e.imageLink);
            setimageList(imageLink)

            const audio = await axios.post('api/v1/audio', { captions })
            console.log(audio.data.data)
            setCaptions(audio.data.data.transcript)
            setaudioName(audio.data.data.name)

            setPromptStatus("Loading images...")

            const promises = res.data.data.data.map((e: Prompt) => axios.get(e.imageLink))
            await Promise.all(promises)
            setPromptStatus("Loaded")


        } catch (error) {
            if (error instanceof AxiosError) {
                console.log(error.message)
            }
            else {
                console.log(error)
            }
        }

    }
    return (
        <div className="flex flex-col items-center justify-center pt-20">
            <div className="pb-20">
                <h1 className="text-4xl font-extrabold text-red-600">Short Video<span className="inline text-white"> Generator using AI</span></h1>
                <h4 className="text-xl font-light text-zinc-200 italic">Generate unlimited videos using Generative AI and post them for free!</h4>
            </div>
            <form className="flex flex-col pb-10" onSubmit={handleSubmit(onGenerate)}>
                <Input {...register("prompt")} className="text-white my-4 w-96" type="text" placeholder="Enter your prompt" />
                <Button className="bg-red-600 hover:bg-red-900">Enter</Button>
            </form>
            <h4 className="text-xl font-light text-zinc-200 italic pb-4">Stage: {promptStatus}</h4>
            {
                promptStatus === 'Loaded' &&
                <Player
                    component={MyVideo}
                    durationInFrames={30 * 8 * 5}
                    compositionWidth={600}
                    compositionHeight={800}
                    fps={30}
                    controls
                    inputProps={{ images: imageList, captions, audioName }}
                />
            }
        </div>
    )
}

export default Generate
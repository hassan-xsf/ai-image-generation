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


const Generate = () => {

    const { register, handleSubmit } = useForm()
    const [promptStatus, setPromptStatus] = useState<"Still" | "Loading Data" | "Loading Images" | "Loaded">("Still")
    const [promptData, setpromptData] = useState<null | PromptType>(null)

    const onGenerate = async () => {
        try {
            setPromptStatus("Loading Data")
            const res = await axios.post<AxiosResponse<PromptType>>('api/v1/video')

            console.log(res.data.data.data)

            setpromptData(res.data.data)
            setPromptStatus("Loaded")
            const captions = res.data.data.data.map(e => e.imageText).join('              ')
            const audio = await axios.post('api/v1/audio' , {captions})
            console.log(audio.data.data)


            setPromptStatus("Loading Images")

            const promises = res.data.data.data.map((e: Prompt) => axios.get(e.imageLink))
            await Promise.all(promises)

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
            <Player
                component={MyVideo}
                durationInFrames={30 * 12}
                compositionWidth={600}
                compositionHeight={800}
                fps={30}
                controls
            />
            <div className="grid grid-cols-3 gap-2 rounded-md min-h-[30vh] w-1/3">
                {
                    promptStatus === "Loaded" && promptData != null && (
                        promptData.data.map((e, indx) => (
                            <Image
                                src={e.imageLink}
                                alt={e.imageText}
                                key={indx}
                                width="600" height="600"
                                priority
                            />
                        ))
                    )
                }
            </div>
        </div>
    )
}

export default Generate
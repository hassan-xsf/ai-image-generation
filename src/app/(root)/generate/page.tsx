"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import type { PromptType } from '@/types/promptType'
import axios, { AxiosError } from 'axios'
import { Button } from '@/components/ui/button'

const Generate = () => {

    const { register, handleSubmit } = useForm()
    const [prompt, setPrompt] = useState<"Loading" | "Loaded">("Loading")
    const [promptData, setpromptData] = useState<null | PromptType>(null)

    const onGenerate = async () => {
        try {
            setPrompt("Loading")
            const res = await axios.post('api/v1/video')
            console.log(res.data.data.data)
            setpromptData(res.data.data)
            setPrompt("Loaded")

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
        <div className="flex flex-col items-center justify-center pt-96">
            <div className="pb-20">
                <h1 className="text-4xl font-extrabold text-red-600">Short Video<h1 className="inline text-white"> Generator using AI</h1></h1>
                <h4 className="text-xl font-light text-zinc-200 italic">Generate unlimited videos using Generative AI and post them for free!</h4>
            </div>
            <form className="flex flex-col pb-10" onSubmit={handleSubmit(onGenerate)}>
                <Input {...register("prompt")} className="text-white my-4 w-96" type="text" placeholder="Enter your prompt" />
                <Button className="bg-red-600 hover:bg-red-900">Enter</Button>
            </form>
            <h4 className="text-xl font-light text-zinc-200 italic pb-4">Generated using prompt: None</h4>
            <div className="grid grid-cols-3 gap-2 rounded-md h-[30vh] w-1/3">
                {
                    prompt === "Loaded" && promptData != null && (
                        promptData.data.map((e , indx) => (
                            <Image src = {e.imageLink} alt = {e.imageText} key = {indx} width = "1024" height = "1024" placeholder="blur" blurDataURL="data:image/svg+xml;base64,..."/>
                        ))
                    )
                }
            </div>
        </div>
    )
}

export default Generate
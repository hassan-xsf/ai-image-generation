"use client"
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import type { PromptType } from '@/types/promptType'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { Button } from '@/components/ui/button'
import { Player } from '@remotion/player';

import { MyVideo } from '@/remotion/MyVideo';
import type { Caption } from '@/types/caption';
import { staticFile } from 'remotion'
import { MagicWandIcon } from '@radix-ui/react-icons'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Progress } from '@/components/ui/progress'



const Generate = () => {

    const { register, handleSubmit } = useForm()

    const [promptStatus, setPromptStatus] = useState<string>("None")
    const [imageList, setimageList] = useState<Array<string>>([])
    const [captions, setCaptions] = useState<Array<Caption>>([])
    const [audioName, setaudioName] = useState<string | null>(null)
    const [open, setOpen] = useState(false)



    const [audioDuration, setAudioDuration] = useState(0)

    useEffect(() => {
        if (!audioName) return;

        const audio = new Audio(staticFile(`/audios/${audioName}.mp3`));

        const handleLoadedMetadata = () => {
            setAudioDuration(Math.round(audio.duration));
        };

        audio.addEventListener('loadedmetadata', handleLoadedMetadata);

        return () => {
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        };
    }, [audioName]);

    async function onGenerate(values: { prompt?: string }) {
        try {

            setOpen(true);
            setPromptStatus("Loading data...")
            const res = await axios.post<AxiosResponse<PromptType>>('api/v1/video', { contextProvided: values.prompt })
            setPromptStatus("Loading audio and captions...")

            const captions = res.data.data.data.map(e => e).join('....');
            console.log(captions)

            const imageLink = res.data.data.data.map(e => `https://image.pollinations.ai/prompt/${e}?model=flux-realism?nologo=True`);
            setimageList(imageLink)

            const audio = await axios.post('api/v1/audio', { captions })
            setCaptions(audio.data.data.transcript)
            setaudioName(audio.data.data.name)

            setPromptStatus("Loading images...")

            const promises = imageLink.map((e) => axios.get(e))
            await Promise.all(promises)

            setPromptStatus("Loaded")
            setOpen(false)

        } catch (error) {
            if (error instanceof AxiosError) {
            }
            else {
                console.log(error)
            }
        }
    }
    return (
        <>
            <div className="flex flex-col items-center justify-center pt-20 tracking-tighter">
                <div className="pb-20 text-center">
                    <h1 className="text-4xl font-extrabold text-red-600">Short Video<span className="inline text-white"> Generator using AI</span></h1>
                    <h4 className="text-xl font-light text-zinc-200">Generate unlimited videos using Generative AI and post them for free!</h4>
                </div>
                <form className="flex flex-col pb-10 items-start" onSubmit={handleSubmit(onGenerate)}>
                    <h4 className="text-xl font-light text-zinc-200">Enter any hints or context of the short you want to generate, If you are confused just click on Generate and see the magic.</h4>
                    <Input {...register("prompt")} className="text-white my-4 w-full rounded-md" type="text" placeholder="Enter your prompt" />
                    <h4 className="text-xl font-light text-zinc-200 mb-4">Click on generate to see the magic!</h4>
                    <Button className="bg-red-600 hover:bg-red-900 rounded-md font-extrabold text-white text-lg py-6 self-center"> Generate <MagicWandIcon className="size-7 w-1/5" /></Button>
                </form>

                <Dialog open={open} onOpenChange={() => window.location.reload()}>
                    <DialogContent className="sm:max-w-[500px] bg-black border-white">
                        <div className="flex flex-col items-center space-y-4 p-6">
                            <div className="w-12 h-12 rounded-full border-4 border-white border-t-black animate-spin">
                                <MagicWandIcon color='white' />
                            </div>
                            <Progress className="w-full" value={33} />
                            <div className="text-center space-y-2">
                                <h3 className="text-lg font-semibold text-white">{promptStatus}</h3>
                                <p className="text-sm text-gray-400">
                                    Generating a short video may take upto 3 minutes, Some models are slower than others
                                </p>
                            </div>
                            <Button
                                variant="outline"
                                onClick={() => window.location.reload()}
                                className="bg-black text-white border-white hover:bg-white hover:text-black"
                            >
                                Close and Refresh
                            </Button>
                        </div>
                    </DialogContent>
                </Dialog>
                {
                    promptStatus === 'Loaded' &&
                    <Player
                        component={MyVideo}
                        durationInFrames={30 * audioDuration}
                        compositionWidth={600}
                        compositionHeight={800}
                        fps={30}
                        controls
                        inputProps={{ images: imageList, captions, audioName, audioDuration }}
                    />
                }
            </div>
        </>
    )
}

export default Generate
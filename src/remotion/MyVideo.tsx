import { useCurrentFrame, staticFile, interpolate, Audio as RemoAudio } from 'remotion';
import { Caption } from '@/types/caption';
import Image from 'next/image';



export const MyVideo: React.FC<{ images: string[], captions: Caption[], audioName: string | null , audioDuration: number }> = ({ images, captions, audioName , audioDuration }) => {

    const frame = useCurrentFrame();
    const fps = 30; 

    const totalFrames = audioDuration * fps;
    
    const framesPerImage = totalFrames / images.length;
    
    const imageIndex = Math.floor(frame / framesPerImage) % images.length;
    
    const frameInCurrentImage = frame % framesPerImage;
    
    const interpolated = interpolate(frameInCurrentImage, [0, 30], [1, 1.1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    const currentImage = images[imageIndex];
    const captionTime = Math.round(frame / fps) * 1000;
    const currentCaption: string = getCaptionsInRange(captions, captionTime - 2000, captionTime + 2000);

    return (
        <>
            <div>
                <Image alt="Image" height="500" width="500" src={currentImage} style={{ width: '100%', height: '100%', transform: `scale(${interpolated})`, }} />
            </div>
            <div style={{
                position: 'absolute',
                bottom: '10%',
                width: '100%',
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: '20px',
                padding: '10px',
                color: 'white',
                borderRadius: '10px',
                maxHeight: '60px',
            }}>
                {currentCaption}

            </div>
            <RemoAudio volume={1} preload='auto' src={staticFile(`/audios/${audioName}.mp3`)} />
        </>
    );
};

function getCaptionsInRange(captions: Caption[], startTime: number, endTime: number) {
    return captions
        .filter(caption => caption.start < endTime && caption.end > startTime)
        .map(caption => caption.text)
        .join(' ');
}
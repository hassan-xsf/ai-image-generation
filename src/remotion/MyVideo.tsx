import { Img, useCurrentFrame, staticFile, interpolate, Audio } from 'remotion';
import { Caption } from '@/types/caption';
import Image from 'next/image';


// const images = [
//     'https://image.pollinations.ai/prompt/A%20bumblebee%20bat%20in%20flight%20over%20a%20lush%20jungle%20at%20sunset%20with%20the%20sun%20casting%20golden%20rays%20through%20the%20leaves%20%20highly%20detailed%20realistic%20photography%20style%20wildlife%20photography%20by%20David%20Yarrow',
//     'https://image.pollinations.ai/prompt/A%20vibrant%20underwater%20view%20of%20the%20Great%20Barrier%20Reef%20with%20colorful%20corals%20and%20a%20variety%20of%20tropical%20fish%20swimming%20around%20highly%20detailed%20realistic%20underwater%20photography%20style%20ocean%20photography%20by%20David%20Doubilet',
//     'https://image.pollinations.ai/prompt/A%20close-up%20of%20a%20piece%20of%20birch%20bark%20tar%20chewing%20gum%20resting%20on%20a%20stone%20tool%20in%20a%20dark%20and%20mysterious%20forest%20setting%20highly%20detailed%20realistic%20photography%20style%20archaeology%20photography%20by%20Steve%20McCurry',
//     'https://image.pollinations.ai/prompt/A%20bumblebee%20bat%20in%20flight%20over%20a%20lush%20jungle%20at%20sunset%20with%20the%20sun%20casting%20golden%20rays%20through%20the%20leaves%20%20highly%20detailed%20realistic%20photography%20style%20wildlife%20photography%20by%20David%20Yarrow',
//     'https://image.pollinations.ai/prompt/A%20vibrant%20underwater%20view%20of%20the%20Great%20Barrier%20Reef%20with%20colorful%20corals%20and%20a%20variety%20of%20tropical%20fish%20swimming%20around%20highly%20detailed%20realistic%20underwater%20photography%20style%20ocean%20photography%20by%20David%20Doubilet',
// ];



function getCaptionsInRange(captions: Caption[], startTime: number, endTime: number) {
    return captions
        .filter(caption => caption.start < endTime && caption.end > startTime)
        .map(caption => caption.text)
        .join(' ');
}

export const MyVideo: React.FC<{ images: string[], captions: Caption[], audioName: string }> = ({ images, captions, audioName }) => {
    const frame = useCurrentFrame();

    const framesPerImage = 7 * 30;

    const imageIndex = Math.floor(frame / framesPerImage) % images.length;
    
    const frameInCurrentImage = frame % framesPerImage; 
    // Interpolate based on the frame within the current image's window

    const interpolated = interpolate(frameInCurrentImage, [0, 30], [1, 1.1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    const currentIndex = imageIndex % images.length;
    const captionTime = Math.round(frame / 30) * 1000;


    const currentCaption: string = getCaptionsInRange(captions, captionTime - 2000, captionTime + 2000);

    return (
        <>
            <div>
                <Image alt = "Image" height = "500" width = "500" src={images[currentIndex]}  style={{ width: '100%', height: '100%', transform: `scale(${interpolated})`, }} />
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
            <Audio volume={1} preload='auto' src={staticFile(`/audios/${audioName}.mp3`)} />
        </>
    );
};
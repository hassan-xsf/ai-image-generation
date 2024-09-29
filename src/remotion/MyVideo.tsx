import { Img, useCurrentFrame, interpolate, Easing, AbsoluteFill } from 'remotion';



const images = [
    'https://image.pollinations.ai/prompt/A%20bumblebee%20bat%20in%20flight%20over%20a%20lush%20jungle%20at%20sunset%20with%20the%20sun%20casting%20golden%20rays%20through%20the%20leaves%20%20highly%20detailed%20realistic%20photography%20style%20wildlife%20photography%20by%20David%20Yarrow',
    'https://image.pollinations.ai/prompt/A%20vibrant%20underwater%20view%20of%20the%20Great%20Barrier%20Reef%20with%20colorful%20corals%20and%20a%20variety%20of%20tropical%20fish%20swimming%20around%20highly%20detailed%20realistic%20underwater%20photography%20style%20ocean%20photography%20by%20David%20Doubilet',
    'https://image.pollinations.ai/prompt/A%20close-up%20of%20a%20piece%20of%20birch%20bark%20tar%20chewing%20gum%20resting%20on%20a%20stone%20tool%20in%20a%20dark%20and%20mysterious%20forest%20setting%20highly%20detailed%20realistic%20photography%20style%20archaeology%20photography%20by%20Steve%20McCurry',
];

const captions = [
    "The average human brain contains about 86 billion neurons, each capable of forming thousands of connections with other neurons.",
    "The smallest mammal in the world is the bumblebee bat, which is only about the size of a bumblebee and weighs less than a dime.",
    "The Great Barrier Reef, the world's largest coral reef system, is made up of over 2,900 individual reefs and 900 islands."
]

export const MyVideo: React.FC = () => {
    const frame = useCurrentFrame();


    const frameInCurrentImage = frame % 120;

    // Interpolate based on the frame within the current image's window
    const interpolated = interpolate(frameInCurrentImage, [0, 30], [1, 1.1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });
    const imageIndex = Math.floor(frame / 120);
    const currentIndex = imageIndex % images.length;

    // Display each image for 120 frames (4 seconds at 30fps)
    
    const captionInterpolated = interpolate(frameInCurrentImage, [0, 30], [1, captions[currentIndex].length], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    const updatedCaption = "";
    console.log(captionInterpolated)
    return (
        <>
            <div>
                <Img src={images[currentIndex]} style={{ width: '100%', height: '100%', transform: `scale(${interpolated})`, }} />
            </div>
            <div style={{
                position: 'absolute',
                bottom: '10%',
                width: '80%',
                textAlign: 'center',
                fontSize: '40px',
                color: 'white',
                padding: '10px',
                borderRadius: '10px',
            }}>
                {updatedCaption}
                </div>
            </>
            );
};
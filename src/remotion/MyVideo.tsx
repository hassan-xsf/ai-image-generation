import { Img, useCurrentFrame, interpolate, Easing, AbsoluteFill } from 'remotion';



const images = [
    'https://image.pollinations.ai/prompt/A%20bumblebee%20bat%20in%20flight%20over%20a%20lush%20jungle%20at%20sunset%20with%20the%20sun%20casting%20golden%20rays%20through%20the%20leaves%20%20highly%20detailed%20realistic%20photography%20style%20wildlife%20photography%20by%20David%20Yarrow',
    'https://image.pollinations.ai/prompt/A%20vibrant%20underwater%20view%20of%20the%20Great%20Barrier%20Reef%20with%20colorful%20corals%20and%20a%20variety%20of%20tropical%20fish%20swimming%20around%20highly%20detailed%20realistic%20underwater%20photography%20style%20ocean%20photography%20by%20David%20Doubilet',
    'https://image.pollinations.ai/prompt/A%20close-up%20of%20a%20piece%20of%20birch%20bark%20tar%20chewing%20gum%20resting%20on%20a%20stone%20tool%20in%20a%20dark%20and%20mysterious%20forest%20setting%20highly%20detailed%20realistic%20photography%20style%20archaeology%20photography%20by%20Steve%20McCurry',
];

type Caption = {
    text: string,
    start: number,
    end: number,
    confidence: number,
    speaker: null;
}


const captions : Array<Caption> = [
    {
        text: "The",
        start: 640,
        end: 800,
        confidence: 1,
        speaker: null
    },
    {
        text: "average",
        start: 800,
        end: 1128,
        confidence: 0.99777,
        speaker: null
    },
    {
        text: "lifespan",
        start: 1174,
        end: 1622,
        confidence: 0.9386,
        speaker: null
    },
    {
        text: "of",
        start: 1646,
        end: 1758,
        confidence: 1,
        speaker: null
    },
    {
        text: "a",
        start: 1774,
        end: 1878,
        confidence: 1,
        speaker: null
    },
    {
        text: "goldfish",
        start: 1894,
        end: 2462,
        confidence: 0.98666,
        speaker: null
    },
    {
        text: "is",
        start: 2526,
        end: 2750,
        confidence: 0.99973,
        speaker: null
    },
    {
        text: "ten",
        start: 2790,
        end: 3062,
        confidence: 1,
        speaker: null
    },
    {
        text: "years,",
        start: 3126,
        end: 3590,
        confidence: 0.99972,
        speaker: null
    },
    {
        text: "which",
        start: 3710,
        end: 3942,
        confidence: 0.9998,
        speaker: null
    },
    {
        text: "is",
        start: 3966,
        end: 4150,
        confidence: 0.99982,
        speaker: null
    },
    {
        text: "much",
        start: 4190,
        end: 4438,
        confidence: 0.99988,
        speaker: null
    },
    {
        text: "longer",
        start: 4494,
        end: 4846,
        confidence: 0.99997,
        speaker: null
    },
    {
        text: "than",
        start: 4878,
        end: 5070,
        confidence: 0.99977,
        speaker: null
    },
    {
        text: "many",
        start: 5110,
        end: 5310,
        confidence: 0.99985,
        speaker: null
    },
    {
        text: "people",
        start: 5350,
        end: 5598,
        confidence: 0.99963,
        speaker: null
    },
    {
        text: "believe.",
        start: 5654,
        end: 6250,
        confidence: 0.99964,
        speaker: null
    },
    {
        text: "The",
        start: 6790,
        end: 7126,
        confidence: 1,
        speaker: null
    },
    {
        text: "world's",
        start: 7158,
        end: 7526,
        confidence: 0.61277,
        speaker: null
    },
    {
        text: "smallest",
        start: 7558,
        end: 8022,
        confidence: 0.99992,
        speaker: null
    },
    {
        text: "mammal",
        start: 8086,
        end: 8590,
        confidence: 0.90166,
        speaker: null
    },
    {
        text: "is",
        start: 8670,
        end: 8838,
        confidence: 0.99979,
        speaker: null
    },
    {
        text: "the",
        start: 8854,
        end: 8958,
        confidence: 1,
        speaker: null
    },
    {
        text: "bumblebee",
        start: 8974,
        end: 9462,
        confidence: 0.38466,
        speaker: null
    },
    {
        text: "bat.",
        start: 9486,
        end: 9990,
        confidence: 0.98574,
        speaker: null
    },
    {
        text: "Weighing",
        start: 10110,
        end: 10510,
        confidence: 0.9989,
        speaker: null
    },
    {
        text: "in",
        start: 10550,
        end: 10774,
        confidence: 0.9988,
        speaker: null
    },
    {
        text: "at",
        start: 10822,
        end: 10982,
        confidence: 1,
        speaker: null
    },
    {
        text: "a",
        start: 11006,
        end: 11118,
        confidence: 1,
        speaker: null
    },
    {
        text: "mere",
        start: 11134,
        end: 11374,
        confidence: 0.98392,
        speaker: null
    },
    {
        text: "2",
        start: 11422,
        end: 11654,
        confidence: 1,
        speaker: null
    },
    {
        text: "grams,",
        start: 11702,
        end: 12326,
        confidence: 0.45,
        speaker: null
    },
    {
        text: "about",
        start: 12438,
        end: 12710,
        confidence: 0.99683,
        speaker: null
    },
    {
        text: "the",
        start: 12750,
        end: 12926,
        confidence: 1,
        speaker: null
    },
    {
        text: "size",
        start: 12958,
        end: 13190,
        confidence: 0.99966,
        speaker: null
    },
    {
        text: "of",
        start: 13230,
        end: 13358,
        confidence: 1,
        speaker: null
    },
    {
        text: "a",
        start: 13374,
        end: 13478,
        confidence: 1,
        speaker: null
    },
    {
        text: "bumblebee,",
        start: 13494,
        end: 14478,
        confidence: 0.69696,
        speaker: null
    },
    {
        text: "the",
        start: 14654,
        end: 14966,
        confidence: 1,
        speaker: null
    },
    {
        text: "human",
        start: 14998,
        end: 15238,
        confidence: 0.99984,
        speaker: null
    },
    {
        text: "brain",
        start: 15294,
        end: 15638,
        confidence: 0.9927,
        speaker: null
    },
    {
        text: "is",
        start: 15694,
        end: 15934,
        confidence: 0.99989,
        speaker: null
    },
    {
        text: "more",
        start: 15982,
        end: 16190,
        confidence: 0.99984,
        speaker: null
    },
    {
        text: "active",
        start: 16230,
        end: 16486,
        confidence: 0.93294,
        speaker: null
    },
    {
        text: "at",
        start: 16518,
        end: 16686,
        confidence: 1,
        speaker: null
    },
    {
        text: "night",
        start: 16718,
        end: 16982,
        confidence: 0.99995,
        speaker: null
    },
    {
        text: "than",
        start: 17046,
        end: 17246,
        confidence: 0.99782,
        speaker: null
    },
    {
        text: "during",
        start: 17278,
        end: 17470,
        confidence: 0.99991,
        speaker: null
    },
    {
        text: "the",
        start: 17510,
        end: 17710,
        confidence: 1,
        speaker: null
    },
    {
        text: "day,",
        start: 17750,
        end: 18310,
        confidence: 0.99988,
        speaker: null
    },
    {
        text: "making",
        start: 18470,
        end: 18814,
        confidence: 0.99998,
        speaker: null
    },
    {
        text: "it",
        start: 18862,
        end: 18998,
        confidence: 0.99986,
        speaker: null
    },
    {
        text: "the",
        start: 19014,
        end: 19190,
        confidence: 1,
        speaker: null
    },
    {
        text: "perfect",
        start: 19230,
        end: 19574,
        confidence: 0.99993,
        speaker: null
    },
    {
        text: "time",
        start: 19622,
        end: 19926,
        confidence: 0.99978,
        speaker: null
    },
    {
        text: "for",
        start: 19998,
        end: 20206,
        confidence: 0.99987,
        speaker: null
    },
    {
        text: "learning",
        start: 20238,
        end: 20534,
        confidence: 0.93326,
        speaker: null
    },
    {
        text: "and",
        start: 20582,
        end: 20766,
        confidence: 1,
        speaker: null
    },
    {
        text: "problem",
        start: 20798,
        end: 21158,
        confidence: 0.99985,
        speaker: null
    },
    {
        text: "solving.",
        start: 21254,
        end: 21970,
        confidence: 0.66192,
        speaker: null
    },
    {
        text: "The",
        start: 22350,
        end: 22686,
        confidence: 1,
        speaker: null
    },
    {
        text: "Great",
        start: 22718,
        end: 22982,
        confidence: 0.99947,
        speaker: null
    },
    {
        text: "Barrier",
        start: 23046,
        end: 23566,
        confidence: 0.62766,
        speaker: null
    },
    {
        text: "Reef,",
        start: 23598,
        end: 24126,
        confidence: 0.99022,
        speaker: null
    },
    {
        text: "the",
        start: 24238,
        end: 24486,
        confidence: 1,
        speaker: null
    },
    {
        text: "largest",
        start: 24518,
        end: 24958,
        confidence: 0.99982,
        speaker: null
    },
    {
        text: "coral",
        start: 25014,
        end: 25390,
        confidence: 0.82771,
        speaker: null
    },
    {
        text: "reef",
        start: 25430,
        end: 25734,
        confidence: 0.97761,
        speaker: null
    },
    {
        text: "system",
        start: 25782,
        end: 26014,
        confidence: 0.99981,
        speaker: null
    },
    {
        text: "in",
        start: 26062,
        end: 26174,
        confidence: 0.9995,
        speaker: null
    },
    {
        text: "the",
        start: 26182,
        end: 26326,
        confidence: 1,
        speaker: null
    },
    {
        text: "world,",
        start: 26358,
        end: 27000,
        confidence: 0.98835,
        speaker: null
    },
    {
        text: "is",
        start: 27190,
        end: 27540,
        confidence: 0.95258,
        speaker: null
    },
    {
        text: "actually",
        start: 27580,
        end: 27924,
        confidence: 0.99956,
        speaker: null
    },
    {
        text: "made",
        start: 28012,
        end: 28236,
        confidence: 0.99997,
        speaker: null
    },
    {
        text: "up",
        start: 28268,
        end: 28412,
        confidence: 0.99982,
        speaker: null
    },
    {
        text: "of",
        start: 28436,
        end: 28668,
        confidence: 1,
        speaker: null
    },
    {
        text: "billions",
        start: 28724,
        end: 29252,
        confidence: 0.9996,
        speaker: null
    },
    {
        text: "of",
        start: 29276,
        end: 29460,
        confidence: 1,
        speaker: null
    },
    {
        text: "tiny",
        start: 29500,
        end: 29884,
        confidence: 0.88999,
        speaker: null
    },
    {
        text: "organisms",
        start: 29932,
        end: 30564,
        confidence: 0.92749,
        speaker: null
    },
    {
        text: "called",
        start: 30612,
        end: 31060,
        confidence: 0.97936,
        speaker: null
    },
    {
        text: "coral",
        start: 31180,
        end: 31620,
        confidence: 0.99581,
        speaker: null
    },
    {
        text: "polyps.",
        start: 31660,
        end: 32560,
        confidence: 0.53898,
        speaker: null
    },
    {
        text: "The",
        start: 32860,
        end: 33196,
        confidence: 1,
        speaker: null
    },
    {
        text: "earth's",
        start: 33228,
        end: 33556,
        confidence: 0.56933,
        speaker: null
    },
    {
        text: "atmosphere",
        start: 33588,
        end: 34228,
        confidence: 0.86,
        speaker: null
    },
    {
        text: "is",
        start: 34284,
        end: 34500,
        confidence: 0.99977,
        speaker: null
    },
    {
        text: "constantly",
        start: 34540,
        end: 35140,
        confidence: 0.68232,
        speaker: null
    },
    {
        text: "moving,",
        start: 35180,
        end: 35852,
        confidence: 0.88518,
        speaker: null
    },
    {
        text: "creating",
        start: 36036,
        end: 36564,
        confidence: 0.9997,
        speaker: null
    },
    {
        text: "winds",
        start: 36612,
        end: 37020,
        confidence: 0.99948,
        speaker: null
    },
    {
        text: "that",
        start: 37060,
        end: 37260,
        confidence: 0.9999,
        speaker: null
    },
    {
        text: "can",
        start: 37300,
        end: 37524,
        confidence: 0.99932,
        speaker: null
    },
    {
        text: "travel",
        start: 37572,
        end: 37948,
        confidence: 0.87721,
        speaker: null
    },
    {
        text: "thousands",
        start: 38004,
        end: 38468,
        confidence: 0.99972,
        speaker: null
    },
    {
        text: "of",
        start: 38484,
        end: 38660,
        confidence: 1,
        speaker: null
    },
    {
        text: "miles.",
        start: 38700,
        end: 39360,
        confidence: 0.68,
        speaker: null
    },
    {
        text: "The",
        start: 39780,
        end: 40116,
        confidence: 1,
        speaker: null
    },
    {
        text: "population",
        start: 40148,
        end: 40596,
        confidence: 0.99993,
        speaker: null
    },
    {
        text: "of",
        start: 40668,
        end: 40852,
        confidence: 1,
        speaker: null
    },
    {
        text: "the",
        start: 40876,
        end: 41060,
        confidence: 1,
        speaker: null
    },
    {
        text: "earth",
        start: 41100,
        end: 41388,
        confidence: 0.99991,
        speaker: null
    },
    {
        text: "is",
        start: 41444,
        end: 41684,
        confidence: 0.9999,
        speaker: null
    },
    {
        text: "estimated",
        start: 41732,
        end: 42236,
        confidence: 0.9997,
        speaker: null
    },
    {
        text: "to",
        start: 42268,
        end: 42412,
        confidence: 1,
        speaker: null
    },
    {
        text: "be",
        start: 42436,
        end: 42620,
        confidence: 0.99845,
        speaker: null
    },
    {
        text: "over",
        start: 42660,
        end: 42980,
        confidence: 0.99653,
        speaker: null
    },
    {
        text: "8",
        start: 43060,
        end: 43372,
        confidence: 1,
        speaker: null
    },
    {
        text: "billion",
        start: 43436,
        end: 43780,
        confidence: 1,
        speaker: null
    },
    {
        text: "people,",
        start: 43860,
        end: 44460,
        confidence: 0.99972,
        speaker: null
    },
    {
        text: "with",
        start: 44620,
        end: 44892,
        confidence: 0.99958,
        speaker: null
    },
    {
        text: "an",
        start: 44916,
        end: 45100,
        confidence: 0.99903,
        speaker: null
    },
    {
        text: "average",
        start: 45140,
        end: 45436,
        confidence: 0.99919,
        speaker: null
    },
    {
        text: "of",
        start: 45468,
        end: 45660,
        confidence: 1,
        speaker: null
    },
    {
        text: "150",
        start: 45700,
        end: 46492,
        confidence: 1,
        speaker: null
    },
    {
        text: "babies",
        start: 46556,
        end: 46948,
        confidence: 0.55212,
        speaker: null
    },
    {
        text: "born",
        start: 47004,
        end: 47372,
        confidence: 0.8461,
        speaker: null
    },
    {
        text: "every",
        start: 47436,
        end: 47708,
        confidence: 0.99684,
        speaker: null
    },
    {
        text: "minute.",
        start: 47764,
        end: 47940,
        confidence: 0.99,
        speaker: null
    }
]

function getCaptionsInRange(startTime: number, endTime: number) {
    return captions
        .filter(caption => caption.start >= startTime && caption.end <= endTime)
        .map(caption => caption.text)
        .join(' ');
}

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
    const captionTime = Math.round(frame / 30) * 1000;


    // Display each image for 120 frames (4 seconds at 30fps)
    return (
        <>
            <div>
                <Img src={images[currentIndex]} style={{ width: '100%', height: '100%', transform: `scale(${interpolated})`, }} />
            </div>
            <div style={{
                position: 'absolute',
                bottom: '5%',
                width: '100%',
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: '30px',
                color: 'white',
                padding: '10px',
                borderRadius: '10px',
            }}>
                {getCaptionsInRange(captionTime, captionTime + 1000)}
            </div>
        </>
    );
};
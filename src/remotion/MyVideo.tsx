import { Img, useCurrentFrame, staticFile, interpolate, Audio } from 'remotion';



// const images = [
//     'https://image.pollinations.ai/prompt/A%20bumblebee%20bat%20in%20flight%20over%20a%20lush%20jungle%20at%20sunset%20with%20the%20sun%20casting%20golden%20rays%20through%20the%20leaves%20%20highly%20detailed%20realistic%20photography%20style%20wildlife%20photography%20by%20David%20Yarrow',
//     'https://image.pollinations.ai/prompt/A%20vibrant%20underwater%20view%20of%20the%20Great%20Barrier%20Reef%20with%20colorful%20corals%20and%20a%20variety%20of%20tropical%20fish%20swimming%20around%20highly%20detailed%20realistic%20underwater%20photography%20style%20ocean%20photography%20by%20David%20Doubilet',
//     'https://image.pollinations.ai/prompt/A%20close-up%20of%20a%20piece%20of%20birch%20bark%20tar%20chewing%20gum%20resting%20on%20a%20stone%20tool%20in%20a%20dark%20and%20mysterious%20forest%20setting%20highly%20detailed%20realistic%20photography%20style%20archaeology%20photography%20by%20Steve%20McCurry',
//     'https://image.pollinations.ai/prompt/A%20bumblebee%20bat%20in%20flight%20over%20a%20lush%20jungle%20at%20sunset%20with%20the%20sun%20casting%20golden%20rays%20through%20the%20leaves%20%20highly%20detailed%20realistic%20photography%20style%20wildlife%20photography%20by%20David%20Yarrow',
//     'https://image.pollinations.ai/prompt/A%20vibrant%20underwater%20view%20of%20the%20Great%20Barrier%20Reef%20with%20colorful%20corals%20and%20a%20variety%20of%20tropical%20fish%20swimming%20around%20highly%20detailed%20realistic%20underwater%20photography%20style%20ocean%20photography%20by%20David%20Doubilet',
// ];

type Caption = {
    text: string,
    start: number,
    end: number,
    confidence: number,
    speaker: null;
}
const captions: Array<Caption> =
    [
        {
            "text": "The",
            "start": 640,
            "end": 776,
            "confidence": 1,
            "speaker": null
        },
        {
            "text": "worlds",
            "start": 776,
            "end": 1168,
            "confidence": 0.49874,
            "speaker": null
        },
        {
            "text": "largest",
            "start": 1190,
            "end": 1702,
            "confidence": 0.99991,
            "speaker": null
        },
        {
            "text": "snowflake",
            "start": 1766,
            "end": 2390,
            "confidence": 0.77848,
            "speaker": null
        },
        {
            "text": "on",
            "start": 2430,
            "end": 2630,
            "confidence": 0.99945,
            "speaker": null
        },
        {
            "text": "record,",
            "start": 2670,
            "end": 3062,
            "confidence": 0.97407,
            "speaker": null
        },
        {
            "text": "measured",
            "start": 3166,
            "end": 3582,
            "confidence": 0.95986,
            "speaker": null
        },
        {
            "text": "15",
            "start": 3646,
            "end": 4062,
            "confidence": 1,
            "speaker": null
        },
        {
            "text": "inches",
            "start": 4166,
            "end": 4574,
            "confidence": 0.84432,
            "speaker": null
        },
        {
            "text": "wide",
            "start": 4622,
            "end": 4942,
            "confidence": 0.50304,
            "speaker": null
        },
        {
            "text": "and",
            "start": 5006,
            "end": 5254,
            "confidence": 1,
            "speaker": null
        },
        {
            "text": "eight",
            "start": 5302,
            "end": 5558,
            "confidence": 1,
            "speaker": null
        },
        {
            "text": "inches",
            "start": 5614,
            "end": 5910,
            "confidence": 0.95729,
            "speaker": null
        },
        {
            "text": "thick,",
            "start": 5950,
            "end": 6150,
            "confidence": 0.98835,
            "speaker": null
        },
        {
            "text": "falling",
            "start": 6190,
            "end": 6550,
            "confidence": 0.7848,
            "speaker": null
        },
        {
            "text": "in",
            "start": 6590,
            "end": 6766,
            "confidence": 0.99908,
            "speaker": null
        },
        {
            "text": "Fort",
            "start": 6798,
            "end": 7030,
            "confidence": 0.8902,
            "speaker": null
        },
        {
            "text": "Kiot,",
            "start": 7070,
            "end": 7494,
            "confidence": 0.14723,
            "speaker": null
        },
        {
            "text": "Montana,",
            "start": 7542,
            "end": 8262,
            "confidence": 0.35765,
            "speaker": null
        },
        {
            "text": "in",
            "start": 8406,
            "end": 8686,
            "confidence": 0.99754,
            "speaker": null
        },
        {
            "text": "1887.",
            "start": 8718,
            "end": 10078,
            "confidence": 1,
            "speaker": null
        },
        {
            "text": "The",
            "start": 10214,
            "end": 10510,
            "confidence": 1,
            "speaker": null
        },
        {
            "text": "average",
            "start": 10550,
            "end": 10878,
            "confidence": 0.99618,
            "speaker": null
        },
        {
            "text": "person",
            "start": 10934,
            "end": 11270,
            "confidence": 0.99983,
            "speaker": null
        },
        {
            "text": "laughs",
            "start": 11350,
            "end": 11878,
            "confidence": 0.82389,
            "speaker": null
        },
        {
            "text": "about",
            "start": 11934,
            "end": 12198,
            "confidence": 0.99916,
            "speaker": null
        },
        {
            "text": "15",
            "start": 12254,
            "end": 12614,
            "confidence": 1,
            "speaker": null
        },
        {
            "text": "times",
            "start": 12702,
            "end": 13022,
            "confidence": 0.9997,
            "speaker": null
        },
        {
            "text": "a",
            "start": 13086,
            "end": 13286,
            "confidence": 1,
            "speaker": null
        },
        {
            "text": "day,",
            "start": 13318,
            "end": 13678,
            "confidence": 0.99995,
            "speaker": null
        },
        {
            "text": "while",
            "start": 13774,
            "end": 14078,
            "confidence": 0.99843,
            "speaker": null
        },
        {
            "text": "children",
            "start": 14134,
            "end": 14446,
            "confidence": 0.99964,
            "speaker": null
        },
        {
            "text": "laugh",
            "start": 14518,
            "end": 15054,
            "confidence": 0.99516,
            "speaker": null
        },
        {
            "text": "an",
            "start": 15142,
            "end": 15390,
            "confidence": 0.4556,
            "speaker": null
        },
        {
            "text": "astonishing",
            "start": 15430,
            "end": 16062,
            "confidence": 0.99951,
            "speaker": null
        },
        {
            "text": "400",
            "start": 16126,
            "end": 16694,
            "confidence": 1,
            "speaker": null
        },
        {
            "text": "times",
            "start": 16742,
            "end": 17094,
            "confidence": 0.99943,
            "speaker": null
        },
        {
            "text": "a",
            "start": 17182,
            "end": 17358,
            "confidence": 0.99,
            "speaker": null
        },
        {
            "text": "day.",
            "start": 17374,
            "end": 17526,
            "confidence": 0.99969,
            "speaker": null
        },
        {
            "text": "A",
            "start": 17558,
            "end": 17702,
            "confidence": 0.99,
            "speaker": null
        },
        {
            "text": "group",
            "start": 17726,
            "end": 17886,
            "confidence": 0.99892,
            "speaker": null
        },
        {
            "text": "of",
            "start": 17918,
            "end": 18086,
            "confidence": 1,
            "speaker": null
        },
        {
            "text": "owls",
            "start": 18118,
            "end": 18582,
            "confidence": 0.90855,
            "speaker": null
        },
        {
            "text": "is",
            "start": 18646,
            "end": 18846,
            "confidence": 0.99935,
            "speaker": null
        },
        {
            "text": "called",
            "start": 18878,
            "end": 19118,
            "confidence": 0.99986,
            "speaker": null
        },
        {
            "text": "a",
            "start": 19174,
            "end": 19366,
            "confidence": 0.97,
            "speaker": null
        },
        {
            "text": "parliament.",
            "start": 19398,
            "end": 19918,
            "confidence": 0.64577,
            "speaker": null
        },
        {
            "text": "Reflecting",
            "start": 19974,
            "end": 20598,
            "confidence": 0.98962,
            "speaker": null
        },
        {
            "text": "their",
            "start": 20654,
            "end": 20894,
            "confidence": 0.99943,
            "speaker": null
        },
        {
            "text": "wise",
            "start": 20942,
            "end": 21350,
            "confidence": 0.68213,
            "speaker": null
        },
        {
            "text": "and",
            "start": 21430,
            "end": 21694,
            "confidence": 1,
            "speaker": null
        },
        {
            "text": "often",
            "start": 21742,
            "end": 22046,
            "confidence": 0.99933,
            "speaker": null
        },
        {
            "text": "silent",
            "start": 22118,
            "end": 22598,
            "confidence": 0.5077,
            "speaker": null
        },
        {
            "text": "nature,",
            "start": 22654,
            "end": 23134,
            "confidence": 0.50255,
            "speaker": null
        },
        {
            "text": "the",
            "start": 23262,
            "end": 23526,
            "confidence": 1,
            "speaker": null
        },
        {
            "text": "human",
            "start": 23558,
            "end": 23798,
            "confidence": 0.99983,
            "speaker": null
        },
        {
            "text": "brain",
            "start": 23854,
            "end": 24198,
            "confidence": 0.97828,
            "speaker": null
        },
        {
            "text": "can",
            "start": 24254,
            "end": 24542,
            "confidence": 0.99942,
            "speaker": null
        },
        {
            "text": "process",
            "start": 24606,
            "end": 25118,
            "confidence": 0.9999,
            "speaker": null
        },
        {
            "text": "information",
            "start": 25254,
            "end": 25790,
            "confidence": 0.99998,
            "speaker": null
        },
        {
            "text": "at",
            "start": 25910,
            "end": 26118,
            "confidence": 1,
            "speaker": null
        },
        {
            "text": "a",
            "start": 26134,
            "end": 26310,
            "confidence": 0.48,
            "speaker": null
        },
        {
            "text": "speed",
            "start": 26350,
            "end": 26606,
            "confidence": 0.92029,
            "speaker": null
        },
        {
            "text": "of",
            "start": 26638,
            "end": 26830,
            "confidence": 1,
            "speaker": null
        },
        {
            "text": "up",
            "start": 26870,
            "end": 27022,
            "confidence": 0.99973,
            "speaker": null
        },
        {
            "text": "to",
            "start": 27046,
            "end": 27230,
            "confidence": 1,
            "speaker": null
        },
        {
            "text": "11",
            "start": 27270,
            "end": 27686,
            "confidence": 1,
            "speaker": null
        },
        {
            "text": "million",
            "start": 27798,
            "end": 28214,
            "confidence": 1,
            "speaker": null
        },
        {
            "text": "bits",
            "start": 28302,
            "end": 28718,
            "confidence": 0.95388,
            "speaker": null
        },
        {
            "text": "per",
            "start": 28774,
            "end": 29038,
            "confidence": 0.84,
            "speaker": null
        },
        {
            "text": "second,",
            "start": 29094,
            "end": 29430,
            "confidence": 0.94,
            "speaker": null
        },
        {
            "text": "making",
            "start": 29510,
            "end": 29870,
            "confidence": 0.99699,
            "speaker": null
        },
        {
            "text": "it",
            "start": 29950,
            "end": 30190,
            "confidence": 0.33041,
            "speaker": null
        },
        {
            "text": "at",
            "start": 30230,
            "end": 30478,
            "confidence": 0.57,
            "speaker": null
        },
        {
            "text": "remarkably",
            "start": 30534,
            "end": 31190,
            "confidence": 0.99682,
            "speaker": null
        },
        {
            "text": "complex",
            "start": 31270,
            "end": 31954,
            "confidence": 0.83598,
            "speaker": null
        },
        {
            "text": "and",
            "start": 32062,
            "end": 32306,
            "confidence": 0.79,
            "speaker": null
        },
        {
            "text": "efficient",
            "start": 32338,
            "end": 32802,
            "confidence": 0.99962,
            "speaker": null
        },
        {
            "text": "organ.",
            "start": 32866,
            "end": 33114,
            "confidence": 0.99756,
            "speaker": null
        },
        {
            "text": "That",
            "start": 33162,
            "end": 33346,
            "confidence": 0.68712,
            "speaker": null
        },
        {
            "text": "world's",
            "start": 33378,
            "end": 33834,
            "confidence": 0.97457,
            "speaker": null
        },
        {
            "text": "smallest",
            "start": 33882,
            "end": 34354,
            "confidence": 0.99981,
            "speaker": null
        },
        {
            "text": "mammal",
            "start": 34402,
            "end": 34770,
            "confidence": 0.99578,
            "speaker": null
        },
        {
            "text": "is",
            "start": 34810,
            "end": 35034,
            "confidence": 0.99618,
            "speaker": null
        },
        {
            "text": "the",
            "start": 35082,
            "end": 35242,
            "confidence": 1,
            "speaker": null
        },
        {
            "text": "bumblebee",
            "start": 35266,
            "end": 35850,
            "confidence": 0.67492,
            "speaker": null
        },
        {
            "text": "bat.",
            "start": 35890,
            "end": 36242,
            "confidence": 0.99522,
            "speaker": null
        },
        {
            "text": "Immeasuring",
            "start": 36306,
            "end": 36890,
            "confidence": 0.61888,
            "speaker": null
        },
        {
            "text": "just",
            "start": 36970,
            "end": 37330,
            "confidence": 0.99948,
            "speaker": null
        },
        {
            "text": "1.5",
            "start": 37410,
            "end": 38338,
            "confidence": 0.91,
            "speaker": null
        },
        {
            "text": "inches",
            "start": 38394,
            "end": 38714,
            "confidence": 0.99864,
            "speaker": null
        },
        {
            "text": "from",
            "start": 38762,
            "end": 38970,
            "confidence": 0.99994,
            "speaker": null
        },
        {
            "text": "nose",
            "start": 39010,
            "end": 39226,
            "confidence": 0.99813,
            "speaker": null
        },
        {
            "text": "to",
            "start": 39258,
            "end": 39450,
            "confidence": 0.57,
            "speaker": null
        },
        {
            "text": "tail",
            "start": 39490,
            "end": 39994,
            "confidence": 0.99372,
            "speaker": null
        },
        {
            "text": "and",
            "start": 40122,
            "end": 40362,
            "confidence": 1,
            "speaker": null
        },
        {
            "text": "weighing",
            "start": 40386,
            "end": 40778,
            "confidence": 0.97755,
            "speaker": null
        },
        {
            "text": "only",
            "start": 40834,
            "end": 41122,
            "confidence": 0.99948,
            "speaker": null
        },
        {
            "text": "2",
            "start": 41186,
            "end": 41458,
            "confidence": 1,
            "speaker": null
        },
        {
            "text": "grams,",
            "start": 41514,
            "end": 42146,
            "confidence": 0.8,
            "speaker": null
        },
        {
            "text": "the",
            "start": 42258,
            "end": 42482,
            "confidence": 1,
            "speaker": null
        },
        {
            "text": "Great",
            "start": 42506,
            "end": 42714,
            "confidence": 0.9997,
            "speaker": null
        },
        {
            "text": "Wall",
            "start": 42762,
            "end": 43002,
            "confidence": 0.99205,
            "speaker": null
        },
        {
            "text": "of",
            "start": 43026,
            "end": 43186,
            "confidence": 1,
            "speaker": null
        },
        {
            "text": "China",
            "start": 43218,
            "end": 43794,
            "confidence": 0.99995,
            "speaker": null
        },
        {
            "text": "is",
            "start": 43962,
            "end": 44242,
            "confidence": 0.99954,
            "speaker": null
        },
        {
            "text": "the",
            "start": 44266,
            "end": 44426,
            "confidence": 1,
            "speaker": null
        },
        {
            "text": "only",
            "start": 44458,
            "end": 44650,
            "confidence": 0.99991,
            "speaker": null
        },
        {
            "text": "human",
            "start": 44690,
            "end": 45154,
            "confidence": 0.84178,
            "speaker": null
        },
        {
            "text": "made",
            "start": 45282,
            "end": 45570,
            "confidence": 0.99565,
            "speaker": null
        },
        {
            "text": "structure",
            "start": 45610,
            "end": 46034,
            "confidence": 0.67909,
            "speaker": null
        },
        {
            "text": "visible",
            "start": 46082,
            "end": 46474,
            "confidence": 0.99996,
            "speaker": null
        },
        {
            "text": "from",
            "start": 46522,
            "end": 46778,
            "confidence": 0.99989,
            "speaker": null
        },
        {
            "text": "space,",
            "start": 46834,
            "end": 47218,
            "confidence": 0.9993,
            "speaker": null
        },
        {
            "text": "a",
            "start": 47314,
            "end": 47546,
            "confidence": 1,
            "speaker": null
        },
        {
            "text": "testament",
            "start": 47578,
            "end": 48010,
            "confidence": 0.67894,
            "speaker": null
        },
        {
            "text": "to",
            "start": 48050,
            "end": 48178,
            "confidence": 1,
            "speaker": null
        },
        {
            "text": "the",
            "start": 48194,
            "end": 48370,
            "confidence": 1,
            "speaker": null
        },
        {
            "text": "ambition",
            "start": 48410,
            "end": 48914,
            "confidence": 0.99837,
            "speaker": null
        },
        {
            "text": "and",
            "start": 49002,
            "end": 49274,
            "confidence": 1,
            "speaker": null
        },
        {
            "text": "ingenuity",
            "start": 49322,
            "end": 49978,
            "confidence": 0.50756,
            "speaker": null
        },
        {
            "text": "of",
            "start": 50034,
            "end": 50202,
            "confidence": 1,
            "speaker": null
        },
        {
            "text": "its",
            "start": 50226,
            "end": 50410,
            "confidence": 0.9995,
            "speaker": null
        },
        {
            "text": "builders.",
            "start": 50450,
            "end": 50730,
            "confidence": 0.99518,
            "speaker": null
        }
    ]


function getCaptionsInRange(startTime: number, endTime: number) {
    return captions
        .filter(caption => caption.start < endTime && caption.end > startTime)
        .map(caption => caption.text)
        .join(' ');
}

export const MyVideo: React.FC<{test : string}> = ({test}) => {

    console.log(test)
    const frame = useCurrentFrame();

    const frameInCurrentImage = frame % 240;

    // Interpolate based on the frame within the current image's window
    const interpolated = interpolate(frameInCurrentImage, [0, 30], [1, 1.1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });
    const imageIndex = Math.floor(frame / 240);
    const currentIndex = imageIndex % images.length;
    const captionTime = Math.round(frame / 30) * 1000;


    const captions: string = getCaptionsInRange(captionTime - 2000, captionTime + 2000);

    return (
        <>
            <div>
                <Img src={images[currentIndex]} style={{ width: '100%', height: '100%', transform: `scale(${interpolated})`, }} />
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
                {captions}

            </div>

            <Audio volume={1} src={staticFile("/audios/fdeff5b0-8ea4-45a7-aeac-6c32d8a6a4da.mp3")} />
        </>
    );
};
import Image from "next/image";

export default function Home() {
  return (
    <div className = "flex flex-col items-center justify-center pt-96">
      <h1 className="text-[80px] font-extrabold text-red-600">Short Video<h1 className = "inline text-white"> Generator using AI</h1></h1>
      <h4 className = "text-3xl font-light text-zinc-200 italic">Generate unlimited videos using Generative AI and post them for free!</h4>
    </div>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <div className = "flex flex-col items-center justify-center pt-96 tracking-tighter">
      <h1 className="text-[80px] font-extrabold text-red-600">Short Video<span className = "inline text-white"> Generator using AI</span></h1>
      <h4 className = "text-3xl font-light text-zinc-200">Generate unlimited videos using Generative AI and post them for free!</h4>
    </div>
  );
}

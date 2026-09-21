"use client"
import { useRouter } from "next/navigation"
import Image from "next/image";
import Background from "../public/BackgroundImg.gif"
import ProfileImg from "../public/ProfileImg.jpg"
import InstagramSVG from "../public/instagram.svg"
import YouTubeSVG from "../public/youtube.svg"
import AudioPlayer from "./AudioPlayer";

export default function Home() {
  const Router = useRouter()
  return (
    <div className="h-screen w-screen">
      <Image alt="" src={Background} className="w-full h-full object-cover" />
      <div className="block backdrop-blur-md w-screen h-screen absolute inset-0 items-center justify-evenly justify-items-center">
        <div className="flex flex-col items-center gap-4 bg-white/15 px-8 py-3 w-3/4 md:py-6 mt-24 md:mt-36 md:w-5/12 backdrop-blur-3xl shadow-sm rounded-2xl md:rounded-xl bg justify-items-center border border-white/10">
          <Image className="w-32 md:w-48 md:h-48 rounded-full " alt="" src={ProfileImg} />
          <p className="text-2xl md:text-5xl font-mono text-shadow-md font-semibold text-center">0xlexer</p>
          <p className="text-md md:text-lg font-mono text-slate-700 font-bold text-center">#1 of losing clash in limbussy🙏</p>
          <div className="flex justify-items-center items-center gap-x-2">
            <a href="https://instagram.com/0xlexer"><Image className="w-8 h-8 cursor-pointer" src={InstagramSVG} alt="Instagram -  0xlexer"/></a>
            <a href="https://youtube.com/@talsfx"><Image className="w-10 h-10 cursor-pointer" src={YouTubeSVG} alt="YouTube - Atalay"/></a>
          </div>
          <div className="hidden md:block justify-items-center w-5/6">
            <AudioPlayer/>
          </div>
        </div>
        <div className="md:hidden justify-items-center mt-1.5 w-[89%]">
            <AudioPlayer/>
        </div>
      </div>
    </div>  
  );
}

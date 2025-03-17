"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "./components/SplitText";

gsap.registerPlugin(useGSAP);

export default function Home() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".char", {
        opacity: 0,
        y: 120,
        rotateX: -90,
        rotateY: -90,
        stagger: 0.02,
        skewX: 30,
        duration: 0.6,
        delay: 0.5,
        ease: "back.out(1.7)",
      });
    },
    { scope: container }
  );

  return (
    <div className="relative">
      <div className="absolute flex justify-center items-center h-screen w-screen">
        <div
          ref={container}
          className="tk-poppins font-medium text-6xl/[64px] text-[#FFFFFF]">
          <SplitText
            text="Team Taiwan! Team Taiwan!"
            type="char"
            line="start"
          />
          <SplitText text="Taiwan is a great country!" type="char" line="end" />
        </div>
      </div>
      <div className="bg-[url('/g-pic.png')] bg-contain bg-no-repeat h-screen w-screen"></div>
    </div>
  );
}

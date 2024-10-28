"use client";
import React, { useRef } from "react";
import { Button } from "@nextui-org/button";
import TextPlugin from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const HeroContent = () => {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.registerPlugin(TextPlugin);
      const tl = gsap.timeline();
      tl.to("#a", { x: 0, duration: 1, ease: "power1.out" });
      tl.to("#b", { x: 0, duration: 1, ease: "power1.out", delay: -0.5 });
      tl.to("#c", { x: 0, duration: 1, ease: "power1.out", delay: -0.5 });
      tl.to("#num", {
        duration: 1,
        text: "200",
        ease: "power1.in",
        delay: -1,
      });

      tl.to("#num_1", {
        duration: 1,

        text: "2,000",
        ease: "power1.in",
        delay: -0.5,
      });
      tl.to("#num_2", {
        duration: 1,
        text: "30,000",
        ease: "power1.in",
        delay: -0.5,
      });
    },
    { scope: container }
  );
  return (
    <div
      className="flex flex-col gap-4 md:gap-6 xl:max-w-[40%] lg:pb-12 xl:gap-13"
      ref={container}
    >
      <h1 className="uppercase text-4xl md:text-6xl xl:text-7xl font-black font-bebas -tracking-widest">
        <span id="a" className="block -translate-x-[110%]">
          FIND CLOTHES
        </span>
        <span id="b" className="block -translate-x-[115%]">
          THAT MATCHES
        </span>
        <span id="c" className="block -translate-x-[110%]">
          YOUR STYLE
        </span>
      </h1>
      <p className="text-sm md:text-base text-zinc-500">
        Browse through our diverse range of meticulously crafted garments,
        designed to bring out your individuality and cater to your sense of
        style.
      </p>
      <Button className="bg-black text-white w-full py-4 rounded-full  max-w-[400px] md:max-w-[200px]">
        Shop Now
      </Button>
      <div className="flex flex-wrap justify-center md:justify-start gap-[1rem] divide divide-x-2 w-full">
        <div className="px-4">
          <span className=" text-2xl font-bold">
            <span id="num">0</span>+
          </span>
          <p className="text-sm text-zinc-500">International Brands</p>
        </div>
        <div className="px-4">
          <span className=" text-2xl font-bold">
            <span id="num_1">0</span>+
          </span>
          <p className="text-sm text-zinc-500">High-Quality Products</p>
        </div>
        <div className="px-4">
          <span className=" text-2xl font-bold">
            <span id="num_2">0</span>+
          </span>
          <p className="text-sm text-zinc-500">Happy Customers</p>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;

import Image from "next/image";
import model from "@/public/assets/img/pexels-marleneleppanen-1183266.png";
import gucci from "@/public/assets/img/gucci.png";
import prada from "@/public/assets/img/prada.png";
import zara from "@/public/assets/img/zara.png";
import versace from "@/public/assets/img/versace.png";
import calvin_klein from "@/public/assets/img/calvin-klein.png";

import React from "react";
import HeroContent from "./HeroContent";
import StarParallax from "./ui/StarParallax";

const Hero = () => {
  return (
    <section className="bg-[#F2F0F1] ">
      <div className="flex justify-center pt-[3rem] 2xl:min-h-[720px]">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-end xl:items-center w-full lg:w-[95%] xl:w-[80%] px-4 max-w-[1920px] gap-4 md:gap-10 ">
          <HeroContent />
          <div className="relative">
            <Image
              src={model}
              alt="model"
              className="w-full max-w-[500px] lg:max-w-[800px] xl:max-w-[600px]"
              priority
            />
            <StarParallax />
          </div>
        </div>
      </div>
      <div className="flex justify-center py-8 bg-black">
        <div className="flex flex-wrap gap-4 md:gap-10 justify-center lg:justify-between items-center w-full lg:w-[95%] xl:w-[80%] px-[16px] max-w-[1920px]">
          <Image
            src={versace}
            alt="logo"
            className="w-full max-w-[115px] lg:max-w-[130px] xl:max-w-[180px] h-fit"
          />
          <Image
            src={zara}
            alt="logo"
            className="w-full max-w-[60px] lg:max-w-[70px] xl:max-w-[90px] h-fit"
          />
          <Image
            src={gucci}
            alt="logo"
            className="w-full max-w-[115px] lg:max-w-[130px] xl:max-w-[180px] h-fit"
          />
          <Image
            src={prada}
            alt="logo"
            className="w-full max-w-[115px] lg:max-w-[130px] xl:max-w-[180px] h-fit"
          />
          <Image
            src={calvin_klein}
            alt="logo"
            className="w-full max-w-[115px] lg:max-w-[130px] xl:max-w-[180px] h-fit"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

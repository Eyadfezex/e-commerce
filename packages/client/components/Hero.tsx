import { Button } from "@nextui-org/button";
import Image from "next/image";
import model from "@/assets/img/pexels-marleneleppanen-1183266.png";
import gucci from "@/assets/img/gucci.png";
import prada from "@/assets/img/prada.png";
import zara from "@/assets/img/zara.png";
import versace from "@/assets/img/versace.png";
import calvin_klein from "@/assets/img/calvin-klein.png";
import star from "@/assets/svgs/star.svg";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#F2F0F1] font-sans">
      <div className="flex justify-center pt-[3rem]">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-end xl:items-center w-full lg:w-[90%] px-[16px] max-w-[1920px] gap-4 md:gap-10 ">
          <div className="flex flex-col gap-4 md:gap-6 xl:max-w-[40%] lg:pb-12 xl:gap-13">
            <h1 className="uppercase text-4xl md:text-6xl xl:text-7xl font-black font-bebas -tracking-widest">
              FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
            </h1>
            <p className="text-sm md:text-base text-zinc-500">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <Button className="bg-black text-white w-full py-4 rounded-full  max-w-[400px] md:max-w-[200px]">
              Shop Now
            </Button>
            <div className="flex flex-wrap justify-center md:justify-start gap-[1rem] divide divide-x-2 w-full">
              <div className="px-4">
                <span className=" text-2xl font-bold">200+</span>
                <p className="text-sm text-zinc-500">International Brands</p>
              </div>
              <div className="px-4">
                <span className=" text-2xl font-bold">2,000+</span>
                <p className="text-sm text-zinc-500">High-Quality Products</p>
              </div>
              <div className="px-4">
                <span className=" text-2xl font-bold">30,000+</span>
                <p className="text-sm text-zinc-500">Happy Customers</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src={model}
              alt="model"
              className="w-full max-w-[500px] lg:max-w-[800px] xl:max-w-[600px]"
            />
            <Image
              src={star}
              alt="star"
              className="absolute top-40 w-[50px] left-[10%]"
            />
            <Image
              src={star}
              alt="star"
              className="absolute top-0 right-[0%]"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center py-8 bg-black">
        <div className="flex flex-wrap gap-4 md:gap-10 justify-between items-center w-full lg:w-[90%] px-[16px]">
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

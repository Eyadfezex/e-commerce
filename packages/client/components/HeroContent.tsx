import React from "react";
import { Button } from "@nextui-org/button";

const HeroContent = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-6 xl:max-w-[40%] lg:pb-12 xl:gap-13">
      <h1 className="uppercase text-4xl md:text-6xl xl:text-7xl font-black font-bebas -tracking-widest">
        <span className="block ">FIND CLOTHES</span>
        <span className="block ">THAT MATCHES</span>
        <span className="block ">YOUR STYLE</span>
      </h1>
      <p className="text-sm md:text-base text-zinc-500">
        Browse through our diverse range of meticulously crafted garments,
        designed to bring out your individuality and cater to your sense of
        style.
      </p>
      <Button className="bg-black text-white w-full py-6 rounded-full  max-w-[400px] md:max-w-[200px]">
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
  );
};

export default HeroContent;

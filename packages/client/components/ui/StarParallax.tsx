"use client";
import React from "react";
import { ScrollParallax } from "react-just-parallax";
import star from "@/public/assets/svgs/star.svg";
import Image from "next/image";

const StarParallax = () => {
  return (
    <>
      <ScrollParallax isAbsolutelyPositioned strength={0.2}>
        <Image
          src={star}
          alt="star"
          className="absolute top-40 w-[50px] left-[10%]"
        />
      </ScrollParallax>
      <ScrollParallax isAbsolutelyPositioned strength={0.2}>
        <Image src={star} alt="star" className="absolute top-0 right-[0%]" />
      </ScrollParallax>
    </>
  );
};

export default StarParallax;

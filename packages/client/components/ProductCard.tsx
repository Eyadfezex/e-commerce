import React from "react";
import Image from "next/image";
import shirt from "../assets/img/t-shirt.webp";
import Rating from "./Rating";
const ProductCard = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative w-60 h-64 rounded-2xl overflow-hidden">
        <Image
          src={shirt}
          alt="shirt"
          className=" absolute w-full h-full object-cover "
        />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-sans font-bold text-xl">Eyad Ahmed</h2>
        <Rating />
      </div>
      <div className="flex items-center gap-2 font-bold text-2xl">
        $130 <del className="opacity-40">$160</del>
        <div className=" bg-red-200 text-sm px-2 py-1 text-red-600 rounded-full">
          -30%
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

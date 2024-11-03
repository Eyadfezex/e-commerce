import React from "react";
import Image from "next/image";
import Rating from "./Rating";

interface PROPS {
  Pname: string;
  price: number;
  rate: number;
  Mprice: number;
  discountPerc: string;
  PImage: string;
}

export const ProductCard = ({
  rate = 0,
  Pname = "Eyad Ahmed",
  price = 130,
  Mprice = 160,
  discountPerc = "30",
  PImage,
}: PROPS) => {
  return (
    <div className="flex flex-col gap-2 max-w-[240px] text-wrap">
      <div className="relative w-60 h-64 rounded-2xl overflow-hidden">
        <Image
          src={PImage}
          alt="shirt"
          width={300}
          height={300}
          className=" absolute w-full h-full object-cover "
        />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-sans font-bold text-xl" id="product-name">
          {Pname}
        </h2>
        <Rating value={rate} />
      </div>
      <div className="flex items-center gap-2 font-bold text-2xl">
        ${price}{" "}
        {Mprice == 0 ? (
          ""
        ) : (
          <>
            <del className="opacity-40">${Mprice}</del>
            <div className=" bg-red-200 text-sm px-2 py-1 text-red-600 rounded-full">
              -{discountPerc}%
            </div>
          </>
        )}
      </div>
    </div>
  );
};

import React from "react";
import Rating from "./Rating";
import check from "../public/assets/svgs/1930264_check_complete_done_green_success_icon.svg";
import Image from "next/image";
interface PROPS {
  rating: number;
  name: string;
  review: string;
  date: string;
}
export const Review = ({
  rating = 3,
  name = "John Doe",
  review = `I absolutely love this t-shirt! The design is unique and the fabric
        feels so comfortable. As a fellow designer, I appreciate the attention
        to detail. It's become my favorite go-to shirt.`,
  date = "August 17, 2023",
}: PROPS) => {
  return (
    <div className="border rounded-xl p-6  font-sans w-full max-w-[610px]">
      <Rating value={rating} />
      <div className="flex items-center gap-1 mt-3">
        <h3 className="font-bold" id="name">
          {name}
        </h3>
        <Image src={check} width={19} height={19} alt="check" />
      </div>
      <p className="text-sm opacity-80 mt-2" id="review">
        &quot;{review}&quot;
      </p>
      <span
        className="text-zinc-500 font-mono font-medium mt-4 block"
        id="date"
      >
        Posted on <span className=" capitalize">{date}</span>
      </span>
    </div>
  );
};

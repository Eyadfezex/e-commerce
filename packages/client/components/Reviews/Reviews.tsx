import React, { Key } from "react";
import Rating from "./Rating"; // Rating component to display the reviewer's rating
import check from "@/public/assets/svgs/1930264_check_complete_done_green_success_icon.svg"; // Check icon used to indicate verified status
import Image from "next/image";

// Defining the interface for the review props
export interface REVIEW_PROPS {
  id: Key | null | undefined; // Unique identifier for the review
  rating: number; // Rating score (out of 5)
  name: string; // Name of the reviewer
  review: string; // Text of the review
  createdAt: string; // Date the review was posted
}

/**
 * Review component to display individual reviews with the reviewer's name, rating, review content, and posting date.
 *
 * @param {number} rating - The rating given by the reviewer (default: 3).
 * @param {string} name - The name of the reviewer (default: "John Doe").
 * @param {string} review - The review text (default: a sample review).
 * @param {string} createdAt - The date the review was posted (default: "August 17, 2023").
 *
 * @returns JSX.Element - The JSX rendering the review content.
 */
export const Review = ({
  rating = 3, // Default rating if not provided
  name = "John Doe", // Default name if not provided
  review = `I absolutely love this t-shirt! The design is unique and the fabric
        feels so comfortable. As a fellow designer, I appreciate the attention
        to detail. It's become my favorite go-to shirt.`, // Default review text
  createdAt = "August 17, 2023", // Default date if not provided
}: REVIEW_PROPS) => {
  return (
    <div className="border rounded-xl p-6 font-sans w-full max-w-[400px]">
      {/* Displaying the reviewer's rating */}
      <Rating value={rating} />
      <div className="flex items-center gap-1 mt-3">
        <h3 className="font-bold" id="name">
          {name} {/* Reviewer's name */}
        </h3>
        <Image src={check} width={19} height={19} alt="check" />{" "}
        {/* Check icon for verified status */}
      </div>
      <p className="text-sm opacity-80 mt-2" id="review">
        &quot;{review}&quot; {/* Review content */}
      </p>
      <span
        className="text-zinc-500 font-mono font-medium mt-4 block"
        id="date"
      >
        Posted on <span className="capitalize">{createdAt}</span>{" "}
        {/* Date of posting */}
      </span>
    </div>
  );
};

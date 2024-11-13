import React from "react";
import Image from "next/image";
import Rating from "@/components/Reviews/Rating";
import Link from "next/link";

// Defining the props type for the ProductCard component
interface PROPS {
  Pname: string; // Product name
  originalPrice: number; // Original price before any discount
  currentPrice: number; // Current price after discount (if applicable)
  discountPrice: number; // The price after discount (may or may not be used)
  discountPercentage: number; // Percentage of discount applied
  rate: number; // Rating of the product (used in the Rating component)
  id: React.Key | null | undefined; // Unique product ID for the link
  PImage: string; // Image URL of the product
}

/**
 * ProductCard component to display a product's details including image, name, price, discount, and rating.
 *
 * @param {string} Pname - The name of the product.
 * @param {number} originalPrice - The original price of the product.
 * @param {number} currentPrice - The current price of the product after discount (if any).
 * @param {number} discountPrice - The discounted price of the product (if applicable).
 * @param {number} discountPercentage - The percentage discount on the product.
 * @param {number} rate - The rating of the product (1-5).
 * @param {React.Key | null | undefined} id - The unique identifier for the product.
 * @param {string} PImage - The URL of the product image.
 *
 * @returns JSX.Element - The JSX rendering the product card.
 */
export const ProductCard = ({
  rate = 0, // Default value if no rate is provided
  Pname = "Eyad Ahmed", // Default product name if not passed
  currentPrice = 130, // Default current price if not passed
  originalPrice = 160, // Default original price if not passed
  discountPrice, // Discounted price can be optionally passed
  id, // Product ID is required for navigation
  discountPercentage = 30, // Default discount percentage if not passed
  PImage, // Product image is required
}: PROPS) => {
  return (
    <Link href={`products/${id}`}>
      <div className="flex flex-col gap-2 max-w-[240px] text-wrap">
        {/* Product image container */}
        <div className="relative w-60 h-64 rounded-2xl overflow-hidden">
          <Image
            src={PImage}
            alt="Product image"
            width={300}
            height={300}
            className=" absolute w-full h-full object-cover "
          />
        </div>
        {/* Product details */}
        <div className="flex flex-col gap-2">
          <h2 className="font-sans font-bold text-xl" id="product-name">
            {Pname}
          </h2>
          <Rating value={rate} /> {/* Display product rating */}
        </div>
        {/* Pricing information */}
        <div className="flex items-center gap-2 font-bold text-2xl">
          ${currentPrice} {/* Display current price */}
          {discountPrice !== 0 && (
            <>
              <del className="opacity-40">${originalPrice}</del>{" "}
              {/* Show original price if discount is applied */}
              <div className="bg-red-200 text-sm px-2 py-1 text-red-600 rounded-full">
                -{discountPercentage}% {/* Show discount percentage */}
              </div>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};
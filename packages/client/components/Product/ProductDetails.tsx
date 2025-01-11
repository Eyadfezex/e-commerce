"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import placeholder from "@/public/assets/svgs/placeholder.svg";
import BasicRating from "../Reviews/Rating";
import { ColorCheckBox, SizeCheckBox } from "../ui/CheckBox";
import { IoIosAdd } from "react-icons/io";

import { IoIosRemove } from "react-icons/io";
import { Button } from "@nextui-org/button";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "@/axios/Axios";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { SkeletonDetails } from "../skeletons/ProductSkeleton";

/**
 * ProductDetails component
 *
 * Displays product details fetched from an API, including images, name, description,
 * price, colors, sizes, and an Add to Cart option.
 *
 * @param {string} id - Product identifier used to fetch product data.
 *
 * @returns {JSX.Element} - The rendered ProductDetails component.
 */
export const ProductDetails = ({ id }: { id: string }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["product", id],
    queryFn: ({ queryKey }) => getProduct(queryKey[1]),
  });

  const PImages = useMemo(() => data?.images || [], [data?.images]);
  const productName = data?.name || "Product Name";
  const productDescription = data?.description || "No description available.";
  const productColors = data?.colors;
  const originalPrice = data?.originalPrice;
  const currentPrice = data?.currentPrice || 0;
  const discountPrice = data?.discountPrice;
  const discountPercentage = data?.discountPercentage || 0;
  const [viewedImage, setViewedImage] = useState(
    PImages.length > 0 ? PImages[0].url : placeholder
  );

  useEffect(() => {
    if (PImages.length > 0) {
      setViewedImage(PImages[0].url);
    }
  }, [PImages]);

  const handleSetImage = (e: string | StaticImport) => {
    setViewedImage(e);
  };

  if (isLoading) return <SkeletonDetails />;
  if (error) return <p>Something went wrong!</p>;

  return (
    <section id={id}>
      <div className="flex justify-center py-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start px-4 w-full lg:w-[95%] xl:w-[85%] max-w-[1920px] gap-4 lg:gap-8">
          {/* Main product image display */}
          <div className="flex flex-col lg:flex-row-reverse w-full lg:w-[50%] h-[30rem] md:h-[55rem] lg:h-full gap-3 lg:max-h-[580px] min-h-[580px]">
            <div className="overflow-hidden rounded-2xl relative w-full h-full">
              <Image
                blurDataURL="https://placehold.co/600x400"
                src={viewedImage}
                width={100}
                height={100}
                alt={productName}
                className="absolute w-full h-full object-cover"
              />
            </div>
            {/* Image thumbnails */}
            <div className="flex lg:flex-col gap-3 w-full lg:w-[22%] h-[20%] lg:h-full">
              {PImages?.map(
                (img: {
                  id: React.Key | null | undefined;
                  url: string | StaticImport;
                }) => (
                  <div
                    key={img?.id}
                    className={`overflow-hidden rounded-2xl relative h-full w-[40%] lg:w-full max-w-[111px] max-h-[106px] lg:max-w-[150px] lg:max-h-[200px] ${viewedImage == img?.url ? "border border-black" : null}`}
                    onClick={() => handleSetImage(img?.url)}
                  >
                    <Image
                      placeholder="blur"
                      blurDataURL="https://placehold.co/600x400"
                      src={img.url}
                      width={100}
                      height={100}
                      alt="product"
                      className="absolute w-full h-full object-cover"
                    />
                  </div>
                )
              )}
            </div>
          </div>
          {/* Product details section */}
          <div className="w-full lg:w-[50%] divide-y">
            <div className="flex flex-col gap-2 pb-5">
              <h2 className="font-bebas font-black text-[calc(1.45rem+1.1vw)] uppercase -tracking-wider leading-10">
                {productName}
              </h2>
              <BasicRating value={data?.ratingsAverage} />
              {/* Displaying prices and discounts */}
              <div className="flex items-center gap-2 font-bold text-2xl">
                ${currentPrice}
                {discountPrice !== 0 && (
                  <>
                    <del className="opacity-40">${originalPrice}</del>
                    <div className="bg-red-200 text-sm px-2 py-1 text-red-600 rounded-full">
                      -{discountPercentage}%
                    </div>
                  </>
                )}
              </div>
              <p className="opacity-90">{productDescription}</p>
            </div>
            <ColorPicker colors={productColors} />
            <ChooseSize sizes={data?.sizes} />
            <AddItem />
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * ColorPicker component
 *
 * Renders color options for the product.
 *
 * @param {Array<string>} colors - List of available colors for selection.
 *
 * @returns {JSX.Element} - The rendered ColorPicker component.
 */
const ColorPicker = ({
  colors = ["#FF24FF", "#FF4F45", "#8EFF"],
}: {
  colors: Array<string>;
}) => {
  if (colors == null || undefined || []) {
    return null;
  }
  return (
    <div className="py-5 w-full">
      <h2 className="opacity-90">Select Colors</h2>
      <div className="flex items-center gap-3 mt-2">
        {colors?.map((item) => <ColorCheckBox key={item} color={item} />)}
      </div>
    </div>
  );
};

/**
 * ChooseSize component
 *
 * Renders size options for the product.
 *
 * @param {Array<string>} sizes - List of available sizes for selection.
 *
 * @returns {JSX.Element} - The rendered ChooseSize component.
 */
const ChooseSize = ({
  sizes = ["XX-Small", "X-Small"],
}: {
  sizes: Array<string>;
}) => {
  return (
    <div className="py-5 w-full xl:py-7">
      <div className="opacity-90">Choose Size</div>
      <div className="flex flex-wrap items-center gap-3 mt-2">
        {sizes?.map((size) => (
          <SizeCheckBox key={size} value={size}>
            {size}
          </SizeCheckBox>
        ))}
      </div>
    </div>
  );
};

/**
 * AddItem component
 *
 * Provides controls to increment/decrement quantity of the product to be added to the cart.
 *
 * @returns {JSX.Element} - The rendered AddItem component.
 */
const AddItem = () => {
  const [numberOfItems, setNumberOfItems] = useState(1);

  const handleIncreaseNumber = () => {
    setNumberOfItems(numberOfItems + 1);
  };

  const handleDecreaseNumber = () => {
    if (numberOfItems > 1) {
      setNumberOfItems(numberOfItems - 1);
    }
  };

  return (
    <div className="pt-5 w-full xl:pt-7">
      <div className="flex items-center gap-3 lg:gap-5">
        {/* Quantity control */}
        <div className="flex justify-between lg:h-12 items-center rounded-full bg-gray-200 px-4 py-2 w-[30%]">
          <button>
            <IoIosRemove size={25} onClick={handleDecreaseNumber} />
          </button>
          <div>{numberOfItems}</div>
          <button>
            <IoIosAdd size={25} onClick={handleIncreaseNumber} />
          </button>
        </div>
        <Button className="w-[70%] lg:h-12 bg-black rounded-full text-white">
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

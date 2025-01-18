import { Stack } from "@mui/material";
import { Skeleton } from "@nextui-org/react";
import React from "react";

/**
 * ProductCardSkeleton Component
 *
 * This component renders a skeleton placeholder for a product card.
 * It is used to indicate loading states for product-related content.
 *
 * @returns {JSX.Element} - The rendered ProductCardSkeleton component.
 */
export const ProductCardSkeleton = () => {
  return (
    <Stack className="gap-4">
      {/* Skeleton for the product image */}
      <Skeleton className="w-[172px] h-[174px] lg:w-[295px] lg:h-[295px] rounded-lg bg-default-200" />

      {/* Skeleton for the product title */}
      <Skeleton className="text-xl font-bold font-sans rounded-lg bg-default-200" />

      {/* Skeleton for the product price */}
      <Skeleton className="w-[210px] h-[20px] rounded-lg bg-default-200" />

      {/* Skeleton for additional product details */}
      <Skeleton className="w-[210px] h-[20px] rounded-lg bg-default-200" />
    </Stack>
  );
};

/**
 * SkeletonDetails Component
 *
 * This component serves as a placeholder for detailed product information
 * while the data is being loaded. It displays various skeleton loaders to
 * mimic the layout and structure of the final content.
 *
 * @returns {JSX.Element} - The rendered SkeletonDetails component.
 */
export const SkeletonDetails = () => {
  return (
    <section>
      <div className="flex justify-center py-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start px-4 w-full lg:w-[95%] xl:w-[85%] max-w-[1920px] gap-4 lg:gap-8">
          {/* Skeleton for the product image and thumbnails */}
          <div className="flex flex-col lg:flex-row-reverse w-full lg:w-[50%] h-[30rem] lg:h-full gap-3 max-h-[580px] min-h-[580px]">
            {/* Main product image skeleton */}
            <Skeleton className="w-full rounded-2xl bg-default-200 h-full" />

            {/* Thumbnail skeletons */}
            <div className="flex lg:flex-col gap-3 w-full lg:w-[22%] h-[34%] lg:h-full">
              {Array.from({ length: 3 }, (_, index) => (
                <Skeleton
                  key={index}
                  className="rounded-2xl h-full w-[40%] lg:w-full max-w-[111px] max-h-[106px] lg:max-w-[150px] lg:max-h-[200px]"
                />
              ))}
            </div>
          </div>

          {/* Skeleton for product details */}
          <div className="w-full lg:w-[50%]">
            <div className="flex flex-col gap-4 pb-7">
              <Skeleton className="h-10 w-full rounded-2xl" />{" "}
              <Skeleton className="h-7 w-[13rem] rounded-2xl" />{" "}
              <div className="flex gap-2">
                <Skeleton className="h-10 w-[5rem] rounded-2xl" />
                <Skeleton className="h-10 w-[5rem] rounded-2xl" />
                <Skeleton className="h-10 w-[5rem] rounded-2xl" />
              </div>
              <Skeleton className="w-full h-20 rounded-2xl" />
            </div>

            <div className="flex gap-2 py-7">
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-10 w-10 rounded-full" />
            </div>

            <div className="flex gap-2 py-7">
              <Skeleton className="h-[32px] w-[59px] rounded-full" />
              <Skeleton className="h-[32px] w-[59px] rounded-full" />
              <Skeleton className="h-[32px] w-[59px] rounded-full" />
            </div>

            <div className="flex justify-between gap-2 pt-5">
              <Skeleton className="h-10 w-[30%] rounded-full" />
              <Skeleton className="h-10 w-[70%] rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

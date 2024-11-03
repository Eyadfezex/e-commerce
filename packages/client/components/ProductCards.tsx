/**
 * ProductCards Component
 *
 * This component is responsible for rendering a list of product cards based on the provided data.
 * It handles different states of product loading, including error handling, loading state,
 * and displaying a message when there are no products available.
 *
 * Props:
 * - data (Product[]): An array of product objects to display. Each product should contain
 *   an id, name, currentPrice, ratingsAverage, images, discountPercentage, and discountPrice.
 * - error (any): An error object that indicates if there was an issue loading the products.
 * - isLoading (boolean): A flag indicating whether the product data is currently being loaded.
 *
 * @component
 * @example
 * return (
 *   <ProductCards
 *     data={products}
 *     error={loadError}
 *     isLoading={loading}
 *   />
 * )
 *
 * @returns {JSX.Element} The rendered ProductCards component.
 */

import React from "react";
import { ProductCard } from "./ProductCard";
import { Skeleton } from "@nextui-org/react";
import Stack from "@mui/material/Stack";

interface Product {
  id: React.Key | null | undefined;
  name: string;
  currentPrice: number;
  ratingsAverage: number;
  images: Array<string>;
  discountPercentage: string;
  discountPrice: number;
}

export const ProductCards = ({
  data,
  error,
  isLoading,
}: {
  data: Product[];
  error: any;
  isLoading: any;
}) => {
  if (error) {
    return <div>Error loading products</div>;
  }

  if (isLoading) {
    return <CardsSkeleton />;
  }

  if (!data || data.length === 0) {
    return <div>No new arrivals</div>;
  }

  return (
    <div className="flex gap-4">
      {data.map((item) => (
        <ProductCard
          key={item.id}
          Pname={item.name}
          price={item.currentPrice}
          rate={item.ratingsAverage}
          PImage={item.images[0]}
          discountPerc={item.discountPercentage}
          Mprice={item.discountPrice}
        />
      ))}
    </div>
  );
};

/**
 * CardsSkeleton Component
 *
 * This component serves as a placeholder for product cards while the data is being loaded.
 * It displays a series of skeleton loaders to indicate that content is being fetched.
 *
 * @component
 * @example
 * return <CardsSkeleton />
 *
 * @returns {JSX.Element} The rendered CardsSkeleton component.
 */
const CardsSkeleton = () => {
  return (
    <div className="flex gap-4 justify-center">
      {Array.from({ length: 6 }, (_, index) => (
        <div key={index}>
          <Stack className="gap-4">
            <Skeleton className="w-[240px] h-[256px] rounded-lg bg-default-200" />
            <Skeleton className="text-xl font-bold font-sans rounded-lg bg-default-200" />
            <Skeleton className="w-[210px] h-[20px] rounded-lg bg-default-200" />
            <Skeleton className="w-[210px] h-[20px] rounded-lg bg-default-200" />
          </Stack>
        </div>
      ))}
    </div>
  );
};

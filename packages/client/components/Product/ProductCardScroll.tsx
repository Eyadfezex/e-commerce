/**
 * ProductCardScroll Component
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
 *   <ProductCardScroll
 *     data={products}
 *     error={loadError}
 *     isLoading={loading}
 *   />
 * )
 *
 * @returns {JSX.Element} The rendered ProductCardScroll component.
 */

import React from "react";
import { ProductCard } from "./ProductCard";
import { motion } from "framer-motion";
import { ProductCardSkeleton } from "../skeletons/ProductSkeleton";
interface Image {
  url: string; // Assuming the image object contains a 'url' property
  // Add any other properties that the image object may have
}
interface Product {
  id: React.Key | null | undefined;
  name: string;
  originalPrice: number;
  currentPrice: number;
  ratingsAverage: number;
  images: Array<Image>;
  discountPercentage: number;
  url: string;
  discountPrice: number;
}

export const ProductCardScroll = ({
  data,
  error,
  isLoading,
}: {
  data: Product[];
  error: Error | null;
  isLoading: boolean;
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
          productId={item.id}
          productName={item.name}
          currentPrice={item.currentPrice}
          rating={item.ratingsAverage}
          productImage={item.images[0]?.url}
          discountPercentage={item.discountPercentage}
          discountPrice={item.discountPrice}
          originalPrice={item.originalPrice}
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
        <motion.div key={index} exit={{ opacity: 0 }}>
          <ProductCardSkeleton />
        </motion.div>
      ))}
    </div>
  );
};

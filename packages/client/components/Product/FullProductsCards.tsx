import React from "react";
import { ProductCard } from "./ProductCard";
import { motion } from "framer-motion";
import { ProductCardSkeleton } from "../skeletons/ProductSkeleton";

interface Props {
  productsData: ProductsData[];
  isLoading: boolean;
}

const Products = ({ productsData, isLoading }: Props) => {
  if (isLoading) {
    return (
      <motion.div
        className="flex flex-wrap justify-between md:justify-start gap-y-4  gap-[1%]  lg:gap-y-8 2xl:justify-start 2xl:gap-[1%] 2xl:gap-y-8 "
        exit={{ opacity: 0 }}
      >
        {Array.from({ length: productsData?.length || 12 }, (_, index) => (
          <div key={index}>
            <ProductCardSkeleton />
          </div>
        ))}
      </motion.div>
    );
  }

  return (
    <div className="flex flex-wrap justify-between md:justify-start gap-y-4  gap-[1%]  lg:gap-y-8 2xl:justify-start 2xl:gap-[1%] 2xl:gap-y-8 ">
      {productsData?.map((item) => (
        <ProductCard
          key={item.id}
          productName={item.name}
          originalPrice={item.originalPrice}
          currentPrice={item.currentPrice}
          discountPrice={item.discountPrice}
          discountPercentage={item.discountPercentage}
          rating={item.ratingsAverage}
          productId={item.id}
          productImage={item.images[0]?.url}
        />
      ))}
    </div>
  );
};

export default Products;

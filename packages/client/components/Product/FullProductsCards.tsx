import React from "react";
import { ProductCard } from "./ProductCard";
import { Stack } from "@mui/material";
import { Skeleton } from "@nextui-org/react";
import { motion } from "framer-motion";

interface Props {
  productsData: ProductsData[];
  isLoading: boolean;
}

const Products = ({ productsData, isLoading }: Props) => {
  if (isLoading) {
    return (
      <motion.div
        className="flex flex-wrap gap-[3%]  gap-y-8 "
        exit={{ opacity: 0 }}
      >
        {Array.from({ length: productsData?.length || 12 }, (_, index) => (
          <div key={index}>
            <Stack className="gap-4">
              <Skeleton className="w-[295px] h-[295px] rounded-lg bg-default-200" />
              <Skeleton className="text-xl font-bold font-sans rounded-lg bg-default-200" />
              <Skeleton className="w-[210px] h-[20px] rounded-lg bg-default-200" />
              <Skeleton className="w-[210px] h-[20px] rounded-lg bg-default-200" />
            </Stack>
          </div>
        ))}
      </motion.div>
    );
  }

  return (
    <div className="flex flex-wrap  gap-[3%]    gap-y-8 ">
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

"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { ProductCard } from "./ProductCard";

import { getNewArrivalProducts } from "@/axios/Axios";

const NewArrivalCards = () => {
  const { data } = useQuery({
    queryKey: ["new-arrival-products"],
    queryFn: getNewArrivalProducts,
  });
  return (
    <div className="flex gap-4 ">
      {data?.map(
        (item: {
          id: React.Key | null | undefined;
          name: string;
          currentPrice: number;
          ratingsAverage: number;
          images: Array<string>;
          discountPercentage: string;
          discountPrice: number;
        }) => {
          return (
            <ProductCard
              key={item.id}
              Pname={item?.name}
              price={item?.currentPrice}
              rate={item?.ratingsAverage}
              PImage={item?.images[0]}
              discountPerc={item?.discountPercentage}
              Mprice={item?.discountPrice}
            />
          );
        }
      )}
    </div>
  );
};

export default NewArrivalCards;

"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { ProductCard } from "./ProductCard";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { getNewArrivalProducts } from "@/axios/Axios";

const NewArrivalCards = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["new-arrival-products"],
    queryFn: getNewArrivalProducts,
  });
  return (
    <>
      {isLoading ? (
        <NewArrivalSkeleton />
      ) : (
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
      )}
    </>
  );
};

export default NewArrivalCards;

const NewArrivalSkeleton = () => {
  return (
    <div className="flex gap-4 justify-center">
      {Array.from({ length: 6 }, (_, index) => (
        <div key={index}>
          <Stack className="gap-4">
            <Skeleton variant="rounded" width={240} height={256} />
            <Skeleton variant="text" className="text-xl font-bold font-sans" />
            <Skeleton variant="rectangular" width={210} height={20} />
            <Skeleton variant="rounded" width={210} height={20} />
          </Stack>
        </div>
      ))}
    </div>
  );
};

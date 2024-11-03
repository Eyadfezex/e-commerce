"use client";
import React from "react";
import { ProductCards } from "./ProductCards";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getNewArrivalProducts } from "@/axios/Axios";
const NewArrival = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["new-arrival-products"],
    queryFn: getNewArrivalProducts,
  });

  return (
    <section>
      <div className="flex justify-center py-12 lg:py-20">
        <div className="flex flex-col items-center px-4 w-full lg:w-[95%] xl:w-[80%] max-w-[1920px] gap-8 ">
          <h2 className="font-bebas font-black text-4xl lg:text-5xl uppercase -tracking-wider text-center">
            NEW ARRIVALS
          </h2>
          <div className="overflow-x-scroll w-full">
            <ProductCards data={data} error={error} isLoading={isLoading} />
          </div>
          <Link href="/newarrival">
            <Button className="border py-4 rounded-full w-[200px] ">
              View All
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;

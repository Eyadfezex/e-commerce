"use client";
import React from "react";
import { ProductCards } from "./ProductCards";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { useQuery } from "@tanstack/react-query";
import { getTopSelling } from "@/axios/Axios";

const TopSelling = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["top-selling"],
    queryFn: getTopSelling,
  });

  return (
    <section>
      <div className="flex justify-center py-12 ">
        <div className="flex flex-col items-center py-20 border-t px-4 w-full lg:w-[95%] xl:w-[80%] max-w-[1920px] gap-8">
          <h2 className="font-bebas font-black text-4xl lg:text-5xl uppercase -tracking-wider text-center">
            top selling
          </h2>
          <div className="overflow-x-scroll w-full">
            <ProductCards data={data} error={error} isLoading={isLoading} />
          </div>
          <Link href="/topselling">
            <Button className="border py-4 rounded-full w-[200px] ">
              View All
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopSelling;

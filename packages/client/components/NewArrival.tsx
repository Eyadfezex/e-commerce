/**
 * NewArrival Component
 *
 * This component fetches and displays a list of new arrival products.
 * It utilizes the `useQuery` hook from React Query to manage data fetching
 * and loading states. The fetched products are displayed using the
 * `ProductCards` component. If the data is still loading or an error occurs,
 * appropriate loading indicators or error messages are shown.
 *
 * The component also includes a button that links to a detailed page
 * where all new arrival products can be viewed.
 *
 * @component
 * @example
 * return (
 *   <NewArrival />
 * )
 *
 * @returns {JSX.Element} The rendered NewArrival component.
 */

"use client";
import React from "react";
import { ProductCards } from "@/components/Product/ProductCards";
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
        <div className="flex flex-col items-center px-4 w-full lg:w-[95%] xl:w-[85%] max-w-[1920px] gap-8 ">
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

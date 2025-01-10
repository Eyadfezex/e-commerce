/**
 * TopSelling Component
 *
 * This component fetches and displays a list of top-selling products using the `react-query` hook for data fetching.
 * It presents the products inside a horizontally scrollable container and includes a "View All" button that links
 * to a detailed page of top-selling products.
 */

"use client";
import React from "react";
import { ProductCardScroll } from "@/components/Product/ProductCardScroll"; // Component for rendering product cards
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { useQuery } from "@tanstack/react-query"; // React Query hook for data fetching
import { getTopSelling } from "@/axios/Axios"; // Function to fetch top-selling products from the API

/**
 * TopSelling Component
 * @returns {JSX.Element} - A section displaying top-selling products
 */
const TopSelling = () => {
  // Fetching top-selling products data using react-query
  const { data, isLoading, error } = useQuery({
    queryKey: ["top-selling"],
    queryFn: getTopSelling,
  });

  return (
    <section>
      <div className="flex justify-center py-12">
        <div className="flex flex-col items-center py-20 border-t px-4 w-full lg:w-[95%] xl:w-[85%] max-w-[1920px] gap-8">
          {/* Section heading */}
          <h2 className="font-bebas font-black text-4xl lg:text-5xl uppercase -tracking-wider text-center">
            top selling
          </h2>

          {/* Product cards displayed in a horizontally scrollable container */}
          <div className="overflow-x-scroll w-full">
            <ProductCardScroll
              data={data}
              error={error}
              isLoading={isLoading}
            />
          </div>

          {/* Button to view all top-selling products */}
          <Link href="/topselling">
            <Button className="border py-4 rounded-full w-[200px]">
              View All
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopSelling;

"use client";

// Import necessary modules and components
import { getProducts } from "@/axios/Axios"; // Function to fetch products data from an API
import { Filter } from "@/components/Filter"; // Component to filter products
import Products from "@/components/Product/FullProductsCards"; // Component to display product cards
import ProductsPageLabel from "@/components/ui/ProductsPageLabel"; // Component to display page label
import { Button } from "@nextui-org/button"; // UI button component
import { keepPreviousData, useQuery } from "@tanstack/react-query"; // React Query hooks for data fetching
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6"; // Icons for pagination buttons
import { useRouter } from "next/navigation"; // Router hook for navigation
import React, { useState, useEffect } from "react"; // React hooks
import { Pagination } from "@nextui-org/react"; // Pagination component

/**
 * Function to update the search parameters in the URL.
 * @param {Record<string, string | number | null | undefined>} params - The parameters to update in the URL.
 * @param {() => void} [callback] - Optional callback function to execute after updating the URL.
 */
const updateSearchParams = (
  params: Record<string, string | number | null | undefined>,
  callback?: () => void
): void => {
  try {
    const searchParams = new URLSearchParams(window.location.search);

    // Update or delete search parameters
    Object.entries(params).forEach(([key, value]) => {
      if (value === null || value === undefined) {
        searchParams.delete(key);
      } else {
        searchParams.set(key, String(value));
      }
    });

    // Update the browser's history state
    window.history.pushState(
      {},
      "",
      `${window.location.pathname}?${searchParams.toString()}`
    );

    // Execute the callback if provided
    if (callback) callback();
  } catch (error) {
    console.error("Failed to update search params:", error);
  }
};

/**
 * Component to display all products with filtering, pagination, and search capabilities.
 */
const AllProducts = () => {
  const router = useRouter(); // Hook for navigation
  const [page, setPage] = useState(1); // State for current page
  const [limit, setLimit] = useState(10); // State for items per page

  // Fetch products data using React Query
  const { data, isLoading } = useQuery({
    queryKey: ["products", page, limit], // Query key for caching and refetching
    queryFn: ({ queryKey }) =>
      getProducts(String(queryKey[2]), String(queryKey[1])), // Fetch data function
    placeholderData: keepPreviousData, // Use previous data while fetching new data
  });

  const totalProducts = data?.totalProducts || 0; // Total number of products
  const totalPages = Math.ceil(totalProducts / limit); // Total number of pages

  // Update page and limit states based on URL search parameters
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    setPage(Number(searchParams.get("page")) || 1);
    setLimit(Number(searchParams.get("limit")) || 10);
  }, [router]);

  // Handlers for pagination

  /**
   * Handle navigation to the next page.
   */
  const handleNextPage = () => {
    const nextPage = Math.min(page + 1, totalPages);
    updateSearchParams({ page: nextPage }, () => setPage(nextPage));
  };

  /**
   * Handle navigation to the previous page.
   */
  const handlePreviousPage = () => {
    const previousPage = Math.max(page - 1, 1);
    updateSearchParams({ page: previousPage }, () => setPage(previousPage));
  };

  return (
    <section>
      <div className="flex justify-center py-8">
        <div className="flex w-full lg:w-[95%] xl:w-[85%] max-w-[1920px] gap-5">
          {/* Filter Component */}
          <Filter />
          <div className="flex flex-col justify-between min-h-full gap-5 w-full">
            <div className="w-auto">
              {/* Page Label and Products Count */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-extrabold capitalize">
                  <ProductsPageLabel />
                </h2>
                <p>Showing 1-10 of {totalProducts} Products</p>
              </div>
              {/* Products List */}
              <Products productsData={data?.doc} isLoading={isLoading} />
            </div>
            {/* Pagination Controls */}
            <div className="flex justify-between w-full border-t pt-5">
              <Button
                isDisabled={page == 1}
                onClick={handlePreviousPage}
                className="flex items-center gap-2 text-base font-semibold bg-white border"
              >
                <FaArrowLeft /> Previous
              </Button>
              <Pagination
                initialPage={1}
                total={totalPages}
                page={page}
                onChange={(page) => setPage(page)}
              />
              <Button
                isDisabled={page >= totalPages}
                onClick={handleNextPage}
                className="flex items-center gap-2 text-base font-semibold bg-white border"
              >
                <FaArrowRight /> Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllProducts;

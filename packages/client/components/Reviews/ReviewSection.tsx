"use client";
import React from "react";
import { getReviews } from "@/axios/Axios";
import { Skeleton } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { Review, REVIEW_PROPS } from "./Reviews";

/**
 * Reviews Component
 *
 * This component fetches and displays customer reviews. It uses the `useQuery` hook
 * from React Query to manage the asynchronous fetching of review data.
 * While the data is being fetched, it shows a loading skeleton.
 * If there's an error, it displays an error message.
 *
 * @component
 * @example
 * return <Reviews />
 *
 * @returns {JSX.Element} The rendered Reviews component.
 */
const Reviews = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["review"],
    queryFn: getReviews,
  });

  return (
    <section>
      <div className="flex justify-center py-12 lg:py-20">
        <div className="flex flex-col px-4 gap-10 w-full lg:w-[95%] xl:w-[80%] max-w-[1920px]">
          <div className="flex justify-between w-full">
            <h2 className="font-bebas font-black text-4xl lg:text-5xl -tracking-wider">
              OUR HAPPY CUSTOMERS
            </h2>
          </div>
          <div className="w-full overflow-x-scroll">
            <ReviewCards data={data} isLoading={isLoading} error={error} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

/**
 * CardsSkeleton Component
 *
 * This component serves as a placeholder for review cards while the data is being loaded.
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
    <div className="flex gap-4 ">
      {Array.from({ length: 6 }, (_, index) => (
        <div
          key={index}
          className="border rounded-2xl h-[240px] min-w-[400px] p-6 flex flex-col gap-4"
        >
          <Skeleton className="h-8 w-[60%]  rounded-lg bg-default-200" />
          <Skeleton className="h-8 w-[40%]  rounded-lg bg-default-200" />
          <Skeleton className="h-full rounded-lg" />
          <Skeleton className="h-8 w-[50%] rounded-lg" />
        </div>
      ))}
    </div>
  );
};

/**
 * ReviewCards Component
 *
 * This component is responsible for rendering the individual review cards.
 * It handles different states: loading, error, and displaying the actual reviews.
 *
 * @param {Object} props - The props for the component.
 * @param {REVIEW_PROPS[]} props.data - The array of review data to display.
 * @param {boolean} props.isLoading - Indicates if the data is currently being loaded.
 * @param {Error | null} props.error - Any error that occurred during data fetching.
 *
 * @component
 * @example
 * return <ReviewCards data={reviewsData} isLoading={false} error={null} />
 *
 * @returns {JSX.Element} The rendered ReviewCards component.
 */
const ReviewCards = ({
  data,
  isLoading,
  error,
}: {
  data: REVIEW_PROPS[];
  isLoading: boolean;
  error: Error | null;
}) => {
  if (error) {
    return <div>Error loading products</div>;
  }
  if (isLoading) {
    return <CardsSkeleton />;
  }
  if (!data || data.length === 0) {
    return <div>There are no Reviews</div>;
  }
  return (
    <div className="flex gap-4">
      {data?.map((item: REVIEW_PROPS) => (
        <Review
          key={item.id}
          rating={item.rating}
          name={item.name}
          review={item.review}
          createdAt={item.createdAt}
          id={item.id}
        />
      ))}
    </div>
  );
};

"use client";
import React, { Suspense } from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import NewArrivalCards from "./NewArrivalCards";
import { Button } from "@nextui-org/button";
const NewArrival = () => {
  return (
    <section className="font-sans">
      <div className="flex justify-center py-12 lg:py-20">
        <div className="flex flex-col items-center px-4 w-full lg:w-[100%] max-w-[1920px] gap-8 ">
          <h2 className="font-bebas font-black text-4xl lg:text-5xl uppercase -tracking-wider text-center">
            NEW ARRIVALS
          </h2>
          <div className="overflow-x-scroll w-full">
            <Suspense fallback={<NewArrivalSkeleton />}>
              <NewArrivalCards />
            </Suspense>
          </div>
          <Button className="border py-4 rounded-full w-full  max-w-[400px] md:max-w-[200px]">
            View All
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;

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

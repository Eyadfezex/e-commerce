"use client";
import React from "react";

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
            <NewArrivalCards />
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

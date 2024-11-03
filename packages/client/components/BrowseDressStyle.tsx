import React from "react";
import Link from "next/link";
const BrowseDressStyle = () => {
  return (
    <section className="w-full">
      <div className="flex justify-center py-12">
        <div className=" px-4 w-full lg:w-[95%] xl:w-[80%] max-w-[1920px]">
          <div className="flex flex-col gap-16 items-center bg-[#F0F0F0] w-full p-8 md:p-16 lg:p-[5rem] rounded-[3rem]">
            <h2 className=" text-4xl lg:text-5xl font-bebas text-center font-black uppercase -tracking-widest">
              BROWSE BY dress STYLE
            </h2>
            <div className="flex flex-col lg:grid grid-cols-3 grid-rows-2 font-Bold gap-4  lg:h-[40rem] w-full">
              <Link
                href="/"
                className="rounded-3xl p-4 pb-[10rem] md:pb-[20rem] lg:pb-4 overflow-hidden col-span-1 casual bg-cover bg-center row-span-1"
              >
                <h3 className="text-3xl lg:text-4xl font-black capitalize">
                  Casual
                </h3>
              </Link>

              <Link
                href="/"
                className="rounded-3xl p-4 pb-[10rem] md:pb-[20rem] relative overflow-hidden formal bg-cover bg-center  col-span-2 row-span-1 "
              >
                <h3 className="text-3xl lg:text-4xl font-black capitalize">
                  formal
                </h3>
              </Link>
              <Link
                href="/"
                className="rounded-3xl p-4 pb-[10rem] md:pb-[20rem] overflow-hidden relative party bg-cover bg-center   col-span-2 row-span-1"
              >
                <h3 className="text-3xl lg:text-4xl font-black capitalize">
                  party
                </h3>
              </Link>
              <Link
                href="/"
                className="rounded-3xl p-4 pb-[10rem] md:pb-[20rem] gym bg-cover bg-center   overflow-hidden relative col-span-1 row-span-1"
              >
                <h3 className="text-3xl lg:text-4xl font-black capitalize">
                  gym
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseDressStyle;

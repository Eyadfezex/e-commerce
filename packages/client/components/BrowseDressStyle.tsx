/**
 * BrowseDressStyle Component
 *
 * This component displays a section that allows users to browse dresses by different styles.
 * It features a grid layout for different dress styles, each styled with background images
 * and linked to respective pages. The layout adapts to different screen sizes, providing a
 * responsive experience.
 */

import React from "react";
import Link from "next/link";

/**
 * BrowseDressStyle Component
 * @returns {JSX.Element} - A section for browsing dresses by different styles
 */
const BrowseDressStyle = () => {
  return (
    <section className="w-full">
      <div className="flex justify-center py-12">
        <div className="px-4 w-full lg:w-[95%] xl:w-[85%] max-w-[1920px]">
          <div className="flex flex-col gap-16 items-center bg-[#F0F0F0] w-full p-8 md:p-16 lg:p-[5rem] rounded-[3rem]">
            {/* Section heading */}
            <h2 className="text-4xl lg:text-5xl font-bebas text-center font-black uppercase -tracking-widest">
              BROWSE BY dress STYLE
            </h2>

            {/* Grid of dress style options with responsive design */}
            <div className="flex flex-col lg:grid grid-cols-3 grid-rows-2 font-Bold gap-4 lg:h-[40rem] xl:h-[45rem] w-full">
              {/* Casual style card */}
              <Link
                href="products?category=casual"
                className="rounded-3xl p-4 pb-[10rem] md:pb-[20rem] lg:pb-4 overflow-hidden col-span-1 casual bg-cover bg-center row-span-1"
              >
                <h3 className="text-3xl lg:text-4xl font-black capitalize">
                  Casual
                </h3>
              </Link>

              {/* Formal style card */}
              <Link
                href="products?category=formal"
                className="rounded-3xl p-4 pb-[10rem] md:pb-[20rem] relative overflow-hidden formal bg-cover bg-center col-span-2 row-span-1"
              >
                <h3 className="text-3xl lg:text-4xl font-black capitalize">
                  formal
                </h3>
              </Link>

              {/* Party style card */}
              <Link
                href="products?category=party"
                className="rounded-3xl p-4 pb-[10rem] md:pb-[20rem] overflow-hidden relative party bg-cover bg-center col-span-2 row-span-1"
              >
                <h3 className="text-3xl lg:text-4xl font-black capitalize">
                  party
                </h3>
              </Link>

              {/* Gym style card */}
              <Link
                href="products?category=gym"
                className="rounded-3xl p-4 pb-[10rem] md:pb-[20rem] gym bg-cover bg-center overflow-hidden relative col-span-1 row-span-1"
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

import { Button } from "@nextui-org/button";
import React from "react";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

export const OrderSummary = () => {
  return (
    <div className="font-sans max-w-[505px] max-h-[458px] w-full">
      <div className="p-6 border text-xl rounded-3xl w-full">
        <h2 className="font-Bold text-2xl">Order Summary</h2>
        <div className="flex flex-col gap-4 py-5">
          <div className="flex justify-between items-center">
            <p className="font-light text-default-500">Subtotal</p>
            <p className="font-bold">$0.00</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-light text-default-500">Discount</p>
            <p className="font-bold text-red-500">-$0.00</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-light text-default-500">Delivery Fee</p>
            <p className="font-bold">$0.00</p>
          </div>
        </div>
        <div className="pt-4 border-t flex flex-col gap-5">
          <div className="flex justify-between items-center ">
            <p className="font-light ">Total</p>
            <p className="font-bold text-2xl">$0.00</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-zinc-100 rounded-full p-2 w-full max-w-[557px] lg:max-w-[700px] hidden md:block">
              <div className="flex items-center gap-2 px-2 text-zinc-400">
                {/* ---search Icon--- */}
                <MdOutlineLocalOffer size={24} />
                <input
                  type="text"
                  placeholder="Add promo code"
                  className="bg-transparent text-lg font-medium w-full placeholder:text-zinc-400 focus:outline-none"
                />
              </div>
            </div>
            <Button className="bg-black text-white rounded-full px-8 py-6 text-base">
              Apply
            </Button>
          </div>
          <Button className="bg-black text-white rounded-full py-6 flex items-center justify-center gap-4 w-full text-base">
            <p>Go To Checkout</p>
            <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import Image from "next/image";
import { PiTrashFill } from "react-icons/pi";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

interface OrderTicketProps {
  name: string;
  price: number;
  size: string;
  image: string;
  color: string;
  quantity: number;
}
export const OrderTicket = ({
  name = "Gradient Graphic T-shirt",
  size = "large",
  price = 145,
  image = "https://placehold.co/600x400",
  color = "white",
  quantity = 1,
}: OrderTicketProps) => {
  return (
    <div className=" w-full max-w-[667px] min-h-[124px]">
      <div className="flex">
        <div className="flex gap-4 w-full items-center">
          <div className="relative min-w-[124px] min-h-[124px]  rounded-lg overflow-hidden border">
            <Image
              src={image}
              alt="Product image"
              width={1000}
              height={1000}
              className=" absolute w-full h-full object-cover "
            />
          </div>
          <div className="flex justify-between w-full h-[90%]">
            <div className=" flex flex-col justify-between h-full">
              <div>
                <h3 className="font-Bold text-md md:text-xl">{name}</h3>
                <p className="capitalize text-xs md:text-sm">
                  size: <span className="text-default-500 ">{size}</span>
                </p>
                <p className="capitalize text-xs md:text-sm">
                  color: <span className="text-default-500 ">{color}</span>
                </p>
              </div>
              <p className="text-xl md:text-2xl font-Bold">${price}</p>
            </div>
            <div className="flex flex-col justify-between items-end h-full">
              <button>
                <PiTrashFill color="red" size={24} />
              </button>
              <div className="flex justify-between md:h-12 items-center rounded-full bg-default-200 px-4 py-2 w-32 ">
                <button>
                  <IoIosRemove size={25} />
                </button>
                <div>{quantity}</div>
                <button>
                  <IoIosAdd size={25} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

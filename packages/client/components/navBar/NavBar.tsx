import React from "react";
import { Sling as Hamburger } from "hamburger-react";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { RiShoppingCart2Line } from "react-icons/ri";
import { MdAccountCircle } from "react-icons/md";

const NavBar = () => {
  return (
    <nav className="w-full">
      <div className="flex justify-center py-[0.5rem]">
        <div className="flex justify-between items-center px-[16px] w-full lg:w-[1920px]">
          <div className="flex items-center gap-[0.5rem]">
            <Hamburger size={24} rounded />
            <Link href=".">
              <p className="font-bebas font-black text-[24px]">SHOP.CO</p>
            </Link>
          </div>
          <div className="flex items-center gap-[0.5rem]">
            <IoSearch size={24} />
            <RiShoppingCart2Line size={24} />
            <MdAccountCircle size={24} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

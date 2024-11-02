"use client";
import React from "react";
import { Sling as Hamburger } from "hamburger-react";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { RiShoppingCart2Line } from "react-icons/ri";
import { MdAccountCircle } from "react-icons/md";
import SearchBar from "./SearchBar";
import Image from "next/image";
import logo from "../assets/svgs/logo.svg";
import NavLinks from "./NavLinks";

const NavBar = () => {
  return (
    <nav className="w-full">
      <div className="flex justify-center py-[0.5rem] md:py-[1rem]">
        <div className="flex justify-between items-center px-[16px] md:gap-[10rem] xl:w-[95%] lg:gap-[2rem]  w-full max-w-[1920px]">
          <div className="flex items-center gap-[0.5rem] md:gap-[1rem] xl:gap-[2rem] w-full">
            <div className="lg:hidden">
              <Hamburger size={24} rounded />
            </div>
            <Link href=".">
              <Image
                src={logo}
                alt="logo"
                className="w-[80%] md:w-[90%] lg:w-full"
              />
            </Link>
            <div className="lg:w-[65%] xl:w-full max-w-[315px]">
              <NavLinks />
            </div>
            <SearchBar />
          </div>
          <div className="flex items-center gap-[0.5rem]">
            <IoSearch size={24} className="md:hidden" />
            {/* ---cart icon--- */}
            <RiShoppingCart2Line size={24} />
            {/* ---Account icon--- */}
            <MdAccountCircle size={24} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

/**
 * NavBar Component
 *
 * This component renders a responsive navigation bar for a website. It includes a logo, navigation links,
 * a search bar, a hamburger menu for smaller screens, and icons for search, shopping cart, and user account.
 * The NavBar adjusts layout based on screen size to ensure a seamless user experience on different devices.
 */

"use client";
import React from "react";
import { Sling as Hamburger } from "hamburger-react"; // Hamburger menu for mobile views
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { RiShoppingCart2Line } from "react-icons/ri";
import { MdAccountCircle } from "react-icons/md";
import SearchBar from "./ui/SearchBar";
import Image from "next/image";
import logo from "@/public/assets/svgs/logo.svg";
import NavLinks from "./ui/NavLinks";

/**
 * NavBar Component
 * @returns {JSX.Element} - The navigation bar component
 */
const NavBar = () => {
  return (
    <nav className="w-full">
      <div className="flex justify-center py-[0.5rem] md:py-[1rem]">
        <div className="flex justify-between items-center px-[16px] md:gap-[10rem] lg:w-[95%] xl:w-[80%] lg:gap-[2rem] w-full max-w-[1920px]">
          {/* Left side of the NavBar: logo, hamburger menu, nav links, and search bar */}
          <div className="flex items-center gap-[0.5rem] md:gap-[1rem] xl:gap-[2rem] w-full">
            {/* Hamburger menu icon for mobile view */}
            <div className="lg:hidden">
              <Hamburger size={24} rounded />
            </div>

            {/* Logo link to the homepage */}
            <Link href="/">
              <Image
                src={logo}
                alt="logo"
                className="w-[80%] md:w-[90%] lg:w-full"
              />
            </Link>

            {/* Navigation links (visible on larger screens) */}
            <div className="lg:w-[65%] xl:w-full max-w-[315px]">
              <NavLinks />
            </div>

            {/* Search bar */}
            <SearchBar />
          </div>

          {/* Right side of the NavBar: icons for search, cart, and account */}
          <div className="flex items-center gap-[0.5rem]">
            {/* Search icon (visible on smaller screens) */}
            <IoSearch size={24} className="md:hidden" />

            {/* Shopping cart icon */}
            <RiShoppingCart2Line size={24} />

            {/* User account icon */}
            <MdAccountCircle size={24} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

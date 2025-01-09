"use client";
import React from "react";
import logo from "@/public/assets/svgs/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiVisa } from "react-icons/si";
import { RiMastercardFill } from "react-icons/ri";
import { BiLogoPaypal } from "react-icons/bi";
import { FaApplePay } from "react-icons/fa6";
import { FaGooglePay } from "react-icons/fa";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const year = new Date();
  const path = usePathname();
  if (path == "/auth/signin") {
    return null;
  }
  return (
    <footer className="bg-zinc-200 font-sans">
      <div className="flex justify-center py-20">
        <div className="flex flex-col px-4 w-full lg:w-[95%] xl:w-[85%] gap-16 max-w-[1920px]">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-16">
            <div className="lg:max-w-[248px]">
              <Image src={logo} alt="logo" className="w-[144px]" />
              <p className=" mt-4 opacity-90">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <div className="flex items-center gap-2 mt-5">
                <Link href=".">
                  <div className="rounded-full bg-white border border-zinc-400 flex justify-center items-center w-7 h-7 group hover:bg-black hover:border-black duration-150">
                    <TiSocialTwitter
                      size={14}
                      className=" group-hover:text-white  duration-150"
                    />
                  </div>
                </Link>
                <Link href=".">
                  <div className="rounded-full bg-white border border-zinc-400 flex justify-center items-center w-7 h-7 group hover:bg-black hover:border-black duration-150">
                    <TiSocialFacebook
                      size={14}
                      className=" group-hover:text-white  duration-150"
                    />
                  </div>
                </Link>
                <Link href=".">
                  <div className="rounded-full bg-white border border-zinc-400 flex justify-center items-center w-7 h-7 group hover:bg-black hover:border-black duration-150">
                    <FaInstagram
                      size={14}
                      className=" group-hover:text-white  duration-150"
                    />
                  </div>
                </Link>
                <Link href=".">
                  <div className="rounded-full bg-white border border-zinc-400 flex justify-center items-center w-7 h-7 group hover:bg-black hover:border-black duration-150">
                    <FaGithub
                      size={14}
                      className=" group-hover:text-white  duration-150"
                    />
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap lg:justify-between gap-14 w-[80%]">
              <div className="flex flex-col gap-4">
                <h3 className="uppercase font-bold tracking-widest">Company</h3>
                <Link href="." className="opacity-90  capitalize">
                  Lorem
                </Link>
                <Link href="." className="opacity-90  capitalize">
                  Lorem
                </Link>
                <Link href="." className="opacity-90  capitalize">
                  Lorem
                </Link>
                <Link href="." className="opacity-90  capitalize">
                  Lorem
                </Link>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="uppercase font-bold tracking-widest">help</h3>
                <Link href="." className="opacity-90  capitalize">
                  Lorem
                </Link>
                <Link href="." className="opacity-90  capitalize">
                  Lorem
                </Link>
                <Link href="." className="opacity-90  capitalize">
                  Lorem
                </Link>
                <Link href="." className="opacity-90  capitalize">
                  Lorem
                </Link>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="uppercase font-bold tracking-widest">faq</h3>
                <Link href="." className="opacity-90  capitalize">
                  Lorem
                </Link>
                <Link href="." className="opacity-90  capitalize">
                  Lorem
                </Link>
                <Link href="." className="opacity-90  capitalize">
                  Lorem
                </Link>
                <Link href="." className="opacity-90  capitalize">
                  Lorem
                </Link>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="uppercase font-bold tracking-widest">
                  RESOURCES
                </h3>
                <Link href="." className="opacity-90  capitalize">
                  Lorem
                </Link>
                <Link href="." className="opacity-90  capitalize">
                  Lorem
                </Link>
                <Link href="." className="opacity-90  capitalize">
                  Lorem
                </Link>
                <Link href="." className="opacity-90  capitalize">
                  Lorem
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-zinc-300 flex flex-col md:flex-row md:justify-between items-center gap-4 pt-4 opacity-90 font-medium ">
            <p>Shop.co © 2000-{year.getFullYear()}, All Rights Reserved</p>
            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="px-3 py-0.5 border border-zinc-300 rounded-lg bg-white"
              >
                <SiVisa size={30} />
              </Link>
              <Link
                href="/"
                className="px-3 py-0.5 border border-zinc-300 rounded-lg bg-white"
              >
                <RiMastercardFill size={30} />
              </Link>
              <Link
                href="/"
                className="px-3 py-0.5 border border-zinc-300 rounded-lg bg-white"
              >
                <BiLogoPaypal size={30} />
              </Link>
              <Link
                href="/"
                className="px-3 py-0.5 border border-zinc-300 rounded-lg bg-white"
              >
                <FaApplePay size={30} />
              </Link>
              <Link
                href="/"
                className="px-3 py-0.5 border border-zinc-300 rounded-lg bg-white"
              >
                <FaGooglePay size={30} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

"use client";
import Image from "next/image";
import gucci from "@/public/assets/img/gucci.png";
import prada from "@/public/assets/img/prada.png";
import zara from "@/public/assets/img/zara.png";
import versace from "@/public/assets/img/versace.png";
import calvin_klein from "@/public/assets/img/calvin-klein.png";
import React from "react";
import whiteLogo from "@/public/assets/svgs/whitelogo.svg";
import whitestar from "@/public/assets/svgs/whitestar.svg";
import { CredentialsForm } from "@/components/CredentialsForm";
import authRedirect from "@/HOC/authRedirect";
const SignIn = () => {
  return (
    <section className="h-screen">
      <div className="flex justify-center h-full">
        <div className="flex  items-center lg:w-[95%] max-w-[1920px]">
          <div className="lg:grid grid-rows-10 h-full w-[60%] overflow-clip hidden ">
            <div className="row-span-3 bg-black flex justify-center items-end pb-4">
              <div className="px-5 text-white flex justify-between items-start w-full relative">
                <Image
                  src={whitestar}
                  alt="star"
                  className="absolute w-10 left-[calc(40%+8vw)]"
                />
                <Image
                  src={whitestar}
                  alt="star"
                  className="absolute w-24 bottom-0 right-[20%]"
                />
                <h1 className="font-Bold  text-[67px] leading-[60px]">
                  FIND CLOTHES <br /> THAT <br /> MATCHES <br /> YOUR STYLE
                </h1>
                <Image src={whiteLogo} alt="logo" className="w-auto" />
              </div>
            </div>
            <div className="row-span-1 h-[10vh]"></div>
            <div className="row-span-6 bg-black flex justify-center">
              <div className="w-full flex justify-end px-5 relative">
                <Image
                  src="https://i.ibb.co/cKB9mgC/pexels-marleneleppanen-1183266.webp"
                  alt="model"
                  className="w-[70%] h-auto absolute bottom-[0%] right-[13%]"
                />
                <div className="flex relative gap-4 md:gap-10 justify-between items-end w-full pb-10  px-[16px] max-w-[1920px]">
                  <Image
                    src={versace}
                    alt="logo"
                    className="w-full max-w-[115px] lg:max-w-[130px] xl:max-w-[130px] h-fit"
                  />
                  <Image
                    src={zara}
                    alt="logo"
                    className="w-full max-w-[60px] lg:max-w-[70px] xl:max-w-[70px] h-fit"
                  />
                  <Image
                    src={gucci}
                    alt="logo"
                    className="w-full max-w-[115px] lg:max-w-[130px] xl:max-w-[130px] h-fit"
                  />
                  <Image
                    src={prada}
                    alt="logo"
                    className="w-full max-w-[115px] lg:max-w-[130px] xl:max-w-[130px] h-fit"
                  />
                  <Image
                    src={calvin_klein}
                    alt="logo"
                    className="w-full max-w-[115px] lg:max-w-[130px] xl:max-w-[130px] h-fit"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="m-auto">
            <CredentialsForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default authRedirect(SignIn, "/");

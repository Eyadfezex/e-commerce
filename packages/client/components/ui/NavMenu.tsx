import React from "react";
import Link from "next/link";
import Image from "next/image";
import { dropDownItems, navLinks } from "@/constants";
import dot from "@/public/assets/svgs/dot-small-svgrepo-com.svg";
import { Accordion, AccordionItem } from "@nextui-org/react";
import star from "@/public/assets/svgs/star.svg";
import { motion } from "framer-motion";

const NavMenu = ({ isOn }: { isOn: boolean }) => {
  return (
    <div className="flex justify-center py-7  bg-white lg:hidden border shadow-xl">
      <div className="flex flex-col gap-14 w-full px-7">
        <div className="flex flex-col gap-5">
          <Accordion className="!px-0 ">
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title="Shop"
              classNames={{
                trigger: "!py-0",
              }}
            >
              {dropDownItems.map((item) => (
                <Link
                  className="flex items-center gap-2 mb-1 hover:text-black hover:font-bold duration-300"
                  href={item.url}
                  key={item.id}
                >
                  <Image src={dot} alt="dot" width={20} height={30} />
                  <span>{item.name}</span>
                </Link>
              ))}
            </AccordionItem>
          </Accordion>
          {/* ---pages links--- */}
          {navLinks.map((item, id) => (
            <Link key={id} href={item.url} className="capitalize font-bold">
              {item.name}
            </Link>
          ))}
        </div>
        <motion.div
          initial={{ x: -150, rotate: 0 }}
          animate={isOn ? { x: 0, rotate: 180 } : { x: -150, rotate: 0 }}
          transition={
            isOn
              ? { duration: 1.5, delay: 0.3, ease: "backOut" }
              : { duration: 1.5, ease: "backOut" }
          }
          className="w-full flex justify-center"
        >
          <Image src={star} alt="star" width={50} />
        </motion.div>
        <div>
          <Link href="#" className="text-sm font-light">
            Privacy Policy <br /> Terms & Conditions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;

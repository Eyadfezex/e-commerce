import React from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { FaAngleDown } from "react-icons/fa6";
import { dropDownItems, navLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import dot from "../assets/svgs/dot-small-svgrepo-com.svg";
const NavLinks = () => {
  return (
    <div className="lg:flex items-center gap-[2rem] lg:gap-[1rem] hidden font-sans">
      {/* ---dropdown--- */}
      <Dropdown>
        <DropdownTrigger>
          <Button
            disableRipple
            className="p-0 bg-transparent data-[hover=true]:bg-transparent flex font-bold capitalize  focus:outline-none"
            endContent={<FaAngleDown size={16} />}
            radius="sm"
            variant="light"
          >
            shops
          </Button>
        </DropdownTrigger>
        <DropdownMenu className="focus:outline-none  bg-zinc-50 p-4 font-bold rounded-lg">
          {dropDownItems.map((item, id) => (
            <DropdownItem
              className="focus:outline-none py-1 flex justify-start gap-[0.1rem]"
              key={id}
              startContent={<Image src={dot} alt="icon" className="w-[24px]" />}
            >
              <Link href={item.url}>{item.name}</Link>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>

      {/* ---pages links--- */}
      {navLinks.map((item, id) => (
        <Link key={id} href={item.url} className=" capitalize font-bold">
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;

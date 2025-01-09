"use client";

import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
type TBreadCrumbProps = {
  homeElement: ReactNode;
  separator: ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
};

const isIdSegment = (segment: string) => {
  // Basic check: returns true if the segment is a number or a string with a certain length (customize as needed)
  return (
    /^\d+$/.test(segment) ||
    (segment.length > 10 && /^[a-zA-Z0-9_-]+$/.test(segment))
  );
};

const NextBreadcrumb = ({
  homeElement,
  separator,
  containerClasses = "flex space-x-2",
  listClasses = "text-gray-700",
  activeClasses = "font-bold text-blue-600",
  capitalizeLinks = false,
}: TBreadCrumbProps) => {
  const paths = usePathname();
  const pathNames = paths ? paths.split("/").filter((path) => path) : [];
  const searchParams = useSearchParams();

  const category = searchParams?.get("category");

  // Filter out segments that appear to be IDs
  const filteredPathNames = pathNames.filter(
    (segment) => !isIdSegment(segment)
  );

  // Return null if the path is the root or only contains IDs
  if (
    paths === "/" ||
    filteredPathNames.length === 0 ||
    paths === "/auth/signin"
  ) {
    return null;
  }

  return (
    <div className="flex justify-center">
      <div className="w-full lg:w-[95%] xl:w-[85%] px-4 max-w-[1920px]">
        <ul className={containerClasses} aria-label="Breadcrumb">
          <li className={listClasses}>
            <Link href="/">{homeElement}</Link>
          </li>
          {filteredPathNames.length > 0 && separator}
          {filteredPathNames.map((link, index) => {
            const href = `/${filteredPathNames.slice(0, index + 1).join("/")}`;
            const itemClasses =
              paths === href && !category
                ? `${listClasses} ${activeClasses}`
                : listClasses;
            const itemLink = capitalizeLinks
              ? link.charAt(0).toUpperCase() + link.slice(1)
              : link;

            return (
              <React.Fragment key={index}>
                <li className={itemClasses}>
                  <Link href={href}>{itemLink}</Link>
                </li>
                {filteredPathNames.length !== index + 1 && separator}
              </React.Fragment>
            );
          })}
          {category && (
            <>
              {separator}
              <li className={`${listClasses} ${activeClasses}`}>
                {capitalizeLinks
                  ? category.charAt(0).toUpperCase() + category.slice(1)
                  : category}
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default NextBreadcrumb;

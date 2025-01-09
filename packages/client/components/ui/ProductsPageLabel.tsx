"use client";
import React from "react";
import { usePathname, useSearchParams } from "next/navigation";

const ProductsPageLabel = () => {
  const searchParams = useSearchParams();
  const category = searchParams?.get("category");
  const pathName = usePathname();

  if (category) {
    return <>{category}</>;
  }

  const pathParts = pathName?.split("/");
  return <>{pathParts?.[pathParts.length - 1]}</>;
};

export default ProductsPageLabel;

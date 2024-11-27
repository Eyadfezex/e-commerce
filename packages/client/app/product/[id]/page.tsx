/**
 * Dynamic Product Page
 *
 * This page component is used within a dynamic route in a Next.js application to render product details.
 * It extracts the `id` parameter from the route and passes it as a prop to the `ProductPage` component.
 */

import ProductPage from "@/pages/Product";
import React from "react";

/**
 * Page Component
 * @param {Object} params - The dynamic route parameters provided by Next.js.
 * @param {string} params.id - The ID of the product to be displayed.
 * @returns {JSX.Element} - Renders the `ProductPage` component with the extracted product ID.
 */
const page = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const { id } = await Promise.resolve(params); // Extracts the product ID from the route parameters
  return <ProductPage id={id} />;
};

export default page;

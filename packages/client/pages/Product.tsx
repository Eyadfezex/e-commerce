/**
 * ProductPage Component
 *
 * This component renders the product details page by displaying information for a specific product.
 * The product ID is passed in as a prop and used to fetch and render detailed information via the `ProductDetails` component.
 */

import { ProductDetails } from "@/components/Product/ProductDetails";
import React from "react";

// Type definition for the component's props
interface ProductPageProps {
  id: string; // The ID of the product to be displayed
}

/**
 * ProductPage Component
 * @param {ProductPageProps} props - The props for the component, containing the product ID.
 * @returns {JSX.Element} - A page component displaying the details of a specific product.
 */
const ProductPage = ({ id }: ProductPageProps) => {
  return (
    <div>
      {/* Passes the product ID to the ProductDetails component for rendering */}
      <ProductDetails id={id} />
    </div>
  );
};

export default ProductPage;

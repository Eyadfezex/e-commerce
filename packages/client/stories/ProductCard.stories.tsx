import type { Meta, StoryObj } from "@storybook/react";
import { ProductCard as OriginProductCard } from "../components/Product/ProductCard";
const meta: Meta<typeof OriginProductCard> = {
  title: "ProductCard",
  component: OriginProductCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    rating: { control: { type: "range", min: 0, max: 5, step: 0.5 } },
    currentPrice: {
      control: "number",
    },
    productId: {
      control: "number",
    },
    productName: {
      control: "text",
    },
    originalPrice: {
      control: "number",
    },
    discountPercentage: {
      control: "number",
    },
    discountPrice: {
      control: "text",
    },

    productImage: {
      control: "text",
    },
  },
} satisfies Meta<typeof OriginProductCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ProductCard: Story = {
  render: ({
    rating,
    currentPrice,
    productName,
    originalPrice,
    discountPercentage,
    productImage,
    discountPrice,
    productId,
  }) => {
    return (
      <OriginProductCard
        rating={rating}
        currentPrice={currentPrice}
        productName={productName}
        originalPrice={originalPrice}
        discountPercentage={discountPercentage}
        discountPrice={discountPrice}
        productImage={productImage}
        productId={productId}
      />
    );
  },
};

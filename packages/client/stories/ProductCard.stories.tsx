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
    rate: { control: { type: "range", min: 0, max: 5, step: 0.5 } },
    currentPrice: {
      control: "number",
    },
    id: {
      control: "number",
    },
    Pname: {
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

    PImage: {
      control: "text",
    },
  },
} satisfies Meta<typeof OriginProductCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ProductCard: Story = {
  render: ({
    rate,
    currentPrice,
    Pname,
    originalPrice,
    discountPercentage,
    PImage,
    discountPrice,
    id,
  }) => {
    return (
      <OriginProductCard
        rate={rate}
        currentPrice={currentPrice}
        Pname={Pname}
        originalPrice={originalPrice}
        discountPercentage={discountPercentage}
        discountPrice={discountPrice}
        PImage={PImage}
        id={id}
      />
    );
  },
};

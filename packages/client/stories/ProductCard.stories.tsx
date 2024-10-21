import type { Meta, StoryObj } from "@storybook/react";
import { ProductCard as OriginProductCard } from "../components/ProductCard";
import shirt from "../assets/img/t-shirt.webp";
const meta: Meta<typeof OriginProductCard> = {
  title: "ProductCard",
  component: OriginProductCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    rate: { control: { type: "range", min: 0, max: 5 } },
    price: {
      control: "number",
    },
    Pname: {
      control: "text",
    },
    Mprice: {
      control: "number",
    },
    discountPerc: {
      control: "number",
    },
    PImage: {
      control: "text",
    },
  },
} satisfies Meta<typeof OriginProductCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ProductCard: Story = {
  render: ({ rate, price, Pname, Mprice, discountPerc, PImage = shirt }) => {
    return (
      <OriginProductCard
        rate={rate}
        price={price}
        Pname={Pname}
        Mprice={Mprice}
        discountPerc={discountPerc}
        PImage={PImage}
      />
    );
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import ProductCard from "@/components/ProductCard";
const meta = {
  title: "Search",
  component: ProductCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },

  args: {},
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProductCard: Story = {};

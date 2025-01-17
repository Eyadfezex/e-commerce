import type { Meta, StoryObj } from "@storybook/react";
import { OrderTicket as OriginOrderTicket } from "@/components/Cart/OrderTicket";

const meta: Meta<typeof OriginOrderTicket> = {
  title: "OrderTicket",
  component: OriginOrderTicket,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "text",
    },
    price: {
      control: "number",
    },
    size: { control: "text" },
    image: {
      control: "text",
    },
    color: {
      control: "text",
    },
    quantity: {
      control: "number",
    },
  },
} satisfies Meta<typeof OriginOrderTicket>;

export default meta;

type Story = StoryObj<typeof meta>;

export const OrderTicket: Story = {
  render: ({ name, price, size, image, quantity, color }) => {
    return (
      <OriginOrderTicket
        name={name}
        price={price}
        size={size}
        image={image}
        color={color}
        quantity={quantity}
      />
    );
  },
};

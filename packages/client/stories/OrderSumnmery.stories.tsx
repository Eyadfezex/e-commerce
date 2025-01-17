import type { Meta, StoryObj } from "@storybook/react";
import { OrderSummary as OriginOrderSummary } from "@/components/Cart/OrderSummary";

const meta: Meta<typeof OriginOrderSummary> = {
  title: "OrderSummary",
  component: OriginOrderSummary,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof OriginOrderSummary>;

export default meta;

type Story = StoryObj<typeof meta>;

export const OrderSummary: Story = {
  render: ({}) => {
    return <OriginOrderSummary />;
  },
};

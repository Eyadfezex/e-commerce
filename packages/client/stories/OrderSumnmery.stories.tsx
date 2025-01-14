import type { Meta, StoryObj } from "@storybook/react";
import { OrderSummary as OriginOrderSummery } from "@/components/Cart/OrderSummary";

const meta: Meta<typeof OriginOrderSummery> = {
  title: "OrderSummary",
  component: OriginOrderSummery,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof OriginOrderSummery>;

export default meta;

type Story = StoryObj<typeof meta>;

export const OrderSummary: Story = {
  render: ({}) => {
    return <OriginOrderSummery />;
  },
};

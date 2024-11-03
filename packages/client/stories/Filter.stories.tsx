import type { Meta, StoryObj } from "@storybook/react";
import { Filter as OriginalFilter } from "@/components/Filter";

const meta: Meta<typeof OriginalFilter> = {
  title: "Filter",
  component: OriginalFilter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof OriginalFilter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Filter: Story = {
  render: ({}) => {
    return <OriginalFilter />;
  },
};

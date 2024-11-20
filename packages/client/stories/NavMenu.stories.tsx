import type { Meta, StoryObj } from "@storybook/react";
import NavMenu from "@/components/ui/NavMenu";
const meta = {
  title: "NavMenu",
  component: NavMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },

  args: {},
} satisfies Meta<typeof NavMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const primary: Story = {};

import type { Meta, StoryObj } from "@storybook/react";
import NavBar from "../components/NavBar";
const meta = {
  title: "NavBar",
  component: NavBar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },

  args: {},
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const primary: Story = {};

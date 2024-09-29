import type { Meta, StoryObj } from "@storybook/react";
import NavBar from "../components/navBar/NavBar";
const meta = {
  title: "Example/NavBar",
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

export const navBar: Story = {
  args: {
    primary: true,
    label: "NavBar",
  },
};

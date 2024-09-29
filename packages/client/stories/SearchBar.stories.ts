import type { Meta, StoryObj } from "@storybook/react";
import SearchBar from "@/components/SearchBar";
const meta = {
  title: "Search",
  component: SearchBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },

  args: {},
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const searchBar: Story = {};

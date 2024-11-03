import type { Meta, StoryObj } from "@storybook/react";
import { Footer as OriginFooter } from "../components/Footer";

const meta: Meta<typeof OriginFooter> = {
  title: "Footer",
  component: OriginFooter,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof OriginFooter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Footer: Story = {
  render: ({}) => {
    return <OriginFooter />;
  },
};

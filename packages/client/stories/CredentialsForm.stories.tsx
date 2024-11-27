import type { Meta, StoryObj } from "@storybook/react";
import { CredentialsForm as OriginalCredentialsForm } from "@/components/CredentialsForm";

const meta: Meta<typeof OriginalCredentialsForm> = {
  title: "CredentialsForm",
  component: OriginalCredentialsForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof OriginalCredentialsForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Filter: Story = {
  render: ({}) => {
    return <OriginalCredentialsForm />;
  },
};

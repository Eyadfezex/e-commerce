import type { Meta, StoryObj } from "@storybook/react";
import { Review as OriginReview } from "../components/Reviews";

const meta: Meta<typeof OriginReview> = {
  title: "Review",
  component: OriginReview,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    rating: {
      control: {
        type: "range",
        min: 0,
        max: 5,
      },
    },
    name: {
      control: "text",
    },
    review: {
      control: "text",
    },
    date: {
      control: "text",
    },
  },
} satisfies Meta<typeof OriginReview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Review: Story = {
  render: ({ rating, name, review, date }) => {
    return (
      <OriginReview rating={rating} date={date} review={review} name={name} />
    );
  },
};

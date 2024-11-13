import type { Meta, StoryObj } from "@storybook/react";
import { Review as OriginReview } from "../components/Reviews/Reviews";

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
        step: 0.5,
        max: 5,
      },
    },
    name: {
      control: "text",
    },
    review: {
      control: "text",
    },
    createdAt: {
      control: "text",
    },
  },
} satisfies Meta<typeof OriginReview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Review: Story = {
  render: ({ rating, name, review, createdAt }) => {
    return (
      <OriginReview
        rating={rating}
        createdAt={createdAt}
        review={review}
        name={name}
        id={undefined}
      />
    );
  },
};

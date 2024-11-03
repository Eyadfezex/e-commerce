import { useCheckbox, Chip, VisuallyHidden, tv } from "@nextui-org/react";
import React from "react";

import { FaCheck } from "react-icons/fa6";

interface Props {
  color: string;
  defaultSelected?: boolean;
}

export const CheckBox = ({ color, defaultSelected = false }: Props) => {
  const {
    isSelected,
    isFocusVisible,
    getBaseProps,
    getLabelProps,
    getInputProps,
  } = useCheckbox({
    defaultSelected,
  });
  const checkbox = tv({
    slots: {
      base: "border-default hover:bg-default-200 rounded-full  flex items-center justify-center", // added rounded-full, width, and height
      content: "text-default-500",
    },
    variants: {
      isSelected: {
        true: {
          base: ` bg-primary hover:bg-primary-500 `,
          content: "text-primary-foreground p-0",
        },
      },
      isFocusVisible: {
        true: {
          base: "outline-none ring-2 ring-focus ring-offset-2 ",
        },
      },
    },
  });
  const styles = checkbox({ isSelected, isFocusVisible });

  return (
    <label {...getBaseProps()} role="checkbox" aria-checked="mixed">
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <Chip
        classNames={{
          base: styles.base(),
          content: styles.content(),
        }}
        color="primary"
        style={{
          backgroundColor: `#${color}`,
        }}
        variant="faded"
        {...(getLabelProps() as any)}
      >
        {isSelected && (
          <FaCheck color={color === "FFFFFF" ? "black" : "white"} />
        )}
      </Chip>
    </label>
  );
};

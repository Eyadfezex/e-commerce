import { useCheckbox, Chip, VisuallyHidden, tv } from "@nextui-org/react";
import React from "react";
import { FaCheck } from "react-icons/fa6";

/**
 * A custom checkbox component that displays a colored checkbox using the NextUI Chip component.
 * It supports default selection and visual feedback when checked.
 *
 * @param {Object} props - The properties for the checkbox component.
 * @param {string} props.color - The color to apply to the checkbox.
 * @param {boolean} [props.defaultSelected=false] - Whether the checkbox is selected by default.
 *
 * @returns {JSX.Element} A styled checkbox component.
 */
interface COLORProps {
  color: string;
  defaultSelected?: boolean;
}

export const ColorCheckBox = ({
  color,
  defaultSelected = false,
}: COLORProps) => {
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
      base: "border-default hover:bg-default-200 rounded-full flex items-center justify-center px-2 py-4 ",
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
          backgroundColor: `${color}`,
        }}
        variant="faded"
        {...(getLabelProps() as any)}
      >
        {isSelected && (
          <FaCheck color={color === "#FFFFFF" ? "black" : "white"} />
        )}
      </Chip>
    </label>
  );
};

interface SizeProps {
  /**
   * The content to display inside the checkbox, such as text or icons.
   *
   * @type {React.ReactNode}
   */
  children?: React.ReactNode;

  /**
   * Determines if the checkbox is selected by default.
   *
   * @type {boolean}
   * @default false
   */
  defaultSelected?: boolean;

  /**
   * The value associated with the checkbox, used for form submission or identification.
   *
   * @type {string}
   */
  value: string;
}

const checkbox = tv({
  slots: {
    base: "hover:bg-default-200 border-0 px-2 py-4",
    content: "text-default-500",
  },
  variants: {
    isSelected: {
      true: {
        base: "bg-black hover:bg-zinc-800 hover:border-primary-500",
        content: "text-primary-foreground ",
      },
    },
    isFocusVisible: {
      true: {
        base: "outline-none ring-2 ring-focus ring-offset-2 ring-offset-background",
      },
    },
  },
});

/**
 * A customizable checkbox component that renders a styled checkbox with a label.
 * The checkbox is visually hidden, but can be interacted with and controlled via props.
 *
 * @component
 * @param {Props} props - The properties for the checkbox component.
 * @returns {JSX.Element} A visually hidden checkbox with a styled label.
 */
export const SizeCheckBox = ({ ...props }: SizeProps) => {
  const {
    children,
    isSelected,
    isFocusVisible,
    getBaseProps,
    getLabelProps,
    getInputProps,
  } = useCheckbox({
    ...props,
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
        variant="faded"
        {...(getLabelProps() as any)}
      >
        {children}
      </Chip>
    </label>
  );
};

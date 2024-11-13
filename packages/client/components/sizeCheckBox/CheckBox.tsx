import { useCheckbox, Chip, VisuallyHidden, tv } from "@nextui-org/react";

interface Props {
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
export const CheckBox = ({ ...props }: Props) => {
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

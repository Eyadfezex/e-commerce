import { useCheckbox, Chip, VisuallyHidden, tv } from "@nextui-org/react";

interface Props {
  children?: React.ReactNode;
  defaultSelected?: boolean;
  value: any;
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
    <label {...getBaseProps()}>
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

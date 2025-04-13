interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  extraClasses?: string;
}

const Button = ({ children, extraClasses = "", ...props }: ButtonProps) => {
  return (
    <button
      className={
        "flex gap-2 items-center bg-secondary justify-center text-primary px-4 py-2 hover:bg-tertiary w-fit cursor-pointer border rounded-lg disabled:cursor-not-allowed " +
        extraClasses
      }
      {...props}
    >
      {children}
    </button>
  );
};

export const IconButton = ({
  children,
  extraClasses = "",

  ...props
}: ButtonProps) => {
  return (
    <Button extraClasses={"!p-0 !w-10 !h-10 " + extraClasses} {...props}>
      {children}
    </Button>
  );
};

export default Button;

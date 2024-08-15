import { forwardRef } from "react";

interface ButtonOptions {}

type Ref = HTMLButtonElement;

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  ButtonOptions;

const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
  const { type = "button", className = "", children, ...rest } = props;
  const defaultClasses =
    " focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none ";
  return (
    <button
      ref={ref}
      className={`${defaultClasses} ${className}`}
      {...rest}
      type={type}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
export default Button;

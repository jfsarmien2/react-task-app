import React, { ButtonHTMLAttributes, Children } from "react";
import Spinner from "./Spinner";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "normal" | "outline" | "custom" | "modalSaveBtn" | "modalCancelBtn";
  size?: "big" | "medium" | "small";
  secondary?: boolean;
  active?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

const CustomButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      secondary,
      loading = false,
      disabled = false,
      ...rest
    } = props;
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={`py-2 px-9 rounded-full flex justify-center items-center gap-1
      ${
        secondary
          ? "bg-pink-400 hover:bg-pink-500"
          : "bg-blue-400 hover:bg-blue-500"
      }   text-white ${disabled && "cursor-not-allowed bg-transparent"}`}
        {...rest}
      >
        {loading && <Spinner />}
        {children}
      </button>
    );
  }
);
CustomButton.displayName = "Button";
export default CustomButton;

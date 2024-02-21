import React, { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type?: string;
  className?: string;
  disabled?: boolean;
  error?: string;
  placeholder?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { name, value, type, className, disabled, error, placeholder, ...rest },
    ref
  ) => {
    return (
      <>
        <input
          id={name}
          name={name}
          ref={ref}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          className={`flex-1 bg-transparent border-2 px-3 py-1 border-gray-200 focus:outline-none focus:border-blue-200  rounded-full ${className}`}
          {...rest}
        />
        {error && (
          <p className='my-1 text-xs text-red-500 text-start'>{error}</p>
        )}
      </>
    );
  }
);

export default Input;

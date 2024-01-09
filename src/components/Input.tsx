type InputProps = {
  name: string;
  value?: string;
  type?: string;
  onChange?: (e: any) => void;
  className?: string;
  onKeyDown?: (e: any) => void;
  disabled?: boolean;
};

const Input = ({
  name,
  value,
  type = "text",
  onChange,
  className,
  onKeyDown,
  disabled,
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={name}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      disabled={disabled}
      className={`flex-1 bg-transparent border-2 px-3 py-1 border-gray-200 focus:outline-none focus:border-blue-200  rounded-full ${className}`}
    />
  );
};

export default Input;

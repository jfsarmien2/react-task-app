import Spinner from "./Spinner";

type Props = {
  text?: string;
  className?: string;
  secondary?: boolean;
  onClick?: () => void;
  loading?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
};

const Button = ({
  text = "Button",
  className,
  secondary,
  onClick,
  loading,
  type,
}: Props) => {
  return (
    <button
      type={type}
      className={`py-2 px-9 rounded-full flex justify-center items-center gap-5
       ${
         secondary
           ? "bg-pink-400 hover:bg-pink-500"
           : "bg-blue-400 hover:bg-blue-500"
       }   text-white ${loading && "cursor-not-allowed"} ${className}`}
      disabled={loading}
    >
      {loading && <Spinner />}
      {text}
    </button>
  );
};

export default Button;

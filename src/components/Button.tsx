import Spinner from "./Spinner";

type Props = {
  text?: string;
  className?: string;
  secondary?: boolean;
  onClick?: () => void;
  loading?: boolean;
};

const Button = ({
  text = "Button",
  className,
  secondary,
  onClick,
  loading = false,
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-9 rounded-full flex justify-center items-center gap-1
      transition-all
       ${
         secondary
           ? "bg-pink-400 hover:bg-pink-500"
           : "bg-blue-400 hover:bg-blue-500"
       }   text-white ${className}`}
      disabled={loading}
    >
      {loading && <Spinner />}
      {text}
    </button>
  );
};

export default Button;

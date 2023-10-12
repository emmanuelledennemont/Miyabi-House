import clsx from "clsx";

interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "beige";
}

export const Spinner = ({ size = "md", variant = "primary" }: SpinnerProps) => {

  let sizeStyle: string = "", variantStyle: string = "";

  switch (size) {
    case "sm":
      sizeStyle = "w-6 h-6";
      break;
    case "md": // default
      sizeStyle = "w-8 h-8";
      break;
    case "lg":
      sizeStyle = "w-10 h-10";
      break;
  }

  switch (variant) {
    case "primary": // default
      variantStyle = "text-primary";
      break;
    case "secondary":
      variantStyle = "text-secondary";
      break;
    case "beige":
      variantStyle = "text-beige";
      break;
  }

  return (
    <svg role='spinner' className={clsx(sizeStyle, variantStyle, "animate-spin")} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
      <path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" className="opacity-75" fill="currentColor" />
    </svg>
  );

}
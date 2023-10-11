import clsx from "clsx";

interface ButtonProps {
  variant?: "primary" | "secondary" | "beige" | "outline" | "disabled" | "link";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
  children?: React.ReactNode;
}
export const Button = ({ variant = "primary", size = "md", disabled, isLoading, className, children }: ButtonProps) => {

  let variantStyle: string = "", sizeStyle: string = "";

  switch (variant) {
    case "primary": // default
      variantStyle = "bg-primary hover:bg-primary-200 text-beige rounded";
      break;
    case "secondary":
      variantStyle = "bg-secondary hover:bg-secondary-300 text-beige rounded";
      break;
    case "beige":
      variantStyle = "bg-beige hover:bg-secondary-300/20 border boder-secondary text-secondary rounded";
      break;
    case "outline":
      variantStyle = "bg-primary-100 border border-primary-300 text-primary rounded";
      break;
    case "disabled":
      variantStyle = "bg-gray-200 border border-primary-300/50 text-primary rounded cursor-not-allowed";
      break;
    case "link":
      variantStyle = "bg-transparent text-primary";
      break;
  }

  switch (size) {
    case "sm":
      sizeStyle = "px-[32px] py-[10px] text-captation3 font-medium";
      break;
    case "md": // default
      sizeStyle = "px-[40px] py-[13px] text-caption2 font-medium";
      break;
    case "lg":
      sizeStyle = "px-[48px] py-[15px] text-caption1 font-medium";
      break;
  }

  return (
    <>
      <button type="button" className={clsx(variantStyle, sizeStyle, "")} onClick={() => console.log('click')} disabled={disabled}>
        {children}
      </button>
    </>
  )
} 
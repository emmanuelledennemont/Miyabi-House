import clsx from "clsx";

interface ButtonProps {
  variant?: "primary" | "secondary" | "beige" | "outline" | "disabled" | "icon";
  size?: "xs" | "sm" | "md" | "lg";
  disabled?: boolean;
  isLoading?: boolean;
  icon?: any;
  icontheme?: "primary" | "secondary" | "beige";
  className?: string;
  children?: React.ReactNode;
}
export const Button = ({ variant = "primary", size = "md", icon, icontheme = "primary", disabled, isLoading, className, children }: ButtonProps) => {

  let variantStyle: string = "", sizeStyle: string = "", iconSize: number = 0;

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
    case "icon":
      variantStyle = "bg-transparent border text-primary rounded-full";
      break;
  }

  switch (size) {
    case "xs":
      sizeStyle = "w-10 h-10 text-caption4 font-medium";
      break;
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
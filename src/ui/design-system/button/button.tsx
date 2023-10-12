import { IconProps } from "@/types/iconProps";
import clsx from "clsx";

interface ButtonProps {
  variant?: "primary" | "secondary" | "beige" | "outline" | "disabled" | "icon";
  size?: "xs" | "sm" | "md" | "lg";
  disabled?: boolean;
  isLoading?: boolean;
  icon?: IconProps;
  icontheme?: "primary" | "secondary" | "beige" | "outline" | "social";
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
      if (icontheme === "primary") {
        variantStyle = "bg-primary hover:bg-primary-200 text-beige rounded-full";
      }
      if (icontheme === "secondary") {
        variantStyle = "bg-secondary hover:bg-secondary-300 text-beige rounded-full";
      }
      if (icontheme === "beige") {
        variantStyle = "bg-beige hover:bg-primary-300/20 border boder-primary text-primary rounded-full";
      }
      if (icontheme === "outline") {
        variantStyle = "bg-transparent text-primary";
      }
      if (icontheme === "social") {
        variantStyle = "bg-tranparent hover:bg-primary-200/20 border border-beige text-beige rounded-full";
      }
      break;
  }

  switch (size) {
    case "sm":
      sizeStyle = `text-captation3 font-medium ${variant === "icon" ? "flex items-center justify-center w-[40px] h-[40px]" : "px-[32px] py-[11px]"}`;
      iconSize = 24;
      break;
    case "md": // default
      sizeStyle = `text-caption2 font-medium ${variant === "icon" ? "flex items-center justify-center w-[50px] h-[50px]" : "px-[40px] py-[13px]"}`;
      iconSize = 28;
      break;
    case "lg":
      sizeStyle = `text-caption1 font-medium ${variant === "icon" ? "flex items-center justify-center w-[60px] h-[60px]" : "px-[48px] py-[15px]"} `;
      iconSize = 32;
      break;
  }

  return (
    <>
      <button type="button" className={clsx(variantStyle, sizeStyle, iconSize, "")} onClick={() => console.log('click')} disabled={disabled}>
        {icon && variant === "icon" ? <icon.icon size={iconSize} /> : <>{children}</>}
      </button>

    </>
  )
} 
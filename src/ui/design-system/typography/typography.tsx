import clsx from "clsx";

interface TypographyProps {
  variant?: "display" | "h1" | "h2" | "h3" | "h4" | "h5" | "lead" | "body-base" | "body-lg" | "body-sm" | "caption" | "caption-1" | "caption-2" | "caption-3" | "caption-4";
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "div" | "span" | "p" | "label" | "caption";
  text?: "beige" | "primary" | "secondary";
  weight?: "light" | "regular" | "medium" | "bold";
  className?: string;
  children: React.ReactNode;
}

export const Typography = ({ variant = "h3", children, component: Component = "div", text = "primary", className, weight = "regular" }: TypographyProps) => {

  let variantStyle: string = "", colorStyle: string = "";

  switch (variant) {
    case "display":
      variantStyle = "text-8xl";
      break;
    case "h1":
      variantStyle = "text-8xl";
      break;
    case "h2":
      variantStyle = "text-3xl";
      break;
    case "h3":
      variantStyle = "text-xl";
      break;
    case "lead":
      variantStyle = "text-lg";
      break;
    case "body-lg":
      variantStyle = "text-lg";
      break;
    case "body-base": // default
      variantStyle = "text-base";
      break;
    case "caption-1":
      variantStyle = "text-caption1";
      break;
    case "caption-2":
      variantStyle = "text-caption2";
      break;
    case "caption-3":
      variantStyle = "text-caption3";
      break;
    case "caption-4":
      variantStyle = "text-caption4";
      break;
  }

  switch (text) {
    case "beige":
      colorStyle = "text-beige";
      break;
    case "primary": // default
      colorStyle = "text-primary";
      break;
    case "secondary":
      colorStyle = "text-secondary";
      break;
  }

  return (
    <>
      <Component className={clsx(variantStyle, colorStyle, weight === "medium" && "font-medium", className)}>{children}</Component>
    </>
  )
}
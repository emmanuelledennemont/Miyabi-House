import clsx from "clsx";

interface TypographyProps {
  variant?: "display" | "h1" | "h2" | "h3" | "h4" | "h5" | "lead" | "body-base" | "body-lg" | "body-sm" | "caption" | "caption-1" | "caption-2" | "caption-3" | "caption-4";
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "div" | "span" | "p" | "label" | "caption";
  text?: "black" | "white" | "dark-blue" | "gray" | "primary" | "secondary";
  weight?: "light" | "regular" | "medium" | "bold";
  className?: string;
  children: React.ReactNode;
}

export const Typography = ({ variant = "h3", children, component: Component = "div", text = "dark-blue", className, weight = "regular" }: TypographyProps) => {

  let variantStyle: string = "";
  switch (variant) {
    case "display":
      variantStyle = "text-red-500";
      break;

    case "h1":
      variantStyle = "text-green-500";
      break;
  }

  return (
    <>
      <Component className={clsx(variantStyle, weight === "medium" && "font-medium", className)}>{children}</Component>
    </>
  )
}
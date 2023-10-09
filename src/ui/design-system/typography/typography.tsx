interface TypographyProps {
  variant?: "display" | "h1" | "h2" | "h3" | "h4" | "h5" | "lead" | "body-base" | "body-lg" | "body-sm" | "caption" | "caption-1" | "caption-2" | "caption-3" | "caption-4";
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "div" | "span" | "p" | "label" | "caption";
  children: React.ReactNode;
}

export const Typography = ({ variant, children, component }: TypographyProps) => {
  return (
    <>
      <div>{children}</div>
    </>
  )
}
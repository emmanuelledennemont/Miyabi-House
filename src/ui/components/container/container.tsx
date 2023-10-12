import clsx from "clsx";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={clsx("w-full max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8", className)}>{children}</div>
  );
};
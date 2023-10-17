import { Footer } from "../navigation/footer";
import { Navigation } from "../navigation/navigation";

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}
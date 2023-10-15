import { Logo } from "@/ui/design-system/logo/logo";
import { Container } from "../container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import { Button } from "@/ui/design-system/button/button";
import { ActiveLink } from "./active-link";

interface NavigationProps {
}

export const Navigation = ({ }: NavigationProps) => {

  return (

    <div className="border-b-2 border-beigebg-200 flex">
      <Container className="mx-auto max-w-10xl px-0 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap py-8 my-0">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0 flex items-center">
          <Logo size='md' />
        </div>

        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap py-4 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0 justify-center">
          <Typography variant="caption-3" className="mx-auto flex items-center gap-10 px-4 cursor-pointer">
            <ActiveLink href="/">Home</ActiveLink>
            <ActiveLink href="/designsystem">Menu</ActiveLink>
            <ActiveLink href="/about">About</ActiveLink>
            <ActiveLink href="/sessions">Sessions</ActiveLink>
          </Typography>
        </div>

        <div className="sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end gap-3 justify-center">
          <Button size="sm" className="inline-flex justify-center">Order Now</Button>
        </div>
      </Container>
    </div>

  );
}
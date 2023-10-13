import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Typography } from "@/ui/design-system/typography/typography";
import { AiOutlineUser } from "react-icons/ai";
import { homeAppLink } from "./app-links";
import { v4 as uuidv4 } from 'uuid';
import { ActiveLink } from "./active-link";
import { link } from "fs";

export const Footer = () => {

  const currentYear = new Date().getFullYear();

  const navigationLinks = homeAppLink.map((link) => (
    <div key={uuidv4()}>{link.label}</div>

  ));

  return (
    <>
      <div className="bg-primary pt-[80px]">
        <Container className="flex justify-between pt-1">
          <div className="flex flex-col items-center">
            <Logo size='lg' variant='beigebg' />
          </div>
          <div className="">
            <FooterLink />
          </div>
        </Container>
        <Container className="pt-9 pb-11 space-y-10">
          <hr className="text-beigebg-200/40" />
          <div className="footer__attribution text-primary-100/30 flex items-center justify-between">
            <Typography variant="caption-4" className="flex items-center gap-10 px-4 cursor-pointer  text-primary-100/30 ">
              Coded by Manue  |  @{currentYear} - Miyabi House. All Rights Reserved
            </Typography>
            <div className="flex flex-row gap-2">
              <Button size='md' variant='icon' icon={{ icon: AiOutlineUser }} icontheme='social' />
              <Button size='md' variant='icon' icon={{ icon: AiOutlineUser }} icontheme='social' />
              <Button size='md' variant='icon' icon={{ icon: AiOutlineUser }} icontheme='social' />
              <Button size='md' variant='icon' icon={{ icon: AiOutlineUser }} icontheme='social' />
            </div>
          </div>

        </Container >
      </div >
    </>
  );

};

const FooterLink = () => {

  const linkList = homeAppLink.map((link) => (
    <div key={uuidv4()}>{link.type === "internal" && (
      <ActiveLink href={link.href}>{link.label}</ActiveLink>
    )}
      {link.type === "external" && (
        <a href={link.href} target="_blank">
          {link.label}
        </a>
      )}
    </div>

  ));

  return (
    <>
      <div className="min-w-[190px]">
        <Typography
          text="beigebg"
          variant="caption-2"
          weight="medium"
          className="pb-5"
        >   Titre
        </Typography>

        <Typography
          text="beigebg"
          variant="caption-3"
          className="space-y-4"
        >
          {linkList}
        </Typography>
      </div>
    </>
  );

}
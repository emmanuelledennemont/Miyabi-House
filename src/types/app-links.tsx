import { LinkType } from "@/lib/link-type";

export interface AppLinks {
  label: string;
  href: string;
  type: LinkType;
}

export interface FooterLinks {
  title: string;
  links: AppLinks[];
}
import { AppLinks } from "@/types/app-links";
import { title } from "process";

export const homeAppLink: AppLinks[] = [
  {
    label: 'Home',
    href: '/',
    type: 'internal'

  },

  {
    label: 'Menu',
    href: '/designsystem',
    type: 'internal'
  },

  {
    label: 'About',
    href: '/',
    type: 'internal'
  },

  {
    label: 'Sessions',
    href: '/',
    type: 'internal'
  },
]

export const menuAppLink: AppLinks[] = [
  {
    label: 'Sushi',
    href: '/',
    type: 'internal'

  },

  {
    label: 'Tempura',
    href: '/',
    type: 'internal'
  },

  {
    label: 'Ramen',
    href: '/',
    type: 'internal'
  },

  {
    label: 'Ochi',
    href: '/',
    type: 'internal'
  },

  {
    label: 'Specialities',
    href: '/',
    type: 'internal'
  },

  {
    label: 'Sake',
    href: '/',
    type: 'internal'
  },

  {
    label: 'Mochi',
    href: '/',
    type: 'internal'
  },
]

const aboutAppLink: AppLinks[] = [
  {
    label: 'Sushi',
    href: '/',
    type: 'internal'
  },

  {
    label: 'Tempura',
    href: '/',
    type: 'internal'
  },

  {
    label: 'Ramen',
    href: '/',
    type: 'internal'
  },

  {
    label: 'Ochi',
    href: '/',
    type: 'internal'
  },

  {
    label: 'Specialities',
    href: '/',
    type: 'internal'
  },

  {
    label: 'Sake',
    href: '/',
    type: 'internal'
  },

  {
    label: 'Mochi',
    href: '/',
    type: 'internal'
  },
]

const sessionsAppLink: AppLinks[] = [
  {
    label: 'Sushi',
    href: '/',
    type: 'internal'

  },

  {
    label: 'Tempura',
    href: '/',
    type: 'internal'
  },

  {
    label: 'Ramen',
    href: '/',
    type: 'internal'
  },

  {
    label: 'Ochi',
    href: '/',
    type: 'internal'
  },

  {
    label: 'Specialities',
    href: '/',
    type: 'internal'
  },

  {
    label: 'Sake',
    href: '/',
    type: 'internal'
  },

  {
    label: 'Mochi',
    href: '/',
    type: 'internal'
  },
]

const socialAppLink: AppLinks[] = [
  {
    label: 'Twitter',
    href: 'https://twitter.com/?lang=fr',
    type: 'external'

  },

  {
    label: 'Facebook',
    href: 'https://www.facebook.com/',
    type: 'external'
  },

  {
    label: 'Instagram',
    href: 'https://www.instagram.com/?hl=fr',
    type: 'external'
  },

  {
    label: 'Github',
    href: 'https://github.com',
    type: 'external'
  },
]

export const footerLinks = [
  {
    title: 'App',
    links: homeAppLink,
  },

  {
    title: 'Menu',
    links: menuAppLink,
  },
  {
    title: 'About',
    links: aboutAppLink,
  },

  {
    title: 'Sessions',
    links: sessionsAppLink,
  },

  {
    title: 'Social',
    links: socialAppLink,
  },
]

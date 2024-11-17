import { IRoute } from '@nx-next-js-micro/components';

export const ROUTES: IRoute[] = [
  { href: '/', name: 'Home' },
  { href: '/tech-and-tool', name: 'Tech & Tool' },
  // { href: '/about-me', name: 'About Me' },
  { href: '/contact', name: 'Contact' },
] as const;

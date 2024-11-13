import { IRoute } from '@nx-next-js-micro/components';

export const ROUTES: IRoute[] = [
  { href: '/', name: 'Home' },
  { href: '/tech-stack', name: 'Tech Stack' },
  { href: '/contact', name: 'Contact' },
] as const;

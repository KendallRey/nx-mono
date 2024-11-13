import { IRoute } from '@nx-next-js-micro/components';

export const ROUTES: IRoute[] = [
  { href: '/', name: 'Home' },
  { href: '/project', name: 'Projects' },
  { href: '/contact', name: 'Contact' },
] as const;

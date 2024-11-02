'use client';

import {
  IRoute,
  MuiBox,
  MuiButton,
  MuiPaper,
  MuiTypography,
} from '@nx-next-js-micro/components';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useCallback } from 'react';

type IFixedNavigation = {
  logo?: React.ReactNode;
  routes: IRoute[];
} & React.ComponentProps<'nav'>;

export const FixedNavigation: React.FC<IFixedNavigation> = (props) => {
  const { logo, routes, className, ...otherProps } = props;

  const pathname = usePathname();

  const isActiveLink = useCallback(
    (link: string) => {
      if (pathname === '/' && link === '/') return true;
      else if (link === '/') return false;
      else return pathname.startsWith(link);
    },
    [pathname]
  );

  return (
    <nav
      className={`fixed z-[1200] p-4 gap-4 top-0 left-0 right-0 flex ${
        logo ? 'justify-between' : 'justify-end'
      } ${className || ''} bg-neutral-900 bg-opacity-30`}
      {...otherProps}
    >
      {logo}
      <div className="flex items-center gap-12">
        {routes.map((route) => {
          const active = isActiveLink(route.href);
          return (
            <Link
              key={route.href}
              href={route.href}
              className={`${
                active
                  ? `${route.activeClassName || 'text-black'}`
                  : `${route.className || 'text-white'}`
              }`}
            >
              <MuiTypography fontSize={18}>{route.name}</MuiTypography>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

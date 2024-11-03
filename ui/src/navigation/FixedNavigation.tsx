'use client';

import { IRoute, MuiBox, MuiTypography } from '@nx-next-js-micro/components';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';

type IFixedNavigation = {
  logo?: React.ReactNode;
  routes: IRoute[];
  linkClassName?: string;
  activeClassName?: string;
  className?: string;
};

export const FixedNavigation: React.FC<IFixedNavigation> = (props) => {
  const {
    logo,
    routes,
    className,
    activeClassName,
    linkClassName,
    ...otherProps
  } = props;

  const pathname = usePathname();

  const [isTop, setIsTop] = useState(window.scrollY === 0);

  useEffect(() => {
    const handleScroll = () => setIsTop(window.scrollY === 0);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActiveLink = useCallback(
    (link: string) => {
      if (pathname === '/' && link === '/') return true;
      else if (link === '/') return false;
      else return pathname.startsWith(link);
    },
    [pathname]
  );

  return (
    <MuiBox
      className={`fixed z-[1200] p-4 gap-4 top-0 left-0 right-0 flex ${
        logo ? 'justify-between' : 'justify-end'
      } ${className || ''} ${isTop ? '' : 'bg-neutral-900'} bg-opacity-30`}
      style={{
        transition: 'background 0.3s ease',
      }}
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
                  ? `${activeClassName || ''} ${
                      route.activeClassName || 'text-black'
                    }`
                  : `${linkClassName || ''} ${route.className || 'text-white'}`
              }`}
            >
              <MuiTypography fontSize={18}>{route.name}</MuiTypography>
            </Link>
          );
        })}
      </div>
    </MuiBox>
  );
};

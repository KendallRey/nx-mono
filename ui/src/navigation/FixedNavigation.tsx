'use client';

import {
  getEnvArrayValue,
  IRoute,
  MuiBox,
  MuiTooltip,
  MuiTypography,
} from '@nx-next-js-micro/components';
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

  const underDevelopmentRoutes = getEnvArrayValue(
    process.env.NEXT_PUBLIC_UNDER_DEVELOPMENT_ROUTES
  );

  const [isTop, setIsTop] = useState(
    typeof window !== 'undefined' ? window.scrollY === 0 : true
  );

  useEffect(() => {
    const handleScroll = () =>
      setIsTop(typeof window !== 'undefined' ? window.scrollY === 0 : true);
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
      className={`fixed z-[1200] top-0 left-0 right-0 ${
        isTop ? '' : 'bg-neutral-900'
      } bg-opacity-30`}
      style={{
        transition: 'background 0.3s ease',
      }}
    >
      <div
        className={`mx-auto p-4 gap-4 flex ${
          logo ? 'justify-between' : 'justify-end'
        } ${className || ''}`}
        {...otherProps}
      >
        {logo}
        <div className="flex items-center gap-12">
          {routes.map((route) => {
            const active = isActiveLink(route.href);
            const isUnderDevelopment = underDevelopmentRoutes?.includes(
              route.href.replace('/', '')
            );
            return (
              <MuiTooltip 
                key={route.href}
                title={isUnderDevelopment ? 'Under Development' : ''}
                arrow
              >
                <Link
                  href={isUnderDevelopment ? '' : route.href}
                  className={`${
                    isUnderDevelopment
                      ? 'text-neutral-400'
                      : active
                      ? `${activeClassName || ''} ${
                          route.activeClassName || 'text-black'
                        }`
                      : `${linkClassName || ''} ${
                          route.className || 'text-white'
                        }`
                  }`}
                >
                  <MuiTypography fontSize={18}>{route.name}</MuiTypography>
                </Link>
              </MuiTooltip>
            );
          })}
        </div>
      </div>
    </MuiBox>
  );
};

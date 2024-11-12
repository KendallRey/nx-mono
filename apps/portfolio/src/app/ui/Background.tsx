'use client';

import { MuiBox, MuiTypography } from '@nx-next-js-micro/components';
import React, { ReactNode } from 'react';

type IBackground = {
  mode?: 'light' | 'dark';
};

const Background: React.FC<IBackground> = ({ mode }) => {
  return (
    <MuiBox
      className="absolute inset-0 overflow-hidden"
      style={{ pointerEvents: 'none' }}
    >
      <MuiBox className="mx-6 my-12 md:mx-12">
        <MuiTypography
          className={`${
            mode === 'dark' ? '!text-neutral-700' : '!text-white'
          } !text-[70px] sm:!text-[120px] md:!text-[150px] lg:!text-[200px]`}
        >
          KENDALL
        </MuiTypography>
        <MuiTypography
          className={`${
            mode === 'dark' ? '!text-neutral-800' : '!text-neutral-300'
          } !text-[55px] sm:!text-[90px] md:!text-[100px] lg:!text-[150px]`}
          sx={{ lineHeight: 0.1 }}
        >
          REY
        </MuiTypography>
        <AngledText darkShade={950} lightShade={800} mode={mode}>
          MOZO
        </AngledText>
        <AngledText darkShade={800} lightShade={700} mode={mode} offset={10}>
          MOZO
        </AngledText>
      </MuiBox>
    </MuiBox>
  );
};

export default Background;

// #region Angled Text

type IAngledText = {
  mode?: 'light' | 'dark';
  children: ReactNode;
  rotate?: number;
  offset?: number;
  darkShade: number;
  lightShade: number;
};

const AngledText: React.FC<IAngledText> = (props) => {
  const { mode, children, rotate, offset, darkShade, lightShade } = props;
  return (
    <div
      className={`!bottom-[-1${offset ?? 0}px] md:!bottom-[-3${
        offset ?? 0
      }px] lg:!bottom-[-4${50 + (offset ?? 0)}px]`}
      style={{
        position: 'absolute',
        right: offset ?? 0,
        transform: `rotate(${rotate ?? 90}deg)`,
        transformOrigin: 'top right',
      }}
    >
      <MuiTypography
        className={`${
          mode === 'dark'
            ? `!text-neutral-${darkShade}`
            : `!text-neutral-${lightShade}`
        } !text-[100px] sm:!text-[150px] md:!text-[200px] lg:!text-[250px] xl:!text-[300px]`}
      >
        {children}
      </MuiTypography>
    </div>
  );
};

// #endregion

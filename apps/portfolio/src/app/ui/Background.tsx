'use client';

import { MuiBox, MuiTypography } from '@nx-next-js-micro/components';
import React from 'react';

type IBackground = {
  mode?: 'light' | 'dark';
};

const Background: React.FC<IBackground> = ({ mode }) => {
  return (
    <MuiBox className="absolute inset-0 overflow-hidden">
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
        <div
          className={'!bottom-[-100px] md:!bottom-[-300px] lg:!bottom-[-450px]'}
          style={{
            position: 'absolute',
            right: 0,
            transform: 'rotate(90deg)',
            transformOrigin: 'top right',
          }}
        >
          <MuiTypography
            className={`${
              mode === 'dark' ? '!text-neutral-950' : '!text-neutral-800'
            } !text-[100px] sm:!text-[150px] md:!text-[200px] lg:!text-[250px] xl:!text-[300px]`}
          >
            MOZO
          </MuiTypography>
        </div>
      </MuiBox>
    </MuiBox>
  );
};

export default Background;

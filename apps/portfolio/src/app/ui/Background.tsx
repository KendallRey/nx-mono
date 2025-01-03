'use client';

import React, { ReactNode } from 'react';

type IBackground = {
  mode?: 'light' | 'dark';
};

const Background: React.FC<IBackground> = ({ mode }) => {
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{ pointerEvents: 'none' }}
    >
      <div className="mx-6 my-8 md:mx-12">
        <h1
          className={`${
            mode === 'dark' ? 'text-neutral-700' : 'text-white'
          } text-[70px] sm:text-[70px] md:text-[100px] lg:text-[150px]`}
        >
          KENDALL
        </h1>
        <h2
          className={`${
            mode === 'dark' ? 'text-neutral-800' : 'text-neutral-300'
          } text-[55px] sm:text-[50px] md:text-[80px] lg:text-[100px]`}
          style={{ lineHeight: 0.1 }}
        >
          REY
        </h2>
        <h2
          className={`${
            mode === 'dark' ? 'text-neutral-800' : 'text-neutral-300'
          } text-[55px] sm:text-[70px] md:text-[80px] lg:text-[130px]`}
        >
          MOZO
        </h2>
      </div>
    </div>
  );
};

export default Background;

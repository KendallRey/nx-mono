'use client';

import { TextRoller, useAppMediaQuery } from '@nx-next-js-micro/components';
import { APP } from 'apps/portfolio/constants/APP';
import React from 'react';

const TEMP = [
  'dev',
  'lazy',
  'playing',
  'coding',
  'studying',
  'motivated',
  'curious',
  'dumb',
  'proud',
  'eager',
  "things aren't working",
  'fixing',
  'wondering',
  'lost',
  'on track',
  'late',
  'ahead',
  'confused',
  'procrastinating',
  'searching',
  'dull',
  'sharp',
  'rafce',
  "somethin' stupid",
  'error',
  "i'll fix it later",
];

const Foreground = () => {
  const { md } = useAppMediaQuery();

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute right-0 z-[1] md:bottom-0 mx-6 my-12 md:mx-12">
        {Object.values(APP.TECHS).map((tech) => (
          <p key={tech} className="!text-neutral-700 text-end">
            {tech}
          </p>
        ))}
      </div>
      <div className="absolute bottom-0 m-2 md:m-12">
        <div className="text-[30px] text-neutral-500">Sometimes</div>
        <TextRoller
          values={TEMP}
          fontSize={md ? 40 : 20}
          height={md ? 50 : 30}
          className="text-neutral-300 font-bold"
        />
      </div>
    </div>
  );
};

export default Foreground;

'use client';

import React from 'react';
import {
  BASIC_TECH_STACKS,
  SUB_TECH_STACKS,
  TECH_STACKS,
} from '../../content/TECHSTACK';
import Card from 'apps/portfolio/components/TechTool/Card';
import { MuiTypography } from '@nx-next-js-micro/components';

const TechAndToolPage = () => {
  return (
    <div className="my-24 px-0 md:px-4 flex flex-col gap-6 text-neutral-300 max-w-[1400px] mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {TECH_STACKS.map((tech) => (
          <Card key={tech.name} {...tech} />
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {SUB_TECH_STACKS.map((tech) => (
          <Card key={tech.name} {...tech} />
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {BASIC_TECH_STACKS.map((tech) => (
          <Card key={tech.name} {...tech} />
        ))}
      </div>
      <div className="fixed right-[20px] bottom-[10px] bg-neutral-900">
        <MuiTypography>This page is under development</MuiTypography>
      </div>
    </div>
  );
};

export default TechAndToolPage;

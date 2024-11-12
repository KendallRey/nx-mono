import { MuiBox, MuiTypography } from '@nx-next-js-micro/components';
import { APP } from 'apps/portfolio/constants/APP';
import React from 'react';

const Foreground = () => {
  return (
    <MuiBox className="absolute inset-0 overflow-hidden">
      <MuiBox className="absolute bottom-0 mx-6 my-12 md:mx-12">
        {Object.values(APP.TECHS).map((tech) => (
          <MuiTypography key={tech}>- {tech}</MuiTypography>
        ))}
      </MuiBox>
    </MuiBox>
  );
};

export default Foreground;

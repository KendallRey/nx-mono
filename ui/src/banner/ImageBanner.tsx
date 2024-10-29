import { ILayout, MuiBox, IMuiBox } from '@nx-next-js-micro/components';
import React from 'react';

type IImageBanner = {
  imageUrl: string;
} & IMuiBox;

export const ImageBanner: React.FC<IImageBanner> = (props) => {
  const { children, className, imageUrl, ...otherProps } = props;
  return (
    <MuiBox
      className={`${className || ''} h-screen`}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: 'bottom center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
      {...otherProps}
    >
      {children}
    </MuiBox>
  );
};

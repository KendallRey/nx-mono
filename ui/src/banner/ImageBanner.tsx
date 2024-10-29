import { MuiBox } from '@nx-next-js-micro/components';
import React from 'react';

type IImageBanner = {
  imageUrl: string;
};

export const ImageBanner: React.FC<IImageBanner> = (props) => {
  const { imageUrl } = props;
  return (
    <MuiBox
      className="h-full"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    ></MuiBox>
  );
};

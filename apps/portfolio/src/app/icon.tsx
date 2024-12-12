import { ImageResponse } from 'next/og';
import { LOGO_SVG_2 } from '../content/Logo';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(<LOGO_SVG_2 width={'100%'} height={'100%'} />, {
    ...size,
  });
}

"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

type IResponsiveCarousel = {
  children: any[] | undefined;
};

export const ResponsiveCarousel: React.FC<IResponsiveCarousel> = ({ children }) => {
  return (
    <Carousel autoPlay width={"500px"}>
      {children}
    </Carousel>
  );
};

'use client';

import { RMarkdownEditor, MuiBox, MuiStack, MuiTypography } from "@nx-next-js-micro/components";
import { ImageBanner } from "@nx-next-js-micro/ui";
import { useState } from "react";
import SpaceSceneComponent from "ui/src/three-cannon/TCScene";

export default function HomePage() {

  const [value, setValue] = useState<string | undefined>('')

  return (
    <MuiBox className="h-screen">
      <ImageBanner imageUrl="/images/banner_2.png" className="grid items-center justify-center">
        <MuiStack>
          <MuiTypography color='white' fontSize={32}>Hello there,</MuiTypography>
          <MuiTypography color='white' fontSize={42}>KR here.</MuiTypography>
        </MuiStack>
      </ImageBanner>
      <RMarkdownEditor value={value} onChange={setValue} visible  height="500px"/>
      <MuiBox>1</MuiBox>
      <MuiBox>2</MuiBox>
      <MuiBox>3</MuiBox>
      <SpaceSceneComponent/>
    </MuiBox>
  );
}

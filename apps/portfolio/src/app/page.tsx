'use client';

import {
  RMarkdownEditor,
  MuiBox,
  MuiStack,
  MuiTypography,
} from '@nx-next-js-micro/components';
import { ImageBanner, ModelDisplay, TFCanvas } from '@nx-next-js-micro/ui';
import {
  AccumulativeShadows,
  Backdrop,
  Environment,
  RandomizedLight,
} from '@react-three/drei';
import { useState } from 'react';

export default function HomePage() {
  const [value, setValue] = useState<string | undefined>('');

  return (
    <MuiBox className="h-screen">
      <ImageBanner
        imageUrl="/images/banner_2.png"
        className="grid items-center justify-center"
      >
        <MuiStack>
          <MuiTypography color="white" fontSize={32}>
            Hello there,
          </MuiTypography>
          <MuiTypography color="white" fontSize={42}>
            KR here.
          </MuiTypography>
        </MuiStack>
      </ImageBanner>
      <RMarkdownEditor
        value={value}
        onChange={setValue}
        visible
        height="500px"
      />
      <TFCanvas
        shadows
        camera={{ position: [15, 15, 5], fov: 25, near: 1, far: 100 }}
      >
        <ModelDisplay
          path="assets/pc/home_pc_test_1.glb"
          props={{
            position: [1, 1.7, 1],
          }}
        />
        <AccumulativeShadows
          temporal
          frames={100}
          color="#171720"
          colorBlend={2}
          toneMapped={true}
          alphaTest={0.75}
          opacity={1}
          scale={18}
        >
          <RandomizedLight
            intensity={Math.PI}
            amount={8}
            radius={4}
            ambient={0.5}
            position={[5, 5, -10]}
            bias={0.001}
          />
        </AccumulativeShadows>
        <Backdrop
          receiveShadow
          scale={[30, 10, 10]}
          floor={6}
          position={[-10, -10, -10]}
        >
          <meshPhysicalMaterial roughness={1} color="#efefef" />
        </Backdrop>
        <Environment preset="city" />
      </TFCanvas>
    </MuiBox>
  );
}

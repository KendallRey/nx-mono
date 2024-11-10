'use client';

import { MuiBox, useAppGLTF } from '@nx-next-js-micro/components';
import { ModelDisplay, TFCanvas } from '@nx-next-js-micro/ui';
import {
  CameraControls,
  Environment,
  Fisheye,
  PerspectiveCamera,
} from '@react-three/drei';

type ScreenModelNames = 'screen_1' | 'screen_2' | 'screen_3' | 'screen_4';

export default function HomePage() {
  const { nodes } = useAppGLTF<ScreenModelNames>(
    'assets/pc/home_pc_test_4_pc_screens.glb'
  );

  return (
    <MuiBox className="h-screen">
      <TFCanvas flat>
        <Fisheye zoom={0}>
          <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.6} />
          <ambientLight intensity={Math.PI / 2} />
          <group>
            <ModelDisplay path="assets/pc/home_pc_test_4.glb" props={{}} />
            <mesh
              geometry={nodes.screen_1.geometry}
              position={nodes.screen_1.position}
              rotation={nodes.screen_1.rotation}
            />
            <mesh
              geometry={nodes.screen_2.geometry}
              position={nodes.screen_2.position}
              rotation={nodes.screen_2.rotation}
            />
            <mesh
              geometry={nodes.screen_3.geometry}
              position={nodes.screen_3.position}
              rotation={nodes.screen_3.rotation}
            />
            <mesh
              geometry={nodes.screen_4.geometry}
              position={nodes.screen_4.position}
              rotation={nodes.screen_4.rotation}
            />
          </group>
          <Environment preset="city" blur={1} />
          <PerspectiveCamera makeDefault position={[0, 0, 18.5]} />
        </Fisheye>
      </TFCanvas>
    </MuiBox>
  );
}

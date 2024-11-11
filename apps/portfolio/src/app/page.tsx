'use client';

import {
  MuiBox,
  useAppGLTF,
  useVideoTexture,
} from '@nx-next-js-micro/components';
import { ModelDisplay, TFCanvas } from '@nx-next-js-micro/ui';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { RepeatWrapping, Vector2 } from 'three';
import Background from './ui/Background';

type ScreenModelNames = 'screen_1' | 'screen_2' | 'screen_3' | 'screen_4';

const screenSize = new Vector2(1, -1.9);

export default function HomePage() {
  const { nodes } = useAppGLTF<ScreenModelNames>(
    'assets/pc/home_pc_test_4_pc_screens.glb'
  );

  const swordFastForward = useVideoTexture('assets/pc/sword_fast.mp4');
  const code = useVideoTexture('assets/pc/code.mp4');
  const unity = useVideoTexture('assets/pc/unity.mp4');
  const starrail = useVideoTexture('assets/pc/starrail.mp4');

  return (
    <MuiBox className="h-screen">
      <Background />
      <TFCanvas flat>
        <OrbitControls
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 1.6}
          autoRotate
        />
        <ambientLight intensity={4} />
        <group position={[0, -5, 0]}>
          <ModelDisplay path="assets/pc/home_pc_test_4.glb" props={{}} />
          <mesh
            geometry={nodes.screen_1.geometry}
            position={nodes.screen_1.position}
            rotation={nodes.screen_1.rotation}
          >
            <meshBasicMaterial toneMapped={false}>
              <videoTexture
                attach="map"
                args={[code]}
                repeat={screenSize}
                wrapS={RepeatWrapping}
                wrapT={RepeatWrapping}
              />
            </meshBasicMaterial>
          </mesh>
          <mesh
            geometry={nodes.screen_2.geometry}
            position={nodes.screen_2.position}
            rotation={nodes.screen_2.rotation}
          >
            <meshBasicMaterial toneMapped={false}>
              <videoTexture
                attach="map"
                args={[swordFastForward]}
                repeat={screenSize}
                wrapS={RepeatWrapping}
                wrapT={RepeatWrapping}
              />
            </meshBasicMaterial>
          </mesh>
          <mesh
            geometry={nodes.screen_3.geometry}
            position={nodes.screen_3.position}
            rotation={nodes.screen_3.rotation}
          >
            <meshBasicMaterial toneMapped={false}>
              <videoTexture
                attach="map"
                args={[starrail]}
                repeat={screenSize}
                wrapS={RepeatWrapping}
                wrapT={RepeatWrapping}
              />
            </meshBasicMaterial>
          </mesh>
          <mesh
            geometry={nodes.screen_4.geometry}
            position={nodes.screen_4.position}
            rotation={nodes.screen_4.rotation}
          >
            <meshBasicMaterial toneMapped={false}>
              <videoTexture
                attach="map"
                args={[unity]}
                repeat={screenSize}
                wrapS={RepeatWrapping}
                wrapT={RepeatWrapping}
              />
            </meshBasicMaterial>
          </mesh>
        </group>
        <PerspectiveCamera makeDefault position={[10, 13, 28.5]} />
      </TFCanvas>
    </MuiBox>
  );
}

import { useGLTF } from '@react-three/drei';
import {
  PrimitiveProps,
  useFrame,
  Canvas,
  CanvasProps,
} from '@react-three/fiber';
import { useEffect, useLayoutEffect, useRef } from 'react';
import * as THREE from 'three';

type ModelType = {
  path: string;
  props?: Omit<PrimitiveProps, 'object'>;
};

export const ModelDisplay = ({ path, props }: ModelType) => {
  const { scene, animations } = useGLTF(path);

  const mixer = useRef<THREE.AnimationMixer>();
  const actions = useRef<THREE.AnimationAction[]>([]);

  useLayoutEffect(() => {
    scene.traverse((obj) => {
      if ((obj as THREE.Mesh).isMesh) {
        const mesh = obj as THREE.Mesh;
        mesh.receiveShadow = true;
        mesh.castShadow = true;
      }
    });
  }, [scene]);

  useEffect(() => {
    mixer.current = new THREE.AnimationMixer(scene);
    const this_mixer = mixer.current;
    actions.current = animations.map((clip) => this_mixer.clipAction(clip));

    actions.current.forEach((action) => action.play());

    return () => {
      actions.current.forEach((action) => {
        action.stop();
        action.reset();
      });
    };
  }, [scene, animations]);

  useFrame((_, delta) => {
    if (!mixer.current) return;
    mixer.current.update(delta);
  });

  return <primitive object={scene} {...props} />;
};

type ITFCanvas = CanvasProps;

export const TFCanvas: React.FC<ITFCanvas> = (props) => {
  return <Canvas {...props} />;
};

import {
  useGLTF,
  PresentationControls,
  Stage,
  useAnimations,
} from '@react-three/drei';
import {
  PrimitiveProps,
  useFrame,
  Canvas,
  CanvasProps,
} from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

type ModelType = {
  path: string;
  props: Omit<PrimitiveProps, 'object'>;
};

export const ModelDisplay = ({ path, props }: ModelType) => {
  const { scene, animations } = useGLTF(path);

  const mixer = useRef<THREE.AnimationMixer>();
  const actions = useRef<THREE.AnimationAction[]>([]);

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

  useFrame((state, delta) => {
    if (!mixer.current) return;
    mixer.current.update(delta);
  });

  return (
    <PresentationControls
      global
      zoom={0.7}
      polar={[-1, Math.PI / 4]}
      speed={1.5}
    >
      <Stage shadows={false} environment={'city'}>
        <primitive object={scene} {...props} />
      </Stage>
    </PresentationControls>
  );
};

type ITFCanvas = CanvasProps;

export const TFCanvas: React.FC<ITFCanvas> = (props) => {
  return <Canvas {...props} />;
};

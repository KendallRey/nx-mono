// components/SpaceSceneComponent.js
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import CannonDebugger from 'cannon-es-debugger';
import { BlendFunction, DepthEffect, DepthOfFieldEffect, EffectComposer, EffectPass, RenderPass, SelectiveBloomEffect, TextureEffect } from 'postprocessing';
import SpaceScene from '../classes/space-scene';


const SpaceSceneComponent = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    if(!mountRef.current) return;
    // Set up renderer
    const renderer = new THREE.WebGLRenderer({ canvas: mountRef.current });
    renderer.shadowMap.enabled = true;
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Set up camera
    const mainCamera = new THREE.PerspectiveCamera(75, width / height, 0.1, 2000);

    // Set up world
    const world = new CANNON.World();
    world.gravity.set(0, -9.81, 0);

    // Set up scene
    const scene = new SpaceScene(mainCamera, world, width, height);
    scene.init();

    // Set up composer and effects
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, mainCamera));

    const effect = new SelectiveBloomEffect(scene, mainCamera, {
      blendFunction: BlendFunction.ADD,
      mipmapBlur: true,
      luminanceThreshold: 0,
      luminanceSmoothing: 0,
      intensity: 2,
      radius: 0.3,
    });

    const depthOfFieldEffect = new DepthOfFieldEffect(mainCamera, {
      focusDistance: 10,
      focalLength: 2,
      bokehScale: 0.2,
      height: 480
    });

    const cocTextureEffect = new TextureEffect({
      blendFunction: BlendFunction.SKIP,
      texture: depthOfFieldEffect.cocTexture
    });

    const depthEffect = new DepthEffect({
      blendFunction: BlendFunction.SKIP
    });

    const effectPass = new EffectPass(
      mainCamera,
      // effect,
      // depthOfFieldEffect,
      // depthEffect,
      // cocTextureEffect,
    );

    effect.inverted = true;
    composer.addPass(effectPass);

    const cannonDebugger = CannonDebugger(scene, world);

    // Animation loop
    const tick = () => {
      scene.update();
      world.fixedStep();
      cannonDebugger.update();
      composer.render();
      requestAnimationFrame(tick);
    };

    tick();

    return () => {
      // Cleanup renderer and dispose resources on unmount
      renderer.dispose();
      composer.dispose();
    };
  }, []);

  return <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
  <canvas ref={mountRef} style={{ width: '100%', height: '100vh' }} />
</div>;
};

export default SpaceSceneComponent;

import * as THREE from 'three';
import * as CANNON from 'cannon-es';

// #region Types

export type CannonBodyOptions = {
  collisionFilterGroup?: number;
  collisionFilterMask?: number;
  collisionResponse?: boolean;
  position?: CANNON.Vec3;
  velocity?: CANNON.Vec3;
  mass?: number;
  material?: CANNON.Material;
  linearDamping?: number;
  type?: CANNON.BodyType;
  allowSleep?: boolean;
  sleepSpeedLimit?: number;
  sleepTimeLimit?: number;
  quaternion?: CANNON.Quaternion;
  angularVelocity?: CANNON.Vec3;
  fixedRotation?: boolean;
  angularDamping?: number;
  linearFactor?: CANNON.Vec3;
  angularFactor?: CANNON.Vec3;
  shape?: CANNON.Shape;
  isTrigger?: boolean;
};

export type Vector2 = {
  x: number;
  y: number;
};

export type Vector3 = {
  x: number;
  y: number;
  z: number;
};

export type Axis = 'x' | 'y' | 'z';

type MaterialOptions = {
  color?: THREE.ColorRepresentation | undefined;
  opacity?: number | undefined;
  map?: THREE.Texture | null | undefined;
  lightMap?: THREE.Texture | null;
  lightMapIntensity?: number | undefined;
  aoMap?: THREE.Texture | null | undefined;
  aoMapIntensity?: number | undefined;
  specularMap?: THREE.Texture | null | undefined;
  alphaMap?: THREE.Texture | null | undefined;
  fog?: boolean | undefined;
  envMap?: THREE.Texture | null | undefined;
  envMapRotation?: THREE.Euler | undefined;
  combine?: THREE.Combine | undefined;
  reflectivity?: number | undefined;
  refractionRatio?: number | undefined;
  wireframe?: boolean | undefined;
  wireframeLinewidth?: number | undefined;
  wireframeLinecap?: string | undefined;
  wireframeLinejoin?: string | undefined;
  alphaHash?: boolean | undefined;
  alphaTest?: number | undefined;
  alphaToCoverage?: boolean | undefined;
  blendAlpha?: number | undefined;
  blendColor?: THREE.ColorRepresentation | undefined;
  blendDst?: THREE.BlendingDstFactor | undefined;
  blendDstAlpha?: number | undefined;
  blendEquation?: THREE.BlendingEquation | undefined;
  blendEquationAlpha?: number | undefined;
  blending?: THREE.Blending | undefined;
  blendSrc?: THREE.BlendingSrcFactor | THREE.BlendingDstFactor | undefined;
  blendSrcAlpha?: number | undefined;
  clipIntersection?: boolean | undefined;
  clippingPlanes?: THREE.Plane[] | undefined;
  clipShadows?: boolean | undefined;
  colorWrite?: boolean | undefined;
  depthFunc?: THREE.DepthModes | undefined;
  depthTest?: boolean | undefined;
  depthWrite?: boolean | undefined;
  name?: string | undefined;
  polygonOffset?: boolean | undefined;
  polygonOffsetFactor?: number | undefined;
  polygonOffsetUnits?: number | undefined;
  precision?: 'highp' | 'mediump' | 'lowp' | null | undefined;
  premultipliedAlpha?: boolean | undefined;
  forceSinglePass?: boolean | undefined;
  dithering?: boolean | undefined;
  side?: THREE.Side | undefined;
  shadowSide?: THREE.Side | undefined;
  toneMapped?: boolean | undefined;
  transparent?: boolean | undefined;
  vertexColors?: boolean | undefined;
  visible?: boolean | undefined;
  format?: THREE.PixelFormat | undefined;
  stencilWrite?: boolean | undefined;
  stencilFunc?: THREE.StencilFunc | undefined;
  stencilRef?: number | undefined;
  stencilWriteMask?: number | undefined;
  stencilFuncMask?: number | undefined;
  stencilFail?: THREE.StencilOp | undefined;
  stencilZFail?: THREE.StencilOp | undefined;
  stencilZPass?: THREE.StencilOp | undefined;
};

export type ThreeMeshOptions = {
  scale?: Vector3;
  position?: Vector3;
  materialProps?: MaterialOptions;
  bodyProps?: CannonBodyOptions;
};

// #endregion

export const getRandomFloat = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export const ThreeVec3Add = (threeVec3: THREE.Vector3, vec3Like?: Vector3) => {
  if (!vec3Like) return threeVec3;
  return threeVec3.add(vec3Like);
};

export const ThreeVec3ToCannonVec3 = (threeVec3: THREE.Vector3) => {
  const { x, y, z } = threeVec3;
  return new CANNON.Vec3(x, y, z);
};

export const RotateInAxis = (
  mesh: THREE.Object3D<THREE.Object3DEventMap>,
  target: THREE.Vector3,
  axis: Axis
) => {
  const direction = new THREE.Vector3();
  direction.subVectors(target, mesh.position);

  const angle = Math.atan2(direction.x, direction.z);

  mesh.rotation[axis] = angle;
};

export const CannonVec3ToThreeVec3 = (cannonVec3: CANNON.Vec3) => {
  const { x, y, z } = cannonVec3;
  return new THREE.Vector3(x, y, z);
};

export const GetGroupDimensions = (
  group: THREE.Object3D<THREE.Object3DEventMap>
): THREE.Vector3 => {
  const boundingBox = new THREE.Box3();
  boundingBox.setFromObject(group, true);
  return boundingBox.getSize(new THREE.Vector3());
};

export const GetGroupDimensionsCenter = (
  group: THREE.Object3D<THREE.Object3DEventMap>
): THREE.Vector3 => {
  const boundingBox = new THREE.Box3();
  boundingBox.setFromObject(group, true);
  const center = new THREE.Vector3();
  boundingBox.getCenter(center);
  return center;
};

export const SetVectorRandom = (vector: Vector3) => {
  const x = getRandomFloat(vector.x * -1, vector.x);
  const y = getRandomFloat(vector.y * -1, vector.y);
  const z = getRandomFloat(vector.z * -1, vector.z);
  const offset = new THREE.Vector3(x, y, z);
  return offset;
};

export const SetVectorRandomC = (vector: Vector3) => {
  const x = getRandomFloat(vector.x * -1, vector.x);
  const y = getRandomFloat(vector.y * -1, vector.y);
  const z = getRandomFloat(vector.z * -1, vector.z);
  const offset = new CANNON.Vec3(x, y, z);
  return offset;
};

export const GetChildMeshesIncludeName = (
  mesh: THREE.Object3D<THREE.Object3DEventMap>,
  nameInclude: string
) => {
  const meshes: THREE.Object3D<THREE.Object3DEventMap>[] = [];
  mesh.traverse((child) => {
    if ((child as THREE.Mesh).isMesh && child.name.includes(nameInclude)) {
      meshes.push(child);
    }
  });
  return meshes;
};

import { useGLTF } from "@react-three/drei";
import { Mesh } from "three/src/Three";

type IUseAppGLTFOption = {};

type IUseAppGLTF<T extends string> = {
  nodes: { [key in T]: Mesh };
};

export const useAppGLTF = <T extends string>(path: string, option?: IUseAppGLTFOption) => {
  const result = useGLTF(path) as unknown as IUseAppGLTF<T>;
  return result;
};

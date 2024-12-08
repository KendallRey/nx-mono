export const REACT = {
  TEST: '``````'
}

// This will not execute during re-renders
//  const _scaledShape = useMemo(() => shape.pick(Object.fromEntries(keys.map((key) => [key, true]))), [shape, ...keys]);
// This will execute during re-renders!
//  const _scaledShape = useMemo(() => shape.pick(Object.fromEntries(keys.map((key) => [key, true]))), [shape, keys]);

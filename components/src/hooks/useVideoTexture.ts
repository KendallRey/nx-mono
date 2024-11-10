import { useEffect, useState } from "react";

export const useVideoTexture = (src: string, props?: ElementCreationOptions) => {
  const [video] = useState(() =>
    Object.assign(document.createElement("video"), {
      src: src,
      crossOrigin: "Anonymous",
      loop: true,
      muted: true,
      ...props,
    }),
  );
  useEffect(() => void video.play(), [video]);

  return video;
};

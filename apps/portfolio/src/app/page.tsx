import { MuiBox } from "@nx-next-js-micro/components";
import { ImageBanner } from "@nx-next-js-micro/ui";

export default function HomePage() {

  return (
    <MuiBox className="h-screen">
      <ImageBanner imageUrl="/images/banner.png"/>
      <MuiBox>1</MuiBox>
      <MuiBox>2</MuiBox>
      <MuiBox>3</MuiBox>
    </MuiBox>
  );
}

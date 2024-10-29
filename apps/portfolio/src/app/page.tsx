import { MuiBox, MuiStack, MuiTypography } from "@nx-next-js-micro/components";
import { ImageBanner } from "@nx-next-js-micro/ui";

export default function HomePage() {

  return (
    <MuiBox className="h-screen">
      <ImageBanner imageUrl="/images/banner_2.png" className="grid items-center justify-center">
        <MuiStack>
          <MuiTypography color='white' fontSize={32}>Hello there,</MuiTypography>
          <MuiTypography color='white' fontSize={42}>KR here.</MuiTypography>
        </MuiStack>
      </ImageBanner>
      <MuiBox>1</MuiBox>
      <MuiBox>2</MuiBox>
      <MuiBox>3</MuiBox>
    </MuiBox>
  );
}

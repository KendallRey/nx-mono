import FloatingNavigation from 'ui/src/floating-navigation/FloatingNavigation';
import {
  Dashboard,
  IImageCarousel,
  ImageCarousel,
  Footer,
} from '@nx-next-js-micro/ui';
import {
  MuiBox,
  MuiButton,
  MuiDivider,
  MuiList,
  MuiListItem,
  MuiListItemIcon,
  MuiListItemText,
  MuiPaper,
  MuiStack,
  MuiTypography,
  MultiCarousel,
} from '@nx-next-js-micro/components';
import Image from 'next/image';
import Section from 'ui/src/section/Section';
import { LiaLuggageCartSolid } from 'react-icons/lia';
import { PiPackageLight } from 'react-icons/pi';
import { LuBlinds } from 'react-icons/lu';
import { GiMaterialsScience } from 'react-icons/gi';
import { MdEngineering } from 'react-icons/md';
import { PiPaintBrushHouseholdLight } from 'react-icons/pi';
import { MdOutlineHandshake } from 'react-icons/md';
import { CiBoxes } from 'react-icons/ci';

const IMAGES: IImageCarousel[] = [
  {
    id: 'image1',
    src: '/img1.webp',
    title: 'Title 1',
    children: <div>TEST</div>,
  },
  {
    id: 'image2',
    src: '/img2.webp',
    title: 'Title 2',
    children: <div>TEST</div>,
  },
  {
    id: 'image3',
    src: '/img3.webp',
    title: 'Title 3',
    children: <div>TEST</div>,
  },
  {
    id: 'image4',
    src: '/img4.webp',
    title: 'Title 4',
    children: <div>TEST</div>,
  },
];

const LandingPage = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <Dashboard>
      <section>
        <ImageCarousel slides={IMAGES} />
        <FloatingNavigation
          logo={
            <Image src={'/rfs-logo.webp'} alt="RFS" width={100} height={60} />
          }
        >
          <MuiButton variant="outlined" sx={{ borderRadius: 5 }}>
            Home
          </MuiButton>
          <MuiButton variant="outlined" sx={{ borderRadius: 5 }}>
            About Us
          </MuiButton>
          <MuiButton variant="outlined" sx={{ borderRadius: 5 }}>
            Portfolio
          </MuiButton>
          <MuiButton variant="outlined" sx={{ borderRadius: 5 }}>
            Products
          </MuiButton>
          <MuiButton size="large" className="mx-6" sx={{ borderRadius: 5 }}>
            Request Quotation
          </MuiButton>
        </FloatingNavigation>
      </section>
      <Section className="flex flex-wrap gap-12 p-12">
        <MuiBox className="flex flex-col flex-grow gap-8 md:flex-1">
          <MuiTypography variant="h1" fontSize={32} fontWeight={600}>
            Robles Fabrication Services - Aluminum & Glass - Doors & Windows
            Fabricator
          </MuiTypography>
          <MuiTypography variant="h6">
            We offer different kinds of services only just for you! Get to know
            us more!
          </MuiTypography>
          <MuiTypography variant="h5" fontWeight={600}>
            Why Choose RFS?
          </MuiTypography>
          <MuiList>
            <MuiListItem>
              <MuiListItemIcon>
                <MdEngineering fontSize={40} />
              </MuiListItemIcon>
              <MuiListItemText
                primaryTypographyProps={{ fontWeight: 600 }}
                primary="Unparalleled Expertise"
                secondary="With a team of highly skilled and experienced professionals, we bring unmatched expertise to every project. Our craftsmen are dedicated to delivering top-notch fabrication solutions tailored to your specific requirements."
              />
            </MuiListItem>
            <MuiListItem>
              <MuiListItemIcon>
                <GiMaterialsScience fontSize={40} />
              </MuiListItemIcon>
              <MuiListItemText
                primaryTypographyProps={{ fontWeight: 600 }}
                primary="Cutting-edge Technology"
                secondary="We stay at the forefront of technological advancements, incorporating state-of-the-art equipment and processes in our fabrication services. This ensures precision, efficiency, and the highest quality in every product we create."
              />
            </MuiListItem>
            <MuiListItem>
              <MuiListItemIcon>
                <CiBoxes fontSize={40} />
              </MuiListItemIcon>
              <MuiListItemText
                primaryTypographyProps={{ fontWeight: 600 }}
                primary="Versatility in Materials"
                secondary="Whether it's aluminum, glass, or windows fabrication, we excel in working with a variety of materials. Our versatility allows us to meet the unique demands of each project, no matter the scale or complexity."
              />
            </MuiListItem>
            <MuiListItem>
              <MuiListItemIcon>
                <PiPaintBrushHouseholdLight fontSize={40} />
              </MuiListItemIcon>
              <MuiListItemText
                primaryTypographyProps={{ fontWeight: 600 }}
                primary="Customization and Design"
                secondary="We understand that every client has distinct needs. That's why we offer a collaborative approach to customization and design. From concept to completion, we work closely with you to bring your vision to life"
              />
            </MuiListItem>
            <MuiListItem>
              <MuiListItemIcon>
                <MdOutlineHandshake fontSize={40} />
              </MuiListItemIcon>
              <MuiListItemText
                primaryTypographyProps={{ fontWeight: 600 }}
                primary="Commitment to Sustainability"
                secondary="RFS is committed to sustainable and eco-friendly practices. We strive to minimize our environmental footprint while delivering high-quality, durable, and energy-efficient products."
              />
            </MuiListItem>
          </MuiList>
        </MuiBox>
        <MuiPaper className="overflow-hidden flex-grow md:flex-1" elevation={6}>
          <iframe
            height={'100%'}
            width={'100%'}
            className="min-h-[500px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.811703131733!2d120.8607794767791!3d14.835822371271096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33965339b5f40e75%3A0xc7b6ae81d3730dd3!2sRobles%20Fabrication%20Services!5e0!3m2!1sfil!2sph!4v1719805274958!5m2!1sfil!2sph"
          />
        </MuiPaper>
      </Section>
      <MuiDivider />
      <Section className="flex gap-6 flex-wrap lg:flex-nowrap">
        <MuiPaper className="flex-1 p-4 min-w-[280px]" elevation={6}>
          <MuiStack alignItems="center" gap={2}>
            <LiaLuggageCartSolid fontSize={50} />
            <MuiTypography fontSize={24} fontWeight={600}>
              GLASS AND ALUMINUM
            </MuiTypography>
          </MuiStack>
        </MuiPaper>
        <MuiPaper className="flex-1 p-4 min-w-[280px]" elevation={6}>
          <MuiStack alignItems="center" gap={2}>
            <PiPackageLight fontSize={50} />
            <MuiTypography fontSize={24} fontWeight={600}>
              STAINLESS AND STEEL
            </MuiTypography>
          </MuiStack>
        </MuiPaper>
        <MuiPaper className="flex-1 p-4 min-w-[280px]" elevation={6}>
          <MuiStack alignItems="center" gap={2}>
            <LuBlinds fontSize={50} />
            <MuiTypography fontSize={24} fontWeight={600}>
              BLINDS AND MORE
            </MuiTypography>
          </MuiStack>
        </MuiPaper>
      </Section>
      <MuiDivider />
      <Section>
        <MuiPaper className="p-4 flex flex-col gap-6">
          <MuiTypography fontSize={48}>Our Projects</MuiTypography>
          <MuiDivider />
          <MultiCarousel>
            {IMAGES.map((image) => (
              <MuiPaper
                key={image.id}
                className="relative overflow-hidden"
                sx={{ height: 320, borderRadius: 4 }}
              >
                <Image
                  draggable={false}
                  alt=""
                  src={image.src || ''}
                  objectFit="cover"
                  fill
                  className=" object-cover"
                />
              </MuiPaper>
            ))}
          </MultiCarousel>
        </MuiPaper>
      </Section>
      <Footer title={'RFS - Aluminum & Glass - Doors & Windows Fabricator'}>
        <MuiStack>
          <MuiTypography sx={{ color: 'whitesmoke' }} variant="body2">
            Window Installation Service
          </MuiTypography>
          <MuiTypography sx={{ color: 'whitesmoke' }} variant="body2">
            123, Majinto, Philippines
          </MuiTypography>
        </MuiStack>
        <MuiStack>
          <MuiTypography sx={{ color: 'whitesmoke' }} variant="body2">
            09XX XXX XXXX
          </MuiTypography>
          <MuiTypography sx={{ color: 'whitesmoke' }} variant="body2">
            123, Majinto, Philippines
          </MuiTypography>
        </MuiStack>
      </Footer>
    </Dashboard>
  );
};

export default LandingPage;

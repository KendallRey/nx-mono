'use client';

import { Box } from '@mui/material';
import { grey } from '@mui/material/colors';
import {
  MuiDivider,
  MuiIconButton,
  MuiStack,
  MuiTypography,
} from '@nx-next-js-micro/components';
import { ReactNode } from 'react';

import style from './Footer.module.scss';

import { FaFacebookF } from 'react-icons/fa6';
import { FaTwitter } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { GrGoogle } from 'react-icons/gr';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

type IFooter = {
  logo?: ReactNode;
  title?: string;
  children?: ReactNode;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  gmail?: string;
  youtube?: string;
  x?: string;

  maxWidth?: number;
};

export const Footer: React.FC<IFooter> = (props) => {
  const {
    logo,
    title,
    children,
    maxWidth,
    facebook,
    instagram,
    twitter,
    gmail,
    youtube,
  } = props;
  return (
    <Box
      component={'footer'}
      display="flex"
      flexDirection="column"
      gap={4}
      style={{ background: grey[800] }}
      padding={4}
    >
      <MuiStack direction="row" gap={6}>
        <MuiStack>
          {logo}
          <MuiTypography
            fontSize={20}
            maxWidth={360}
            sx={{ color: 'whitesmoke' }}
          >
            {title}
          </MuiTypography>
        </MuiStack>
        {children}
      </MuiStack>
      <MuiStack maxWidth={maxWidth || 1600}></MuiStack>
      <MuiDivider sx={{ borderColor: 'white' }} />
      <MuiStack margin="auto" gap={2}>
        <MuiStack direction="row" alignItems="center" margin="auto" gap={1}>
          <CustomIconButton>
            <FaFacebookF />
          </CustomIconButton>
          <CustomIconButton>
            <FaTwitter />
          </CustomIconButton>
          <CustomIconButton>
            <BsTwitterX />
          </CustomIconButton>
          <CustomIconButton>
            <GrGoogle />
          </CustomIconButton>
          <CustomIconButton>
            <FaInstagram />
          </CustomIconButton>
          <CustomIconButton>
            <FaYoutube />
          </CustomIconButton>
        </MuiStack>
        <MuiTypography sx={{ color: 'white' }}>
          © 2024 Robles Fabrication Services. All rights reserved.
        </MuiTypography>
      </MuiStack>
    </Box>
  );
};

type ICustomIconButton = {
  onClick?: () => void;
  children: ReactNode;
};

const CustomIconButton: React.FC<ICustomIconButton> = (props) => {
  const { onClick, children } = props;
  return (
    <MuiIconButton onClick={onClick} className={style.icon_button}>
      {children}
    </MuiIconButton>
  );
};

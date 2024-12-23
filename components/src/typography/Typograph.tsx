"use client";

import { Typography, TypographyProps } from "@mui/material";

type IMuiTypography = TypographyProps;

export const MuiTypography: React.FC<IMuiTypography> = (props) => {
  const { sx, ...otherProps } = props;
  return <Typography {...otherProps} sx={{ textTransform: "none", ...sx }} />;
};

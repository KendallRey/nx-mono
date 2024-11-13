"use client";

import React from "react";

import { Box, BoxProps } from "@mui/material";

export type IMuiBox = BoxProps;

export const MuiBox: React.FC<BoxProps> = (props) => {
  return <Box {...props} />;
};

"use client";

import { Stack, StackProps } from "@mui/material";
import { forwardRef } from "react";

export const MuiStack = forwardRef<HTMLDivElement, StackProps>((props, ref) => {
  return <Stack {...props} ref={ref} />;
});

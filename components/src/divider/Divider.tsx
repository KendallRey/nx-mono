import { Divider, DividerProps } from "@mui/material";
import React from "react";

// extend props here
type IMuiDivider = DividerProps;

export const MuiDivider: React.FC<IMuiDivider> = (props) => {
  return <Divider {...props} />;
};

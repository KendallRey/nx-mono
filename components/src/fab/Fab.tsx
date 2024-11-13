import { Fab, FabProps } from "@mui/material";
import React from "react";

type IMuiFab = FabProps;

export const MuiFab: React.FC<IMuiFab> = (props) => {
  return <Fab {...props} />;
};

import React from "react";
import { Drawer, DrawerProps } from "@mui/material";

type IMuiDrawer = DrawerProps;

export const MuiDrawer: React.FC<IMuiDrawer> = (props) => {
  return <Drawer {...props} />;
};

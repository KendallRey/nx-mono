import { Link, LinkProps } from "@mui/material";
import React from "react";

type IMuiLink = LinkProps;

export const MuiLink: React.FC<IMuiLink> = (props) => {
  return <Link {...props} />;
};

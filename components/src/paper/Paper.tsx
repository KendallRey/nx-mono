"use client";

import Paper, { PaperProps } from "@mui/material/Paper";

type IMuiPaper = PaperProps;

export const MuiPaper: React.FC<IMuiPaper> = (props) => {
  return <Paper {...props} />;
};

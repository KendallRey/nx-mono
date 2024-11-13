import { Skeleton, SkeletonProps } from "@mui/material";
import React from "react";

type IMuiSkeleton = SkeletonProps;

export const MuiSkeleton: React.FC<IMuiSkeleton> = (props) => {
  return <Skeleton {...props} sx={{ transform: "none" }} />;
};

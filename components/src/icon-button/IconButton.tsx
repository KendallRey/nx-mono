import { IconButton, IconButtonProps } from "@mui/material";

type IMuiIconButton = IconButtonProps;

export const MuiIconButton: React.FC<IMuiIconButton> = (props) => {
  return <IconButton {...props} />;
};

import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ImageListItemBarProps,
  ImageListItemProps,
  ImageListProps,
} from "@mui/material";

type IMuiImageList = ImageListProps;
export const MuiImageList: React.FC<IMuiImageList> = (props) => {
  return <ImageList {...props} />;
};

type IMuiImageListItem = ImageListItemProps;
export const MuiImageListItem: React.FC<IMuiImageListItem> = (props) => {
  return <ImageListItem {...props} />;
};

type IMuiImageListItemBar = ImageListItemBarProps;
export const MuiImageListItemBar: React.FC<IMuiImageListItemBar> = (props) => {
  return <ImageListItemBar {...props} />;
};

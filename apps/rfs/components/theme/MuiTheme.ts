import { createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';

export const MuiTheme = createTheme({
  palette: {
    text: {
      primary: grey[800],
    },
  },
  typography: {
    allVariants: {
      color: grey[900],
    },
    body2: {
      color: grey[500],
    },
  },
  breakpoints: {},
});

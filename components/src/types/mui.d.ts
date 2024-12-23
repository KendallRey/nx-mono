import Button, {
  ButtonPropsColorOverrides,
  ButtonPropsVariantOverrides,
  ButtonPropsSizeOverrides
} from '@mui/material/Button'
import Chip, { ChipPropsColorOverrides } from '@mui/material/Chip'
import TextField, { TextFieldPropsColorOverrides } from '@mui/material/TextField'
import { PaletteColorOptions, PaletteColor, Color } from '@mui/material/styles'

declare module '@mui/material/styles' {

  interface CustomPalette {
    system: {
      white: string
      black: string
    }
    slate: PaletteColor & PaletteColorOptions
    neutral: PaletteColor & PaletteColorOptions
    orange: PaletteColor & PaletteColorOptions
    gray: PaletteColor & PaletteColorOptions
    red: PaletteColor & PaletteColorOptions
    yellow: PaletteColor & PaletteColorOptions
    green: PaletteColor & PaletteColorOptions
    blue: PaletteColor & PaletteColorOptions
    purple: PaletteColor & PaletteColorOptions
    pink: PaletteColor & PaletteColorOptions
    brand: PaletteColor & PaletteColorOptions
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}

  interface CustomPaletteColor {
    50: string
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
    950: string
  }
  interface PaletteColor extends CustomPaletteColor {}
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    // error: true;
  }

  interface ButtonPropsVariantOverrides {
    // primary: true;
  }

  interface ButtonPropsSizeOverrides {
    // sm: true;
    // md: true;
    // lg: true;
    // xl: true;
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    // neutral: true;
  }
}

declare module '@mui/material/TextField' {
  interface TextFieldPropsSizeOverrides {
    sm: true
    md: true
    lg: true
    xl: true
  }
}

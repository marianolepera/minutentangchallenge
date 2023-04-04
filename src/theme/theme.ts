import { createTheme } from "@mui/material/styles";


const theme = createTheme({
  
  palette: {
    primary: {
      main: "#FF9F24",
      contrastText: "white"
    },
  },
  typography: {
    fontFamily: [
      'DM Sans',
      'sans-serif',
    ].join(','),
  }
});

declare module '@mui/material/styles' {
  interface Palette {
    custom: Palette['primary'];
    modalButtom: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    custom?: PaletteOptions['primary'];
    modalButtom?: PaletteOptions['primary'];
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    custom: true;
    modalButtom: true;
  }
}


export default theme;
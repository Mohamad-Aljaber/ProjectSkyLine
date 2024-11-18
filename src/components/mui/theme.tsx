import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-inria-sans), Arial, sans-serif",
  },
  palette: {
    mode:"dark",
    primary: {
      main: "#008CFF",
      light: "#3564FF",
      dark: "#0728FF",
    },
    secondary: {
      main: "#45E6D1",
    },
  },
});

export default theme;

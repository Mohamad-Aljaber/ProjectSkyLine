import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-inria-sans), Arial, sans-serif",
  },
  palette: {
    primary: {
      main: "#008CFF",
      light: "#0728FF",
      dark: "#3564FF",
    },
    secondary: {
      main: "#45E6D1",
    },
  },
});

export default theme;

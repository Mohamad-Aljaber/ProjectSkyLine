import type { AppProps } from "next/app";
import localFont from "next/font/local";
import "../styles/globals.css";
import theme from "@/components/mui/theme";
import { ThemeProvider } from "@mui/material";
const inriaSans = localFont({
  src: [
    {
      path: "./fonts/InriaSans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/InriaSans-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/InriaSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/InriaSans-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/InriaSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/InriaSans-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-inria-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <div className={inriaSans.variable}>
        <Component {...pageProps} />;
      </div>
    </ThemeProvider>
  );
}

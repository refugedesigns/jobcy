"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header/Header";
import { StyledEngineProvider } from "@mui/material";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "@/theme/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <body className={inter.className}>
            <Header />
            {children}
          </body>
        </ThemeProvider>
      </StyledEngineProvider>
    </html>
  );
}

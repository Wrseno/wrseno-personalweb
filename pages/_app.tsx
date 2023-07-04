import React from "react";
import "../styles/globals.css";
import type {AppProps} from "next/app";
import NextNProgress from "nextjs-progressbar";
import {ThemeProvider} from "next-themes";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <NextNProgress color='#ad081b' height={4} />
      <ThemeProvider enableSystem={true} attribute='class'>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;

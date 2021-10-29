import "../faust.config";
import { FaustProvider } from "@faustjs/next";
import "normalize.css";
import "../styles/globals.css";
import "highlight.js/styles/vs.css";

import type { AppProps /*, AppContext */ } from "next/app";

import { client } from "../client";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <FaustProvider client={client} pageProps={pageProps}>
        <Component {...pageProps} />
      </FaustProvider>
    </>
  );
}

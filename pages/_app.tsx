import "../faust.config";
import "normalize.css";
import "../styles/globals.css";

import type { AppProps /*, AppContext */ } from "next/app";
import { HeadlessProvider } from "@faustjs/next";
import { client } from "../client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HeadlessProvider client={client} pageProps={pageProps}>
      <Component {...pageProps} />
    </HeadlessProvider>
  );
}

export default MyApp;

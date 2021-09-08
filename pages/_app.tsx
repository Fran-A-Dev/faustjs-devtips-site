import "../faust.config";
import "normalize.css";
import "../styles/globals.css";

import type { AppProps /*, AppContext */ } from "next/app";
import { HeadlessProvider } from "@faustjs/next";
import { client } from "../client";
import { headlessConfig } from "@faustjs/core";

headlessConfig({
  wpUrl: process.env.WORDPRESS_URL || process.env.NEXT_PUBLIC_WORDPRESS_URL,
  apiClientSecret: process.env.WP_HEADLESS_SECRET,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HeadlessProvider client={client} pageProps={pageProps}>
      <Component {...pageProps} />
    </HeadlessProvider>
  );
}

export default MyApp;

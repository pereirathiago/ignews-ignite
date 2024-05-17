import { AppProps } from "next/app"
import React from "react";

import '../styles/global.scss'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

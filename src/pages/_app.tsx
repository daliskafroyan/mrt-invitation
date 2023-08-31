import "@/styles/styles.scss";
import type { AppProps } from "next/app";

import "@fontsource/roboto-condensed";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

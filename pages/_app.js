// pages/_app.js
import '../globals.css'; // load your existing global styles

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

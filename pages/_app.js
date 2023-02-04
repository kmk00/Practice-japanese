import "@/styles/globals.css";
import { Overlay } from "./components/Overlay";

export default function App({ Component, pageProps }) {
  return (
    <Overlay>
      <Component {...pageProps} />
    </Overlay>
  );
}

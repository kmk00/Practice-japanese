import { MenuProvider } from "@/context/menu";
import "@/styles/globals.css";
import { Overlay } from "../components/Overlay";

export default function App({ Component, pageProps }) {
  return (
    <MenuProvider>
      <Overlay>
        <Component {...pageProps} />
      </Overlay>
    </MenuProvider>
  );
}

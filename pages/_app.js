import { AlphabetProvider } from "@/context/alphabet";
import { MenuProvider } from "@/context/menu";
import "@/styles/globals.css";
import { Overlay } from "../components/Overlay";

export default function App({ Component, pageProps }) {
  return (
    <AlphabetProvider>
      <MenuProvider>
        <Overlay>
          <Component {...pageProps} />
        </Overlay>
      </MenuProvider>
    </AlphabetProvider>
  );
}

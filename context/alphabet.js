import { createContext, useContext, useState } from "react";

const Context = createContext();

export function AlphabetProvider({ children }) {
  const [alphabet, setAlphabet] = useState("hiragana");

  return (
    <Context.Provider value={[alphabet, setAlphabet]}>
      {children}
    </Context.Provider>
  );
}

export function useAlphabetContext() {
  return useContext(Context);
}

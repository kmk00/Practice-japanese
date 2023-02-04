import { createContext, useContext, useState } from "react";

const Context = createContext();

export function MenuProvider({ children }) {
  const [navigate, setNavigate] = useState(false);

  return (
    <Context.Provider value={[navigate, setNavigate]}>
      {children}
    </Context.Provider>
  );
}

export function useMenuContext() {
  return useContext(Context);
}

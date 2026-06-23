
"use client";

import { createContext, ReactNode, useContext, useReducer } from "react";
import storeReducer, { initialStore, Store, Action } from "../store/store";

type StoreContextType = {
  store: Store;
  dispatch: React.Dispatch<Action>;
};

const  StoreContext= createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [store, dispatch] = useReducer(storeReducer, initialStore());

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

export default function useGlobalReducer() {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error("useGlobalReducer debe usarse dentro de StoreProvider");
  }

  return context;
}


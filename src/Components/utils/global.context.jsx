import { createContext, useState, useContext } from "react";

// export const initialState = { darkTheme: false, data: [] }

export const ContextGlobal = createContext(undefined);

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <ContextGlobal.Provider value={{ darkTheme, setDarkTheme}}>
      {children}
    </ContextGlobal.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useContextGlobal = () => useContext(ContextGlobal);
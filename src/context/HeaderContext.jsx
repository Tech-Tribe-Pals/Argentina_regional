import { createContext, useEffect, useState } from "react";

export const HeaderContext = createContext();

const HeaderProvider = ({ children }) => {
  const [headerOut, setHeaderOut] = useState(true);
  const [actualPath, setPath] = useState('/');

  useEffect(() => {
    const pathnameChange = () => {
      if (actualPath === "/") {
        setHeaderOut(true);
      } else {
        setHeaderOut(false);
      }
    };
    pathnameChange();
  }, [actualPath]);

  return (
    <HeaderContext.Provider value={{ headerOut, setPath }}>
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderProvider;

import { createContext, useEffect, useState } from "react";
import authAPI from "../api/authAPI";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [isUser, setIsUser] = useState(false);

  const checkUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await authAPI.checkToken(token);
        if (response.valid) {
          setIsUser(true);
        } else {
          localStorage.removeItem("token");
        }
      }
    } catch (error) {
      console.log("Error al verificar el usuario:", error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);
  const setUser = (loggedIn) => {
    setIsUser(loggedIn);
  };

  return (
    <UserContext.Provider value={{ isUser, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

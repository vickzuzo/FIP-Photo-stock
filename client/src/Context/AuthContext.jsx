import Cookies from "js-cookie";
import { useEffect, useMemo, useState } from "react";

const { createContext } = require("react");

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(
    Cookies.get("access_token") !== undefined
  );

  const updateUser = (user) => {
    setUser(user);
    setIsLoggedIn(true);
  };

  const memoedData = useMemo(
    () => ({
      user,
      isLoggedIn,
      updateUser,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user]
  );

  return (
    <AuthContext.Provider value={memoedData}>{children}</AuthContext.Provider>
  );
};

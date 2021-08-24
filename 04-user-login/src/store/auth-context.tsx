import React, { useEffect, useState } from "react";

export interface IAuthContext {
  isLoggedIn: boolean;
  onLogin: (email: string, password: string) => void;
  onLogout: () => void;
}

export const AuthContext = React.createContext<IAuthContext>({
  isLoggedIn: false,
  onLogin: () => {},
  onLogout: () => {},
});

type TAuthContextProviderProps = {
  children: React.ReactNode;
};

const AuthContextProvider = ({ children }: TAuthContextProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const loginHandler = (email: string, password: string) => {
    console.log({ email, password });

    localStorage.setItem("isLoggedIn", "1");

    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn")) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

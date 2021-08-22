import { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader";

const App = () => {
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
    <>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      {isLoggedIn && <Home />}
      {!isLoggedIn && <Login onLogin={loginHandler} />}
    </>
  );
};

export default App;

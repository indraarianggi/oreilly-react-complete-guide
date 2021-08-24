import { useContext } from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader";
import { AuthContext } from "./store/auth-context";

const App = () => {
  const authContext = useContext(AuthContext);
  const { isLoggedIn } = authContext;

  return (
    <>
      <MainHeader />
      {isLoggedIn && <Home />}
      {!isLoggedIn && <Login />}
    </>
  );
};

export default App;

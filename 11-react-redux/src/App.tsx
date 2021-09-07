import { useSelector } from "react-redux";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import { RootState } from "./store";

const App = () => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);

  return (
    <>
      <Header />

      {!isAuth ? <Auth /> : <UserProfile />}

      <Counter />
    </>
  );
};

export default App;

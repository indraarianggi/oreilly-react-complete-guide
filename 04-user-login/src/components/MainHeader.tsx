import styled from "styled-components";
import Navigation from "./Navigation";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #741188;
  padding: 0 2rem;

  & h1 {
    color: white;
  }
`;

type TMainHeaderProps = {
  isAuthenticated: boolean;
  onLogout: () => void;
};

const MainHeader = ({ isAuthenticated, onLogout }: TMainHeaderProps) => {
  return (
    <Header>
      <h1>A Typical Page</h1>
      <Navigation isLoggedIn={isAuthenticated} onLogout={onLogout} />
    </Header>
  );
};

export default MainHeader;

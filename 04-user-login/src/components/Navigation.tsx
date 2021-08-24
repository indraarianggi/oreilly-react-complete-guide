import { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../store/auth-context";

const Nav = styled.nav`
  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
  }

  & li {
    margin: 0;
    margin-left: 2rem;
  }

  & a {
    text-decoration: none;
    color: white;
  }

  & a:hover,
  & a:active {
    color: #f3cafb;
  }

  & button {
    font: inherit;
    background: #dd0db0;
    border: 1px solid #dd0db0;
    padding: 0.5rem 1.5rem;
    color: white;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);
    border-radius: 20px;
  }

  & button:focus {
    outline: none;
  }

  & button:hover,
  & button:active {
    color: #f3cafb;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.26);
  }
`;

type TNavigationProps = {};

const Navigation = (props: TNavigationProps) => {
  const authContext = useContext(AuthContext);

  return (
    <Nav>
      <ul>
        {authContext.isLoggedIn && (
          <>
            <li>
              <a href="/">Users</a>
            </li>
            <li>
              <a href="/">Admin</a>
            </li>
            <li>
              <button onClick={authContext.onLogout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </Nav>
  );
};

export default Navigation;

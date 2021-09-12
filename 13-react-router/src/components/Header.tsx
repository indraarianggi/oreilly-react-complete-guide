import { NavLink } from "react-router-dom";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <NavLink to="/welcome" activeClassName={styles.active}>
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" activeClassName={styles.active}>
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

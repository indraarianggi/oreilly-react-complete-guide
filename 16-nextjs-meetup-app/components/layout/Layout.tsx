import React from "react";
import styles from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

type TLayoutProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: TLayoutProps) => {
  return (
    <div>
      <MainNavigation />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;

import React from "react";
import MainNavigation from "./MainNavigation";

import styles from "./Layout.module.css";

type TLayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: TLayoutProps) => {
  return (
    <>
      <MainNavigation />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;

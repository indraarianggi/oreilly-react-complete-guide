import React from "react";
import MainHeader from "./MainHeader";

type TLayoutProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: TLayoutProps) => {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
};

export default Layout;

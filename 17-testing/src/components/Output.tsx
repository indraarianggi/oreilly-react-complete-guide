import React from "react";

type TOutputProps = {
  children: React.ReactNode;
};

const Output = ({ children }: TOutputProps) => {
  return <p>{children}</p>;
};

export default Output;

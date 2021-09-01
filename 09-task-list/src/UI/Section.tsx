import React from "react";
import styles from "./Section.module.css";

type TSectionProps = {
  children: React.ReactNode;
};

const Section = ({ children }: TSectionProps) => {
  return <section className={styles.section}>{children}</section>;
};

export default Section;

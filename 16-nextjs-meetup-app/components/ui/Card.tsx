import React from "react";
import styles from "./Card.module.css";

type TCardProps = {
  children?: React.ReactNode;
};

const Card = ({ children }: TCardProps) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;

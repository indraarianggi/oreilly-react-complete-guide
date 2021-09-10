import React from "react";
import styles from "./Card.module.css";

type TCardProps = {
  className?: string;
  children?: React.ReactNode;
};

const Card = ({ className, children }: TCardProps) => {
  return (
    <section className={`${styles.card} ${className ? className : ""}`}>
      {children}
    </section>
  );
};

export default Card;

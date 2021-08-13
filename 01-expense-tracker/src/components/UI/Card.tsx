import "./Card.css";

type TCardProps = {
  className?: string;
  children: React.ReactNode;
};

const Card = ({ className, children }: TCardProps) => {
  return <div className={`card ${className}`}>{children}</div>;
};

export default Card;

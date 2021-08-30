import Card from "./Card";
import useCounter from "../hooks/useCounter";

const ForwardCounter = () => {
  const counter = useCounter(0, 1);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;

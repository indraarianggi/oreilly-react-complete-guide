import useCounter from "../hooks/useCounter";
import Card from "./Card";

const BackwardCounter = () => {
  const counter = useCounter(0, 1, "-");
  return <Card>{counter}</Card>;
};

export default BackwardCounter;

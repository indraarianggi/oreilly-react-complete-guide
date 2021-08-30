import { useEffect, useState } from "react";

const useCounter = (
  start: number,
  counterNum: number,
  operation: "+" | "-" = "+"
) => {
  const [counter, setCounter] = useState<number>(start);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        switch (operation) {
          case "+":
            return prevCounter + counterNum;
          case "-":
            return prevCounter - counterNum;
          default:
            return prevCounter;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [operation, counterNum]);

  return counter;
};

export default useCounter;

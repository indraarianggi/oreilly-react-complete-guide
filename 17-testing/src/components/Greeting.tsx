import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState<boolean>(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h1>Hello World!</h1>
      {!changedText && <Output>It's good to see you!</Output>}
      {changedText && <Output>Changed!</Output>}
      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  );
};

export default Greeting;

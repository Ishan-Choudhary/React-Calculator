import Button from "react-bootstrap/Button";
import "../assests/styles/display.css";

import { useState, useRef } from "react";

const Calculator = () => {
  const [result, setResult] = useState(0);
  const inputRef = useRef(null);

  function clearResult() {
    setResult(0);
  }

  function add() {
    setResult(result + parseInt(inputRef.current.value));
  }

  function subtract() {
    setResult(result - parseInt(inputRef.current.value));
  }

  function multiply() {
    setResult(result * parseInt(inputRef.current.value));
  }

  function divide() {
    setResult(result / parseInt(inputRef.current.value));
  }

  function resetInput() {
    inputRef.current.value = "";
  }

  return (
    <div className="mainCalculator">
      <p>{result}</p>
      <input
        pattern="[0-9]"
        placeholder="Input a number"
        type="number"
        required={true}
        ref={inputRef}
      />
      <div>
        <Button variant="light" onClick={add}>
          add
        </Button>{" "}
        <Button variant="light" onClick={subtract}>
          subtract
        </Button>{" "}
        <Button variant="light" onClick={multiply}>
          multiply
        </Button>{" "}
        <Button variant="light" onClick={divide}>
          divide
        </Button>{" "}
        <Button variant="danger" onClick={resetInput}>
          reset input
        </Button>{" "}
        <Button variant="danger" onClick={clearResult}>
          reset result
        </Button>{" "}
      </div>
    </div>
  );
};

export default Calculator;

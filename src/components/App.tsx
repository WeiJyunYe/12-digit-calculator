import { useState } from "react";
import Display from "./Display";
import Pad from "./Pad";
import Decimal from "decimal.js";

type arithmeticOperator = "+" | "-" | "x" | "÷";
type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export default function Calculator() {
  const [result, setResult] = useState<number | Decimal>(0);
  const [pendingOperator, setPendingOperator] = useState<arithmeticOperator>();
  const [isWaitingForOperand, setIsWaitingForOperand] = useState<boolean>(true);
  const [display, setDisplay] = useState<string>("0");
  const [memory, setMemory] = useState<number | Decimal>(0);

  console.log(
    `result: ${result}, 
    pendingOperator: ${pendingOperator}, 
    isWaitingForOperand: ${isWaitingForOperand}, 
    display: ${display}, 
    memory: ${memory}`
  );

  const calculate = (
    rightOperand: number,
    pendingOperator: arithmeticOperator
  ) => {
    const leftOperand = result;
    let newResult;

    switch (pendingOperator) {
      case "+":
        newResult = Decimal.add(leftOperand, rightOperand);
        break;
      case "-":
        newResult = Decimal.sub(leftOperand, rightOperand);
        break;
      case "x":
        newResult = Decimal.mul(leftOperand, rightOperand);
        break;
      case "÷":
        if (rightOperand === 0) {
          return false;
        }

        newResult = Decimal.div(leftOperand, rightOperand);
    }

    if (newResult.toString().length > 12) {
      setDisplay("ERROR");
    }

    if (newResult.toString().length <= 12) {
      setResult(newResult);
      setDisplay(newResult.toString());
    }

    return true;
  };

  const onDigitButtonClick = (digit: Digit) => {
    let newDisplay = display;

    if (display === "0" && digit === 0) return;
    if (display.length > 11 && isWaitingForOperand === false) return;

    if (isWaitingForOperand) {
      newDisplay = "";
      setIsWaitingForOperand(false);
    }

    if (display !== "0") {
      newDisplay = newDisplay + digit.toString();
    } else {
      newDisplay = digit.toString();
    }

    setDisplay(newDisplay);
  };

  const onPointButtonClick = () => {
    let newDisplay = display;

    if (isWaitingForOperand) {
      newDisplay = "0";
    }

    if (!newDisplay.includes(".")) {
      newDisplay = newDisplay + ".";
    }

    setDisplay(newDisplay);
    setIsWaitingForOperand(false);
  };

  const onOperatorButtonClick = (operator: arithmeticOperator) => {
    const operand = Number(display);

    if (pendingOperator !== operator) setPendingOperator(operator);
    if (pendingOperator !== undefined && !isWaitingForOperand) {
      if (!calculate(operand, pendingOperator)) return;
    } else if (pendingOperator !== undefined && isWaitingForOperand) {
      return;
    } else {
      setResult(operand);
    }

    setPendingOperator(operator);
    setIsWaitingForOperand(true);
  };

  const onPlusMinusSignButtonClick = () => {
    const value = Number(display);

    if (value > 0) setDisplay("-" + display);
    if (value < 0) setDisplay(display.slice(1));
  };

  const onEqualButtonClick = () => {
    const operand = Number(display);

    if (pendingOperator !== undefined && !isWaitingForOperand) {
      if (!calculate(operand, pendingOperator)) return;
      setPendingOperator(undefined);
    } else if (pendingOperator !== undefined && isWaitingForOperand) {
      return;
    } else {
      setDisplay(operand.toString());
    }

    setResult(operand);
    setIsWaitingForOperand(true);
  };

  const onAllClearButtonClick = () => {
    setResult(0);
    setMemory(0);
    setDisplay("0");
    setIsWaitingForOperand(true);
    setPendingOperator(undefined);
  };

  const onClearEntryButtonClick = () => {
    setDisplay("0");
    setIsWaitingForOperand(true);
  };

  const onMemoryPlusButtonClick = () => {
    setMemory(Decimal.add(memory, Number(display)));
  };

  const onMemoryMinusButtonClick = () => {
    setMemory(Decimal.sub(memory, Number(display)));
  };

  const onMemoryClearButtonClick = () => {
    setMemory(0);
  };

  const onMemoryRecallButtonClick = () => {
    if (memory !== 0) {
      setDisplay(memory.toString());
      setIsWaitingForOperand(result ? false : true);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-zinc-300 overflow-auto">
      <div className="w-[320px] h-[480px] flex flex-col outline outline-1 outline-black/80">
        <div className="h-1/4 bg-neutral-600/90 ">
          <Display
            display={display}
            hasMemory={memory !== 0}
            expression={
              pendingOperator !== undefined
                ? `${result} ${pendingOperator} ${
                    isWaitingForOperand ? "" : display
                  }`
                : ""
            }
          />
        </div>
        <div className="h-3/4">
          <Pad
            onDigitButtonClick={onDigitButtonClick}
            onPointButtonClick={onPointButtonClick}
            onOperatorButtonClick={onOperatorButtonClick}
            onPlusMinusSignButtonClick={onPlusMinusSignButtonClick}
            onEqualButtonClick={onEqualButtonClick}
            onAllClearButtonClick={onAllClearButtonClick}
            onClearEntryButtonClick={onClearEntryButtonClick}
            onMemoryPlusButtonClick={onMemoryPlusButtonClick}
            onMemoryMinusButtonClick={onMemoryMinusButtonClick}
            onMemoryClearButtonClick={onMemoryClearButtonClick}
            onMemoryRecallButtonClick={onMemoryRecallButtonClick}
          />
        </div>
      </div>
    </div>
  );
}

import Button from "./Button";

type arithmeticOperator = "+" | "-" | "x" | "÷";
type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

interface PadProps {
  onDigitButtonClick: (digit: Digit) => void;
  onPointButtonClick: () => void;
  onOperatorButtonClick: (operator: arithmeticOperator) => void;
  onPlusMinusSignButtonClick: () => void;
  onEqualButtonClick: () => void;
  onAllClearButtonClick: () => void;
  onClearEntryButtonClick: () => void;
  onMemoryPlusButtonClick: () => void;
  onMemoryMinusButtonClick: () => void;
  onMemoryClearButtonClick: () => void;
  onMemoryRecallButtonClick: () => void;
}

const Pad: React.FC<PadProps> = ({
  onDigitButtonClick,
  onPointButtonClick,
  onOperatorButtonClick,
  onPlusMinusSignButtonClick,
  onEqualButtonClick,
  onAllClearButtonClick,
  onClearEntryButtonClick,
  onMemoryPlusButtonClick,
  onMemoryMinusButtonClick,
  onMemoryClearButtonClick,
  onMemoryRecallButtonClick,
}) => {
  return (
    <div>
      <div className="grid grid-cols-4">
        <Button onClick={onMemoryRecallButtonClick}>MR</Button>
        <Button onClick={onMemoryClearButtonClick}>MC</Button>
        <Button onClick={onMemoryPlusButtonClick}>M+</Button>
        <Button onClick={onMemoryMinusButtonClick}>M-</Button>
        <Button onClick={onAllClearButtonClick}>AC</Button>
        <Button onClick={onClearEntryButtonClick}>C</Button>
        <Button onClick={onPlusMinusSignButtonClick}>-/+</Button>
        <Button onClick={() => onOperatorButtonClick("÷")}>÷</Button>
        <Button onClick={() => onDigitButtonClick(7)}>7</Button>
        <Button onClick={() => onDigitButtonClick(8)}>8</Button>
        <Button onClick={() => onDigitButtonClick(9)}>9</Button>
        <Button onClick={() => onOperatorButtonClick("x")}>x</Button>
        <Button onClick={() => onDigitButtonClick(4)}>4</Button>
        <Button onClick={() => onDigitButtonClick(5)}>5</Button>
        <Button onClick={() => onDigitButtonClick(6)}>6</Button>
        <Button onClick={() => onOperatorButtonClick("-")}>-</Button>
        <Button onClick={() => onDigitButtonClick(1)}>1</Button>
        <Button onClick={() => onDigitButtonClick(2)}>2</Button>
        <Button onClick={() => onDigitButtonClick(3)}>3</Button>
        <Button onClick={() => onOperatorButtonClick("+")}>+</Button>
        <Button onClick={() => onDigitButtonClick(0)}>0</Button>
        <Button onClick={onPointButtonClick}>.</Button>
        <Button onClick={onEqualButtonClick}>=</Button>
      </div>
    </div>
  );
};

export default Pad;

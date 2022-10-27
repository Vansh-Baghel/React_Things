import { useState } from "react";

const useErrorForm = (getInput) => {
  const [inputVal, setInputVal] = useState("");
  const [inputValTouchState, setInputValTouchState] = useState(false);

  const InputIsInvalid = getInput(inputVal) && inputValTouchState === true;

  const InputValChangeHandler = (event) => {
    setInputVal(event.target.value);
  };

  const InputValBlurHandler = () => {
    setInputValTouchState(true);
  };

  const resetField = () => {
    setInputVal("");
    setInputValTouchState(false);
  };

  const InputValClasses =
    InputIsInvalid === true ? "form-control invalid" : "form-control";

  return {
    inputVal,
    InputIsInvalid,
    InputValChangeHandler,
    InputValBlurHandler,
    InputValClasses,
    resetField,
  };
};

export default useErrorForm;

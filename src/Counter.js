import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const [toggle , setToggle] = useState(false);
  const { counter } = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  const toggleHandler = () => {
    // Changing the previous state.
    setToggle(tog => !tog);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className={classes.counter}>
        <h5>Redux Counter</h5>
        <div
          style={{
            color: "purple",
            fontWeight: "800",
            fontSize: "35px",
            padding: "2rem",
          }}
        >
          {counter}
        </div>
        <button onClick={toggleHandler}>Toggle Counter</button>
        {/* if toggle is true , then interchange the functionality of increment and decrement. */}
        <button onClick={!toggle ? incrementHandler : decrementHandler}>Increment</button>
        <button onClick={!toggle ? decrementHandler : incrementHandler}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;

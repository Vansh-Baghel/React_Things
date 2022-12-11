import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "./store/redux-store.js";

const Counter = () => {
  // counter is the property which we've defined in redux-store in initialState . 
  const counter = useSelector((state) => state.counter);
  // show stores the boolean value which indicates toggle or not.
  const show = useSelector((state) => state.togCounter);
  const dispatch = useDispatch();

  // const incrementHandler = () => {
  //   dispatch({ type: "increment" });
  // };
  // const decrementHandler = () => {
  //   dispatch({ type: "decrement" });
  // };
  // const toggleHandler = () => {
  //   // Changing the previous state.
  //   setToggle(tog => !tog);
  // }

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  };
  const toggleHandler = () => {
    // Calling the method from redux-store component and which will there toggle everytime we click. 
    dispatch(counterActions.toggleCounter());
  };

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
        <button onClick={increaseHandler}>Increase</button>
        {/* if toggle is true , then interchange the functionality of increment and decrement. */}
        <button onClick={show === true ? incrementHandler : decrementHandler}>
          Increment
        </button>
        <button onClick={show === true ? decrementHandler : incrementHandler}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;

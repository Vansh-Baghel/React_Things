import { configureStore } from "@reduxjs/toolkit";
// Flow of redux is to createStore , Reducer function containing state and action .
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    // it updates the old state.
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  // if no type has been called with Reducer function , then just return the old state.
  return state;
};

const reduxStore = configureStore({
  reducer: {
    count: counterReducer,
  },
});

export default reduxStore;

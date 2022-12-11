import { configureStore, createSlice } from "@reduxjs/toolkit";

// // Flow of redux is to createStore , Reducer function containing state and action . here state is an object.
// const counterReducer = (state = { counter: 0 }, action) => {
//   if (action.type === "increment") {
//     // it updates the old state.
//     return {
//       counter: state.counter + 1,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//     };
//   }

//   // if no type has been called with Reducer function , then just return the old state.
//   return state;
// };

const initialState = { counter: 0, togCounter: true };
const counterSlice = createSlice({
  name: "counter",
  // We need initialState to get counter and showCounter properties .
  initialState, 
  reducers: {
    increment(state) {state.counter++},
    decrement(state) {state.counter--},
    increase(state , action) {state.counter = state.counter + action.payload },
    toggleCounter(state) {state.togCounter = !state.togCounter},
  },
});

const reduxStore = configureStore({
  reducer: counterSlice.reducer
}); 

export const counterActions = counterSlice.actions;

export default reduxStore;

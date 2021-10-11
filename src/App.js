import React, { useReducer } from "react";

import "./App.css";

const initialState = {
  firstCounter: 0,
  secoundCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "reset":
      return initialState;
    case "increment by 5":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement by 5":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secoundCounter: state.secoundCounter + action.value };
    case "decrement2":
      return { ...state, secoundCounter: state.secoundCounter - action.value };
    default:
      return state;
  }
};
function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h3>FirstCount - {count.firstCounter}</h3>
      <h3>SecondCount - {count.secoundCounter}</h3>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "increment by 5", value: 5 })}>
        Increment by 5
      </button>
      <button onClick={() => dispatch({ type: "decrement by 5", value: 5 })}>
        Decrement by 5
      </button>
      <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
        Increment2
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
        Decrement2
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default App;

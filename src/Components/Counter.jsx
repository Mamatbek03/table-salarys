import React from "react";

const Counter = ({ current, increment, decrement }) => {
  return (
    <div>
      <h4>{current}</h4>
      <button onClick={() => increment(current)}>plus</button>
      <button onClick={() => decrement(current)}>minus</button>
    </div>
  );
};

export default Counter;

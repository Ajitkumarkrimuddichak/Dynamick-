import React, { useState } from "react";

function Count() {
  //const state = useState();
  const [count, setCount] = useState(0);
  const IncNum = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={IncNum}>Clicl me</button>
    </>
  );
}

export default Count;

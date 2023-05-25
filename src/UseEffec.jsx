import React, { useState, useEffect } from "react";

const UseEffec = () => {
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);

  useEffect(() => {
    alert("I am clicked");
    console.log("i am clicked");
  }, [num]);

  return (
    <>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Click me {num}
      </button>
      <br />
      <button
        onClick={() => {
          setNums(nums + 1);
        }}
      >
        Click {nums}
      </button>
      <br />
    </>
  );
};

export default UseEffec;

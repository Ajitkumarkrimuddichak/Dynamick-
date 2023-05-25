import React, { useState, useEffect } from "react";

const TitleuseEffect = () => {
  const [num, setNum] = useState(0);
  useEffect(() => {
    document.title = `you clicked me ${num} times`;
  });

  return (
    <div>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        click ti {num}
      </button>
    </div>
  );
};

export default TitleuseEffect;

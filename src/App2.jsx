import React, { useState } from "react";
import Test from "./Test";

export default function App2() {
  const [isTrue, setIsTrue] = useState(false);
  const [count, setCount] = useState(1);

  return (
    <div>
      <h1>{isTrue ? "True" : "False"}</h1>
      <button onClick={() => setIsTrue(!isTrue)}>Enter</button>
      <button onClick={() => setCount((prev) => prev + 1)}>Enter</button>

      <Test count={count} />
    </div>
  );
}

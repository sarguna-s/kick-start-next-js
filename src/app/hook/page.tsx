"use client";

import { useState, useEffect } from "react";

const Hook = () => {
  let varCount = 0;
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(">>>>>>>>>>>>>>>>>>>>> inside tha USE_EFFECT :", count);
  }, [count]);

  const onIncrease = () => {
    setCount(count + 1);
    console.log(">>>>>>>>>>>>  increase var_count:", count);
    // console.log(">>>>>>>> after  increase value:");
  };

  const onDecrease = () => {
    setCount(count - 1);
    console.log(">>>>>>>>>>>>>>>>  decrease var_count", count);
    // console.log(">>>>>>>>>>>>>after  decrease value");
  };

  const onReset = () => {
    setCount(0);
    console.log(">>>>>>>>>>>>>> reset var_count", count);
    // console.log(">>>>>>>>>>>>> after  value");
  };
  console.log(">>>>>>>>>>outside value:", count);

  return (
    <section>
      <h1> useState </h1>
      <button onClick={onIncrease}> + </button>
      <button onClick={onDecrease}> - </button>
      <button onClick={onReset}>Reset</button>
      <h1>{count}</h1>
    </section>
  );
};
export default Hook;

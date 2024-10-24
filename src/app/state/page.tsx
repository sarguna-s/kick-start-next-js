"use client";

import { useState } from "react";

const State = () => {
  const [age, setAge] = useState(5);

  const onAdd = () => {
    setAge(age + 1);
    console.log("your age is:", age);
  };
  const onReset = () => {
    setAge(5);
  };
  return (
    <section>
      <h1> use State </h1>
      <button onClick={onAdd}>click me </button>
      <button onClick={onReset}>Reset</button>
    </section>
  );
};
export default State;

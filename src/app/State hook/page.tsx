import { useState } from "react";

const State = () => {
  const [count, setCount] = useState();

  return (
    <section>
      <h1>React Hook</h1>
      <button>Add</button>
    </section>
  );
};

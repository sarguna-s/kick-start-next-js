"use client";

import {
  useEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
  useDeferredValue,
  useLayoutEffect,
  useTransition,
} from "react";

const Hooks = () => {
  let varCount = 0;
  const [count, setCount] = useState(0);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const deferredCount = useDeferredValue(count);

  /* 
  PAGE LIFE-CYCLE
  1. MOUNTING
  2. UPDATING
  3. UNMOUNTING
  */

  /* 
  1. This is a Life-cycle Hook
  2. Function Refresh the callback based on dependency
  3. It will run at lease once if no dependency is provided
  */
  useEffect(() => {
    console.log(">>>>>>>>>>>>>>>>: INSIDE USE_EFFECT: ", count);

    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor =
        count % 2 === 0 ? "green" : "red";
    }
    // return showAlert();

    // return () => {
    //   console.log(">>>>>>>>>>>>>>>>: COMPONENT IS UNMOUNTING: ", count);
    // };
  }, [count]);

  // let value = 0;
  // for (let index = 0; index < 5; index++) {
  //   console.log(">>>>>>>>>>>>>>>>: INSIDE LOOP: ", value);
  //   value += index;
  // }

  // console.log(">>>>>>>>>>>>>>>>: LOOPED VALUE: ", value);

  const memoizedValue = useMemo(() => {
    let value = 0;
    for (let index = 0; index < count; index++) {
      console.log(">>>>>>>>>>>>>>>>: INSIDE LOOP: ", index, value);
      value += count;
    }

    return value;
  }, [count]); /* useMemo return memoized value */
  console.log(">>>>>>>>>>>>>>>>: memoizedValue VALUE: ", memoizedValue);

  const showAlert = useCallback(() => {
    alert("COUNT VALUE IS: " + count);
    return showAlert();
  }, [count]);
  /* useCallback returns memoized function or callback */

  const onIncrease = () => {
    // console.log(">>>>>>>>>>>>>>>>: COUNT BEFORE UPDATE: ", count);
    // console.log(">>>>>>>>>>>>>>>>: VAR_COUNT BEFORE UPDATE: ", varCount);

    varCount += 1;
    setCount(count + 1);
    // console.log(">>>>>>>>>>>>>>>>: COUNT AFTER UPDATE: ", count);
    // console.log(">>>>>>>>>>>>>>>>: VAR_COUNT AFTER UPDATE: ", varCount);
  };

  const onDecrease = () => {
    // console.log(">>>>>>>>>>>>>>>>: COUNT BEFORE UPDATE: ", count);
    // console.log(">>>>>>>>>>>>>>>>: VAR_COUNT BEFORE UPDATE: ", varCount);

    varCount -= 1;
    setCount((prev) => prev - 1);
    // console.log(">>>>>>>>>>>>>>>>: COUNT AFTER UPDATE: ", count);
    // console.log(">>>>>>>>>>>>>>>>: VAR_COUNT AFTER UPDATE: ", varCount);
  };

  const onReset = () => {
    // console.log(">>>>>>>>>>>>>>>>: COUNT BEFORE UPDATE: ", count);
    // console.log(">>>>>>>>>>>>>>>>: VAR_COUNT BEFORE UPDATE: ", varCount);

    varCount = 0;
    setCount(0);
    // console.log(">>>>>>>>>>>>>>>>: COUNT AFTER UPDATE: ", count);
    // console.log(">>>>>>>>>>>>>>>>: VAR_COUNT AFTER UPDATE: ", varCount);
  };

  console.log(">>>>>>>>>>>>>>>>: OUTSIDE: ", count, varCount);
  console.log(">>>>>>>>>>>>>>>>: DEFERRED VALUE IS: ", count, deferredCount);

  return (
    <section>
      <h1>Hooks</h1>
      <section>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
        <button onClick={onReset}>Reset</button>
        <h1>{count}</h1>
      </section>
      <button ref={buttonRef}>Am I EVEN </button>
      <h1>MEMOIZED VALUE: {memoizedValue}</h1>
    </section>
  );
};
export default Hooks;

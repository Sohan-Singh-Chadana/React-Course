import React, { useEffect, useState } from "react";

const Counter = (props) => {
  const { name } = props;
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // useEffect(() => {
  //   console.log("useEffect");
  // }, []);

  // useEffect(() => {
  //   console.log("useEffect");
  // }, [counter]);

  useEffect(() => {
    const timerId = setInterval(() => {
      console.log("hii new");
    }, 1000);

    return () => {
      console.log("cleanup function");
      clearInterval(timerId);
    };
  }, []);

  return (
    <>
      <h1 className="py-3  text-4xl font-bold">{name}</h1>
      <div className="flex items-center gap-4">
        <button
          onClick={() => {
            counter === 0 ? setCounter(counter) : setCounter(counter - 1);
          }}
          className="bg-slate-500 px-2 py-1  text-xl font-bold text-white"
        >
          -
        </button>
        <h1 className=" py-3  text-3xl font-bold ">{counter}</h1>

        <button
          onClick={() => setCounter(counter + 1)}
          className="m-2 bg-slate-500 px-2  py-1 text-xl font-bold text-white"
        >
          +
        </button>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => {
            counter2 === 0 ? setCounter2(counter2) : setCounter2(counter2 - 1);
          }}
          className="bg-slate-500 px-2 py-1  text-xl font-bold text-white"
        >
          -
        </button>
        <h1 className=" py-3  text-3xl font-bold ">{counter2}</h1>

        <button
          onClick={() => setCounter2(counter2 + 1)}
          className="m-2 bg-slate-500 px-2  py-1 text-xl font-bold text-white"
        >
          +
        </button>
      </div>
    </>
  );
};

export default Counter;

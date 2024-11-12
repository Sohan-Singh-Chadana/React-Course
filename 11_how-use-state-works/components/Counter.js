import React, { useState } from "react";

const states = [0, "Sohan Singh"];

const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Sohan");

  console.log("rendering");

  return (
    <div style={{ textAlign: "center" }}>
      <h1> {count} </h1> <h2> {name} </h2>
      <button
        onClick={() => {
          setName("Sohan Singh");
          setCount((previousState) => previousState + 1);
          setCount((previousState) => previousState + 1);
          setCount((previousState) => previousState + 1);
          // setCount(count + 1);
        }}
      >
        Increase Count{" "}
      </button>{" "}
    </div>
  );
};

export default Counter;

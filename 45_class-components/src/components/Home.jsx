import React from "react";
import Counter from "./Counter";
import OldCounter from "./OldCounter";

export default function Home() {
  return (
    <>
      <h1 className="text-xl">
        Welcome to Our Home <br /> Hello I am sohan
      </h1>
      <Counter name="New Counter" />
      <hr className="my-4 border-black" />
      <OldCounter name="Old Counter" />
    </>
  );
}

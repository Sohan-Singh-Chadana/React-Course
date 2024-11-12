import React from "react";
import Input from "./Input";

const SinghIn = ({ setShowModel }) => {
  return (
    <div
      className="fixed left-0 top-0 flex h-screen w-full items-center justify-center bg-[#10101054]"
      onClick={() => {
        setShowModel(false);
      }}
    >
      <form
        className="relative flex h-[250px] w-[300px] flex-col items-center justify-center gap-6 rounded-md bg-white"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h1 className="text-2xl font-medium">Login Now </h1>
        <p
          className="absolute right-3 top-1 cursor-pointer text-lg font-bold"
          onClick={() => setShowModel(false)}
        >
          ✕
        </p>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Your Enter Email"
        />
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Enter Your Password"
        />

        <button className="w-24 cursor-pointer rounded bg-blue-400 py-1 text-lg font-normal text-white">
          Login
        </button>
      </form>
    </div>
  );
};

export default SinghIn;

import React from "react";

const Input = ({ type, id, name, placeholder }) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      className="border border-gray-500 p-1"
    />
  );
};

export default Input;

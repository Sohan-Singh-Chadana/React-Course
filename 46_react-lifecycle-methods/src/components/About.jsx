import React, { useState } from "react";
// import { todos } from "../data";

export default function About() {
  const [todosList, setTodosList] = useState([]);
  return (
    <>
      <h1 className="text-xl">We are ProCodrrs</h1>
      <button
        className="my-3 rounded bg-slate-500 px-2 py-1 text-white"
        onClick={() => {
          import("../data").then((modul) => setTodosList(modul.todos));
        }}
      >
        {" "}
        Load Data
      </button>
      <ul>
        {todosList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}

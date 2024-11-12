// import React from "react";
// import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";

const h1 = <h1> Hello World </h1>;

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(h1);
console.log("Hello World!");

// if (module.hot) {
//   module.hot.accept();
// }

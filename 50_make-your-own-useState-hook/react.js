import React from "./react";
import App from "./App.js";
import { render } from "./react-dom";

function createElement(type, props, ...children) {
  const reactElement = {
    type,
    props: {
      ...props,
    },
  };

  if (children.length) reactElement.props.children = children;

  return reactElement;
}

let state = [];
let stateIndex = 0;

export const useState = (initialState) => {
  state[stateIndex] = state[stateIndex] ?? initialState;
  const localIndex = stateIndex;

  const setState = (newState) => {
    state[localIndex] = newState;
    stateIndex = 0;
    render(<App />, document.getElementById("root"));
  };

  stateIndex++;

  return [state[localIndex], setState];
};

export default {
  createElement,
};

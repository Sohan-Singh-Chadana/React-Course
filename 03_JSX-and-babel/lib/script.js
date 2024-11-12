const container = /*#__PURE__*/ React.createElement(
  "div",
  {
    className: "container",
    id: "container",
  },
  /*#__PURE__*/
  React.createElement(
    "section",
    null,
    /*#__PURE__*/
    React.createElement(
      "p",
      null,
      " The library for web and native user interfaces "
    ),
    " ",
    /*#__PURE__*/
    React.createElement("img", {
      src: "https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg",
      style: {
        width: 200,
        backgroundColor: "transparant",
        borderRadius: 8,
        padding: 16,
      },
    }),
    " "
  ),
  " ",
  /*#__PURE__*/
  React.createElement(
    "section",
    null,
    /*#__PURE__*/
    React.createElement(
      "form",
      null,
      /*#__PURE__*/
      React.createElement(
        "div",
        {
          className: "input-container",
        },
        /*#__PURE__*/
        React.createElement(
          "label",
          {
            htmlFor: "userName",
          },
          " Username "
        ),
        " ",
        /*#__PURE__*/
        React.createElement("input", {
          id: "userName",
        })
      ),
      " ",
      /*#__PURE__*/
      React.createElement(
        "div",
        {
          className: "input-container",
        },
        /*#__PURE__*/
        React.createElement(
          "label",
          {
            htmlFor: "userPassword",
          },
          " Password "
        ),
        " ",
        /*#__PURE__*/
        React.createElement("input", {
          id: "userPassword",
          type: "password",
        })
      ),
      " "
    ),
    " "
  ),
  " "
);
console.log(container);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(container);

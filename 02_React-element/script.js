const container = React.createElement(
  "div",
  { className: "container", id: "container" },
  [
    React.createElement("section", { key: 1 }, [
      React.createElement(
        "p",
        { key: 1 },
        "The library for web and native user interfaces"
      ),
      React.createElement("img", {
        key: 2,
        style: {
          width: 200,
          backgroundColor: "#ccc",
          borderRadius: 8,
          padding: 16,
        },
        src: "https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg",
      }),
    ]),
    React.createElement("section", { key: 2 }, [
      React.createElement("form", { key: 1 }, [
        React.createElement("div", { key: 1, className: "input-container" }, [
          React.createElement(
            "label",
            { key: 1, htmlFor: "userName" },
            "Username"
          ),
          React.createElement("input", { key: 2, id: "userName" }),
        ]),
        React.createElement("div", { key: 2, className: "input-container" }, [
          React.createElement(
            "label",
            { key: 1, htmlFor: "userPassword" },
            "Password"
          ),
          React.createElement("input", {
            key: 2,
            id: "userPassword",
            type: "password",
          }),
        ]),
      ]),
    ]),
  ]
);

// const container = (
//   <div class="container" id="container">
//     <section>
//       <p> The library for web and native user interfaces </p>{" "}
//       <img
//         src="https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg"
//         style="
//     width: 200 px; background - color: rgb(204, 204, 204); border - radius: 8 px; padding: 16 px;
//     "
//       />{" "}
//     </section>{" "}
//     <section>
//       <form>
//         <div class="input-container">
//           <label for="userName"> Username </label> <input id="userName" />
//         </div>{" "}
//         <div class="input-container">
//           <label for="userPassword"> Password </label>{" "}
//           <input id="userPassword" type="password" />
//         </div>{" "}
//       </form>{" "}
//     </section>{" "}
//   </div>
// );

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(container);

//* practice perperse 1
// const h2 = {
//     $$typeof: Symbol.for('react.element'),
//     type: "h2",
//     ref: null,
//     props: {
//         className: "subheading",
//         id: "subtitle",
//         children: [{
//                 $$typeof: Symbol.for('react.element'),
//                 type: "span",
//                 ref: null,
//                 props: {
//                     children: [{
//                         $$typeof: Symbol.for('react.element'),
//                         type: "button",
//                         ref: null,
//                         props: {
//                             children: "Hello Button",
//                         },
//                     }, {
//                         $$typeof: Symbol.for('react.element'),
//                         type: "button",
//                         ref: null,
//                         props: {
//                             children: "Hello Button2",
//                         },
//                     }],
//                 },
//             },
//             {
//                 $$typeof: Symbol.for('react.element'),
//                 type: "i",
//                 ref: null,
//                 props: {
//                     children: "Hello React",
//                 },
//             },
//             {
//                 $$typeof: Symbol.for('react.element'),
//                 type: "b",
//                 ref: null,
//                 props: {
//                     children: "Hello React",
//                 },
//             },
//         ],
//     },
// };

const container = (
  <div className="container" id="container">
    <section>
      <p> The library for web and native user interfaces </p>{" "}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg"
        style={{
          width: 200,
          backgroundColor: "transparant",
          borderRadius: 8,
          padding: 16,
        }}
      />{" "}
    </section>{" "}
    <section>
      <form>
        <div className="input-container">
          <label htmlFor="userName"> Username </label> <input id="userName" />
        </div>{" "}
        <div className="input-container">
          <label htmlFor="userPassword"> Password </label>{" "}
          <input id="userPassword" type="password" />
        </div>{" "}
      </form>{" "}
    </section>{" "}
  </div>
);
console.log(container);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(container);

import AppleCounter from "./components/AppleCounter";
import Counter from "./components/Counter";

const App = () => {
  return (
    <div>
      {" "}
      <Counter counterName="Timer">
        <AppleCounter />
      </Counter>{" "}
      {/* <AppleCounter /> */}{" "}
    </div>
  );
};

export default App;

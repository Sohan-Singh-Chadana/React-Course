import { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1 id="counter-title" className="py-3  text-3xl font-bold">
          {name}
        </h1>
        <div>
          <h1
            onClick={this.props.increseCount}
            className="cursor-pointer bg-sky-200  p-3 text-center text-3xl font-bold"
          >
            {this.props.count}
          </h1>
        </div>
      </>
    );
  }
}

export default withCounter(ClickCounter);

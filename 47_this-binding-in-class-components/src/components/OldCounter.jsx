import { Component } from "react";

class OldCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.timeID = null;
    this.increseCount = this.increseCount.bind(this);
  }

  increseCount() {
    this.setState({ count: this.state.count + 1 });
  }
  decreseCount() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    const { name } = this.props;
    return (
      <>
        <h1 id="counter-title" className="py-3  text-4xl font-bold">
          {name}
        </h1>
        <div className="flex items-center gap-4">
          <button
            // onClick={() => {
            //   this.state.count === 0
            //     ? this.state.count
            //     : this.setState({ count: this.state.count - 1 });
            // }}

            onClick={this.decreseCount.bind(this)}
            className="bg-slate-500 px-2 py-1  text-xl font-bold text-white"
          >
            -
          </button>
          <h1 className=" py-3  text-3xl font-bold ">{this.state.count}</h1>

          <button
            onClick={this.increseCount}
            // onClick={this.onClick.bind(this)}
            className="m-2 bg-slate-500 px-2  py-1 text-xl font-bold text-white"
          >
            +
          </button>
        </div>
      </>
    );
  }
}

export default OldCounter;

import { Component } from "react";

class OldCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
    };
    // console.log(this.props);
  }

  render() {
    const { name } = this.props;
    return (
      <>
        <h1 className="py-3  text-4xl font-bold">{name}</h1>
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              this.state.count === 0
                ? this.state.count
                : this.setState({ count: this.state.count - 1 });
            }}
            className="bg-slate-500 px-2 py-1  text-xl font-bold text-white"
          >
            -
          </button>
          <h1 className=" py-3  text-3xl font-bold ">{this.state.count}</h1>

          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
            className="m-2 bg-slate-500 px-2  py-1 text-xl font-bold text-white"
          >
            +
          </button>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              this.state.count2 === 0
                ? this.state.count2
                : this.setState({ count2: this.state.count2 - 1 });
            }}
            className="bg-slate-500 px-2 py-1  text-xl font-bold text-white"
          >
            -
          </button>
          <h1 className=" py-3  text-3xl font-bold ">{this.state.count2}</h1>

          <button
            onClick={() => this.setState({ count2: this.state.count2 + 1 })}
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

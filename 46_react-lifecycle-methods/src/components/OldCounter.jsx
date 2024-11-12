import { Component } from "react";

class OldCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.timeID = null;

    // this.onClick = this.onClick.bind(this);

    // console.log(this.props);
    console.log("constructor");
  }

  onClick() {
    this.setState({ count: this.state.count + 1 });
  }

  componentDidMount() {
    console.log("componentDidMount");

    // this.timeID = setInterval(() => {
    //   console.log("hii");
    // }, 1000);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    // clearInterval(this.timeID);
  }

  render() {
    console.log("render");
    const { name } = this.props;
    return (
      <>
        <h1 id="counter-title" className="py-3  text-4xl font-bold">
          {name}
        </h1>
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
            // onClick={function () {
            //   // this.setState({ count: this.state.count + 1 });
            //   this.onClick;
            // }}
            onClick={this.onClick.bind(this)}
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

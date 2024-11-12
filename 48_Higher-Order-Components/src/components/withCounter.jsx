import { Component } from "react";

const withCounter = (WrappedComponent) => {
  return class NewComponents extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
      this.increseCount = this.increseCount.bind(this);
    }

    increseCount() {
      this.setState({ count: this.state.count + 1 });
    }

    render() {
      return (
        <WrappedComponent
          increseCount={this.increseCount}
          count={this.state.count}
          {...this.props}
        />
      );
    }
  };
};

export default withCounter;

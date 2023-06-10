import React, { Component } from "react";
import Main from "./components/Main.jsx";

class App extends Component {
  state = { count: 0 };
  

  stateClick = () => {
    this.setState({ count: this.state.count + 1 });
  };


  render() {
    return (
      <>
        <p>Welcome to Khes' Reactor</p>
        <Main message={"Send me a message!"} />
        <p onClick={this.stateClick}>Messages Sent: {this.state.count}</p>
      </>
    );
  }
}

export default App;

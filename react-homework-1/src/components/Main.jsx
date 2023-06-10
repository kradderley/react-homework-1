import React, { Component } from "react";

class Main extends Component {
  onClick = () => {
    console.log("Message Sent!");
  };

  render() {
    return (
      <>
        <button onClick={this.onClick}>{this.props.message} </button>
      </>
    );
  }
}

export default Main;

import React, { Component } from "react";
import spinner from "./spinner.gif";

export default class Spinner extends Component {
  render() {
    return (
      <React.Fragment>
        <img
          src={spinner}
          alt="Loading..."
          style={{ width: "200px", margin: "40px auto", display: "block" }}
        />
      </React.Fragment>
    );
  }
}

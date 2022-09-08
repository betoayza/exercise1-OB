import React, { Component } from "react";
import ComponentB from "./ComponentB";

export default class ComponentA extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      lastName: "",
      email: "",
      conected: false,
    };
  }

  render() {
    return (
      <div>
        <ComponentB
          name={this.state.name}
          lastName={this.state.lastName}
          email={this.state.email}
          conected={this.state.conected}
        />
      </div>
    );
  }
}

import React, { Component } from "react";
import ComponentB from "./ComponentB";

export default class ComponentA extends Component {
  constructor() {
    super();
    this.state = {
      name: "Juan",
      lastName: "Hernandez",
      email: "juanh@gmail.com",
      conected: false,
    };

    //bind
    this.updateState = this.updateState.bind(this);
  }

  updateState(state) {
    this.setState({ conected: state });
  }

  render() {
    return (
      <div>
        <ComponentB
          name={this.state.name}
          lastName={this.state.lastName}
          email={this.state.email}
          conected={this.state.conected}
          updateState={this.updateState}
        />
      </div>
    );
  }
}

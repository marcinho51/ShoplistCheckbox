import React, { Component } from "react";
import "./Main.scss";
import Hello from "../Hello/Hello";

import YourProducts from "../YourProducts/YourProducts";

class Main extends Component {
  state = {
    user: ""
  };

  handleChange = event => {
    this.setState({
      user: event.target.value
    });
  };

  handleButton = () => {
    const { user } = this.state;
    localStorage.setItem("user", user);
    this.setState({
      user: ""
    });
  };

  user;

  render() {
    const userFromLocalStorage = JSON.stringify(localStorage.getItem("user"));
    return (
      <>
        <h1>Witaj {userFromLocalStorage}</h1>
        <Hello
          user={this.state.user}
          change={this.handleChange}
          buttonChange={this.handleButton}
        />
        <YourProducts />
      </>
    );
  }
}

export default Main;

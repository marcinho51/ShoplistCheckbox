import React, { Component } from "react";
import "./Hello.scss";

class Hello extends Component {
  render() {
    const userFromLocalStorage = localStorage.getItem("user");
    const firstEntry = (
      <section className="first-entry">
        <h3>Hello,</h3>
        <h4>it seems you're </h4>
        <h4>the first time here!</h4>
        <input
          id="userName"
          type="text"
          placeholder="enter your name here"
          onChange={this.props.change}
          value={this.props.user}
        />
        <input
          id="userNameButton"
          class="button"
          type="button"
          value="Gotowe!"
          onClick={this.props.buttonChange}
        />
        <h5>Enter your name and we'll organize</h5>
        <h5>this application for you :)</h5>
      </section>
    );

    const secondEntry = (
      <section className="second-entry">
        <h1>Hello {userFromLocalStorage}!</h1>
        <h5>Let's choose and create your products and recipes...</h5>
        <h5>... and create your shopping list :)</h5>
      </section>
    );

    return userFromLocalStorage ? secondEntry : firstEntry;
  }
}

export default Hello;

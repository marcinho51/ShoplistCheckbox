import React, { Component } from "react";
import "./Hello.scss";
import { Link } from "react-router-dom";

class Hello extends Component {
  render() {
    const userFromLocalStorage = localStorage.getItem("user");
    const firstEntry = (
      <div className="first-entry">
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
      </div>
    );

    const secondEntry = (
      <div className="second-entry">
        <h1>Hello {userFromLocalStorage}!</h1>
        <h5>Let's choose and create your products and recipes...</h5>
        <h5>... and create your shopping list :)</h5>
        <button id="letsGo">
          <Link to="/productsandrecipes">Let's go!</Link>
        </button>
      </div>
    );

    return (
      <div className="wrapper">
        <div className="row">
          <div className="col-12">
            {userFromLocalStorage ? secondEntry : firstEntry}
          </div>
        </div>
      </div>
    );
  }
}

export default Hello;

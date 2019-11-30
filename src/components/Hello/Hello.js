import React, { Component } from "react";
import "./Hello.scss";
import { Link } from "react-router-dom";

class Hello extends Component {
  render() {
    const userFromLocalStorage = localStorage.getItem("user");
    const firstEntry = (
      <div className="first-entry">
        <h3>Hello,</h3>
        <h5>it seems you're </h5>
        <h5>the first time here!</h5>
        <h5>Enter your name and we'll </h5>
        <h5>organize this application for you!</h5>
        <div className="inputs">
          <input
            id="userName"
            type="text"
            placeholder="Enter your name "
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
        </div>
      </div>
    );

    const secondEntry = (
      <div className="second-entry">
        <h1>Hello {userFromLocalStorage}!</h1>
        <h5>Let's add your products and recipes...</h5>
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

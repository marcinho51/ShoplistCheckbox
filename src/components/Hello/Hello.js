import React, { Component } from "react";
import "./Hello.scss";

class Hello extends Component {
  render() {
    return (
      <section className="first-entry">
        <h3>Witaj,</h3>
        <h4>wygląda na to, że jesteś tutaj</h4>
        <h4>pierwszy raz!</h4>
        <input
          id="userName"
          type="text"
          placeholder="tutaj wpisz jak masz na imię"
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
        <h5>Podaj nam swoje imię, a my zorganizujemy</h5>
        <h5>dla Ciebie naszą aplikację:)</h5>
      </section>
    );
  }
}

export default Hello;

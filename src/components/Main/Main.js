import React, { Component } from "react";
import "./Main.scss";
import Hello from "../Hello/Hello";
// import NewShoplist from "../NewShoplist/NewShoplist";
import YourProducts from "../YourProducts/YourProducts";
import YourRecipes from "../YourRecipes/YourRecipes";

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
        <YourRecipes />
        {/* <NewShoplist /> */}
      </>
    );
  }
}

export default Main;

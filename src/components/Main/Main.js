import React, { Component } from "react";
import "./Main.scss";
import Hello from "../Hello/Hello";
import NewShoplist from "../NewShoplist/NewShoplist";
import YourProducts from "../YourProducts/YourProducts";
import YourRecipes from "../YourRecipes/YourRecipes";

class Main extends Component {
  render() {
    return (
      <>
        <Hello />
        <YourProducts />
        <YourRecipes />
        <NewShoplist />
      </>
    );
  }
}

export default Main;

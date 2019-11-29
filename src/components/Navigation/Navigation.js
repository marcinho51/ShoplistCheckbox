import React, { Component } from "react";
import "./Navigation.scss";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  render() {
    const active = {
      color: "blue"
    };
    return (
      <nav>
        <ul>
          <li>
            <NavLink activeStyle={active} exact to="/">
              Główna
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={active} to="/products">
              Your Products
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={active} to="/recipes">
              Your Recipes
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={active} to="/shoplist">
              Your Shoplist
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;

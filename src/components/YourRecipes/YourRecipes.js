import React, { Component } from "react";
import "./YourRecipes.scss";
import NewRecipe from "../NewRecipe/NewRecipe";

class YourRecipes extends Component {
  state = {
    recipes: []
  };
  render() {
    return (
      <div className="col-2 widget-yourRecipes">
        <div className="cross">
          <i className="fas fa-plus fa-2x"></i>
        </div>
        <p className="add-recipe">Twoje przepisy</p>
        <h1>Your recipes:</h1>
        <NewRecipe />
      </div>
    );
  }
}

export default YourRecipes;

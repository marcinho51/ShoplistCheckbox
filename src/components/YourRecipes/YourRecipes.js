import React, { Component } from "react";
import "./YourRecipes.scss";
import NewRecipe from "../NewRecipe/NewRecipe";
import Recipe from "../Recipe/Recipe";

class YourRecipes extends Component {
  state = {
    name: "",
    ingredient1: {
      product: ""
    },
    ingredient2: { product: "" },
    ingredient3: { product: "" },
    ingredient4: { product: "" },
    ingredient5: { product: "" }
  };

  handleDefineName = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleDefineIngredient = event => {
    this.setState({
      [`${event.target.name}`]: {
        ...this.state[event.target.name],
        product: event.target.value
      }
    });
  };

  handleChangeQuantity = event => {
    this.setState({
      [`${event.target.name}`]: {
        ...this.state[event.target.name],
        quantity: event.target.value
      }
    });
  };

  handleSelectQuantity = event => {
    this.setState({
      [event.target.name]: {
        ...this.state[event.target.name],
        typeOfQuantity: event.target.value
      }
    });
  };

  selectChange = event => {
    this.setState({
      [`${event.target.name}`]: {
        ...this.state[event.target.name],
        category: event.target.value
      }
    });
  };

  addRecipe = () => {
    let recipes = JSON.parse(localStorage.getItem("recipes") || "[]");
    let recipe = {
      name: this.state.name,
      ingredient1: {
        product: this.state.ingredient1.product,
        category: this.state.ingredient1.category,
        quantity: this.state.ingredient1.quantity,
        typeOfQuantity: this.state.ingredient1.typeOfQuantity
      },
      ingredient2: {
        product: this.state.ingredient2.product,
        category: this.state.ingredient2.category,
        quantity: this.state.ingredient2.quantity,
        typeOfQuantity: this.state.ingredient2.typeOfQuantity
      },
      ingredient3: {
        product: this.state.ingredient3.product,
        category: this.state.ingredient3.category,
        quantity: this.state.ingredient3.quantity,
        typeOfQuantity: this.state.ingredient4.typeOfQuantity
      },
      ingredient4: {
        product: this.state.ingredient4.product,
        category: this.state.ingredient4.category,
        quantity: this.state.ingredient4.quantity,
        typeOfQuantity: this.state.ingredient4.typeOfQuantity
      },
      ingredient5: {
        product: this.state.ingredient5.product,
        category: this.state.ingredient5.category,
        quantity: this.state.ingredient5.quantity,
        typeOfQuantity: this.state.ingredient5.typeOfQuantity
      }
    };
    recipes.push(recipe);
    localStorage.setItem("recipes", JSON.stringify(recipes));
    this.setState({
      name: "",
      ingredient1: {
        product: "",
        category: "",
        quantity: "",
        typeOfQuantity: ""
      },
      ingredient2: {
        product: "",
        category: "",
        quantity: "",
        typeOfQuantity: ""
      },
      ingredient3: {
        product: "",
        category: "",
        quantity: "",
        typeOfQuantity: ""
      },
      ingredient4: {
        product: "",
        category: "",
        quantity: "",
        typeOfQuantity: ""
      },
      ingredient5: {
        product: "",
        category: "",
        quantity: "",
        typeOfQuantity: ""
      }
    });
  };

  removeRecipeFromShoplist = (
    ingredient1,
    ingredient2,
    ingredient3,
    ingredient4,
    ingredient5
  ) => {
    const ingredients = [
      ingredient1,
      ingredient2,
      ingredient3,
      ingredient4,
      ingredient5
    ];
  };

  render() {
    return (
      <div className="col-2 widget-yourRecipes">
        <div className="cross">
          <i className="fas fa-plus fa-2x"></i>
        </div>

        <div>
          <h1>Your Recipes</h1>
        </div>
        <NewRecipe
          handleDefineName={this.handleDefineName}
          handleDefineIngredient={this.handleDefineIngredient}
          handleChangeQuantity={this.handleChangeQuantity}
          handleSelectQuantity={this.handleSelectQuantity}
          selectChange={this.selectChange}
          ingredient1={this.state.ingredient1}
          ingredient2={this.state.ingredient2}
          ingredient3={this.state.ingredient3}
          ingredient4={this.state.ingredient4}
          ingredient5={this.state.ingredient5}
          name={this.state.name}
          addRecipe={this.addRecipe}
          removeRecipeFromShoplist={this.removeRecipeFromShoplist}
        />
        <h1>List of Recipes</h1>
        {localStorage.getItem("recipes") ? (
          <>
            <table>
              <tbody>
                {JSON.parse(localStorage.getItem("recipes")).map(item => (
                  <Recipe
                    name={item.name}
                    key={item.name}
                    ingredient1={item.ingredient1}
                    ingredient2={item.ingredient2}
                    ingredient3={item.ingredient3}
                    ingredient4={item.ingredient4}
                    ingredient5={item.ingredient5}
                    addRecipeToShoplist={this.props.addRecipeToShoplist}
                  />
                ))}
              </tbody>
            </table>
          </>
        ) : null}
      </div>
    );
  }
}

export default YourRecipes;

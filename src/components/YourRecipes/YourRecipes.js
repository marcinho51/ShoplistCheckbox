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
    ingredient5: { product: "" },
    products: this.props.products,
    recipesFromLocalStorage: JSON.parse(localStorage.getItem("recipes"))
  };

  // name of the new recipe
  nameOfTheRecipe = event => {
    this.setState({
      name: event.target.value
    });
  };

  // ingredient of the new recipe
  ingredientOfTheRecipe = event => {
    this.setState({
      [`${event.target.name}`]: {
        ...this.state[event.target.name],
        product: event.target.value
      }
    });
  };

  // quantity of the ingredient from the new recipe
  quantityOfTheIngredient = event => {
    this.setState({
      [`${event.target.name}`]: {
        ...this.state[event.target.name],
        quantity: event.target.value
      }
    });
  };

  // type of quantity of the ingredient from the new recipe
  typeOfQuantityOfTheIngredient = event => {
    this.setState({
      [event.target.name]: {
        ...this.state[event.target.name],
        typeOfQuantity: event.target.value
      }
    });
  };

  // category of the ingredient from the new recipe
  categoryOfTheIngredient = event => {
    this.setState({
      [`${event.target.name}`]: {
        ...this.state[event.target.name],
        category: event.target.value
      }
    });
  };

  // remove recipe from local storage
  removeRecipeFromLocalStorage = name => {
    let arr = JSON.parse(localStorage.getItem("recipes"));
    let arr2 = arr.filter(item => item.name !== name);
    localStorage.setItem("recipes", JSON.stringify(arr2));

    this.setState({
      recipesFromLocalStorage: arr2
    });
  };

  // add recipe to local storage
  addRecipeToLocalStorage = () => {
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
    if (
      this.state.name.length > 0 &&
      this.state.ingredient1.product.length > 2 &&
      this.state.ingredient1.quantity !== undefined &&
      this.state.ingredient1.category !== undefined &&
      this.state.ingredient1.typeOfQuantity !== undefined &&
      this.state.ingredient2.product.length > 2 &&
      this.state.ingredient2.quantity !== undefined &&
      this.state.ingredient2.category !== undefined &&
      this.state.ingredient2.typeOfQuantity !== undefined
    ) {
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
    } else {
      this.setState({
        name: "Enter name of the recipe! ",
        ingredient1: {
          product: "Enter at least 2 ingredients"
        }
      });
    }
  };

  render() {
    return (
      <>
        <div className="yourRecipes col-6">
          <h1 id="yourRecipesHeadline">Your Recipes</h1>
          {localStorage.getItem("recipes") ? (
            <>
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
                  removeRecipeFromShoplist={this.props.removeRecipeFromShoplist}
                  removeRecipeFromLocalStorage={
                    this.removeRecipeFromLocalStorage
                  }
                />
              ))}
            </>
          ) : null}

          <h1 id="addNewRecipeHeadline">Add new recipe</h1>
          <NewRecipe
            nameOfTheRecipe={this.nameOfTheRecipe}
            ingredientOfTheRecipe={this.ingredientOfTheRecipe}
            quantityOfTheIngredient={this.quantityOfTheIngredient}
            typeOfQuantityOfTheIngredient={this.typeOfQuantityOfTheIngredient}
            categoryOfTheIngredient={this.categoryOfTheIngredient}
            ingredient1={this.state.ingredient1}
            ingredient2={this.state.ingredient2}
            ingredient3={this.state.ingredient3}
            ingredient4={this.state.ingredient4}
            ingredient5={this.state.ingredient5}
            name={this.state.name}
            addRecipeToLocalStorage={this.addRecipeToLocalStorage}
          />
        </div>
      </>
    );
  }
}

export default YourRecipes;

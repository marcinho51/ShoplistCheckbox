import React, { Component } from "react";
import "./NewRecipe.scss";

class NewRecipe extends Component {
  render() {
    return (
      <div className="newRecipe col-6">
        <h2>Name of the recipe:</h2>
        <input
          type="text"
          name="name"
          value={this.props.name}
          onChange={this.props.nameOfTheRecipe}
          placeholder="Enter the name of the recipe"
        />

        <table>
          <tbody>
            <tr>
              <td className="ingredientsName">
                <input
                  name="ingredient1"
                  placeholder="Enter ingredient's name"
                  type="text"
                  value={this.props.ingredient1.product}
                  onChange={this.props.ingredientOfTheRecipe}
                />
              </td>
              <td className="ingredientsQuantity">
                <input
                  name="ingredient1"
                  type="number"
                  value={this.props.ingredient1.quantity}
                  onChange={this.props.quantityOfTheIngredient}
                />
              </td>

              <td className="ingredientsTypeOfQuantity">
                <select
                  name="ingredient1"
                  value={this.props.ingredient1.typeOfQuantity}
                  onChange={this.props.typeOfQuantityOfTheIngredient}
                >
                  <option>...</option>
                  <option value="items">items</option>
                  <option value="kg">weight [kg]</option>
                </select>
              </td>
              <td className="ingredientsCategory">
                <select
                  name="ingredient1"
                  value={this.props.ingredient1.category}
                  onChange={this.props.categoryOfTheIngredient}
                >
                  <option>...</option>
                  <option value="fruitsAndVegs">Fruits and vegetables</option>
                  <option value="looseProducts">Loose products</option>
                  <option value="forCakes">For cakes</option>
                  <option value="meat">Meat</option>
                  <option value="cannedGoods">Canned goods</option>
                  <option value="sweets">Sweets</option>
                  <option value="frozen">Frozen</option>
                  <option value="bread">Bread</option>
                  <option value="dairy">Dairy</option>
                  <option value="spices">Spices</option>
                  <option value="beverages">Beverages</option>
                  <option value="fats">Fats</option>
                  <option value="cleaningStuff">Cleaning stuff</option>
                  <option value="forHome">For home</option>
                  <option value="cosmetics">Cosmetics</option>
                  <option value="other">Other</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="ingredientsName">
                <input
                  type="text"
                  name="ingredient2"
                  placeholder="Enter ingredient's name"
                  value={this.props.ingredient2.product}
                  onChange={this.props.ingredientOfTheRecipe}
                />
              </td>
              <td className="ingredientsQuantity">
                <input
                  name="ingredient2"
                  type="number"
                  value={this.props.ingredient2.quantity}
                  onChange={this.props.quantityOfTheIngredient}
                />
              </td>

              <td className="ingredientsTypeOfQuantity">
                <select
                  name="ingredient2"
                  value={this.props.ingredient2.typeOfQuantity}
                  onChange={this.props.typeOfQuantityOfTheIngredient}
                >
                  <option>...</option>
                  <option value="items">items</option>
                  <option value="kg">weight [kg]</option>
                </select>
              </td>
              <td className="ingredientsCategory">
                <select
                  name="ingredient2"
                  value={this.props.ingredient2.category}
                  onChange={this.props.categoryOfTheIngredient}
                >
                  <option>...</option>
                  <option value="fruitsAndVegs">Fruits and vegetables</option>
                  <option value="looseProducts">Loose products</option>
                  <option value="forCakes">For cakes</option>
                  <option value="meat">Meat</option>
                  <option value="cannedGoods">Canned goods</option>
                  <option value="sweets">Sweets</option>
                  <option value="frozen">Frozen</option>
                  <option value="bread">Bread</option>
                  <option value="dairy">Dairy</option>
                  <option value="spices">Spices</option>
                  <option value="beverages">Beverages</option>
                  <option value="fats">Fats</option>
                  <option value="cleaningStuff">Cleaning stuff</option>
                  <option value="forHome">For home</option>
                  <option value="cosmetics">Cosmetics</option>
                  <option value="other">Other</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="ingredientsName">
                <input
                  type="text"
                  name="ingredient3"
                  placeholder="Enter ingredient's name"
                  value={this.props.ingredient3.product}
                  onChange={this.props.ingredientOfTheRecipe}
                />
              </td>
              <td className="ingredientsQuantity">
                <input
                  name="ingredient3"
                  type="number"
                  value={this.props.ingredient3.quantity}
                  onChange={this.props.quantityOfTheIngredient}
                />
              </td>

              <td className="ingredientsTypeOfQuantity">
                <select
                  name="ingredient3"
                  value={this.props.ingredient3.typeOfQuantity}
                  onChange={this.props.typeOfQuantityOfTheIngredient}
                >
                  <option>...</option>
                  <option value="items">items</option>
                  <option value="kg">weight [kg]</option>
                </select>
              </td>
              <td className="ingredientsCategory">
                <select
                  name="ingredient3"
                  value={this.props.ingredient3.category}
                  onChange={this.props.categoryOfTheIngredient}
                >
                  <option>...</option>
                  <option value="fruitsAndVegs">Fruits and vegetables</option>
                  <option value="looseProducts">Loose products</option>
                  <option value="forCakes">For cakes</option>
                  <option value="meat">Meat</option>
                  <option value="cannedGoods">Canned goods</option>
                  <option value="sweets">Sweets</option>
                  <option value="frozen">Frozen</option>
                  <option value="bread">Bread</option>
                  <option value="dairy">Dairy</option>
                  <option value="spices">Spices</option>
                  <option value="beverages">Beverages</option>
                  <option value="fats">Fats</option>
                  <option value="cleaningStuff">Cleaning stuff</option>
                  <option value="forHome">For home</option>
                  <option value="cosmetics">Cosmetics</option>
                  <option value="other">Other</option>
                </select>
              </td>
            </tr>

            <tr>
              <td className="ingredientsName">
                <input
                  type="text"
                  name="ingredient4"
                  placeholder="Enter ingredient's name"
                  value={this.props.ingredient4.product}
                  onChange={this.props.ingredientOfTheRecipe}
                />
              </td>
              <td className="ingredientsQuantity">
                <input
                  name="ingredient4"
                  type="number"
                  value={this.props.ingredient4.quantity}
                  onChange={this.props.quantityOfTheIngredient}
                />
              </td>

              <td className="ingredientsTypeOfQuantity">
                <select
                  name="ingredient4"
                  value={this.props.ingredient4.typeOfQuantity}
                  onChange={this.props.typeOfQuantityOfTheIngredient}
                >
                  <option>...</option>
                  <option value="items">items</option>
                  <option value="kg">weight [kg]</option>
                </select>
              </td>
              <td className="ingredientsCategory">
                <select
                  name="ingredient4"
                  value={this.props.ingredient4.category}
                  onChange={this.props.categoryOfTheIngredient}
                >
                  <option>...</option>
                  <option value="fruitsAndVegs">Fruits and vegetables</option>
                  <option value="looseProducts">Loose products</option>
                  <option value="forCakes">For cakes</option>
                  <option value="meat">Meat</option>
                  <option value="cannedGoods">Canned goods</option>
                  <option value="sweets">Sweets</option>
                  <option value="frozen">Frozen</option>
                  <option value="bread">Bread</option>
                  <option value="dairy">Dairy</option>
                  <option value="spices">Spices</option>
                  <option value="beverages">Beverages</option>
                  <option value="fats">Fats</option>
                  <option value="cleaningStuff">Cleaning stuff</option>
                  <option value="forHome">For home</option>
                  <option value="cosmetics">Cosmetics</option>
                  <option value="other">Other</option>
                </select>
              </td>
            </tr>

            <tr>
              <td className="ingredientsName">
                <input
                  type="text"
                  name="ingredient5"
                  placeholder="Enter ingredient's name"
                  value={this.props.ingredient5.product}
                  onChange={this.props.ingredientOfTheRecipe}
                />
              </td>
              <td className="ingredientsQuantity">
                <input
                  name="ingredient5"
                  type="number"
                  value={this.props.ingredient5.quantity}
                  onChange={this.props.quantityOfTheIngredient}
                />
              </td>

              <td className="ingredientsTypeOfQuantity">
                <select
                  name="ingredient5"
                  value={this.props.ingredient5.typeOfQuantity}
                  onChange={this.props.typeOfQuantityOfTheIngredient}
                >
                  <option>...</option>
                  <option value="items">items</option>
                  <option value="kg">weight [kg]</option>
                </select>
              </td>
              <td className="ingredientsCategory">
                <select
                  name="ingredient5"
                  value={this.props.ingredient5.category}
                  onChange={this.props.categoryOfTheIngredient}
                >
                  <option>...</option>
                  <option value="fruitsAndVegs">Fruits and vegetables</option>
                  <option value="looseProducts">Loose products</option>
                  <option value="forCakes">For cakes</option>
                  <option value="meat">Meat</option>
                  <option value="cannedGoods">Canned goods</option>
                  <option value="sweets">Sweets</option>
                  <option value="frozen">Frozen</option>
                  <option value="bread">Bread</option>
                  <option value="dairy">Dairy</option>
                  <option value="spices">Spices</option>
                  <option value="beverages">Beverages</option>
                  <option value="fats">Fats</option>
                  <option value="cleaningStuff">Cleaning stuff</option>
                  <option value="forHome">For home</option>
                  <option value="cosmetics">Cosmetics</option>
                  <option value="other">Other</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <button onClick={this.props.addRecipeToLocalStorage}>
                  Save your recipe
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default NewRecipe;

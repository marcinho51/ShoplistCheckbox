import React, { Component } from "react";
import "./NewRecipe.scss";

class NewRecipe extends Component {
  state = {
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
    },
    ingredient6: {
      product: "",
      category: "",
      quantity: "",
      typeOfQuantity: ""
    },
    ingredient7: { product: "", category: "", quantity: "", typeOfQuantity: "" }
  };

  handleDefineIngredient = event => {
    this.setState({
      [event.target.name]: { product: event.target.value }
    });
  };

  handleChangeQuantity = event => {
    this.setState({
      [event.target.name]: { quantity: event.target.value }
    });
  };

  handleSelectQuantity = event => {
    this.setState({
      [event.target.name]: { typeOfQuantity: event.target.value }
    });
  };

  selectChange = event => {
    this.setState({
      [event.target.name]: { category: event.target.value }
    });
  };

  render() {
    return (
      <div>
        <h1>Add new recipe</h1>
        <h2>
          Name of the recipe{" "}
          <input
            type="text"
            name="name"
            value={this.state.ingredient1.name}
            onChange={this.handleDefineIngredient}
          />
        </h2>
        <label>
          Ingredients:
          <table>
            <tbody>
              <tr>
                <td>
                  <input
                    name="ingredient1"
                    type="text"
                    value={this.state.ingredient1.product}
                    onChange={this.handleDefineIngredient}
                  />
                </td>
                <td>
                  <input
                    name="ingredient1"
                    type="number"
                    value={this.state.ingredient1.quantity}
                    onChange={this.handleChangeQuantity}
                  />
                </td>

                <td>
                  <select
                    name="ingredient1"
                    value={this.state.ingredient1.typeOfQuantity}
                    onChange={this.handleSelectQuantity}
                  >
                    <option>...</option>
                    <option value="items">items</option>
                    <option value="kg">weight [kg]</option>
                  </select>
                </td>
                <td>
                  <select
                    name="ingredient1"
                    value={this.state.ingredient1.category}
                    onChange={this.selectChange}
                  >
                    <option>Wybierz kategorię...</option>
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
                  <input type="text" name="ingredient2" />
                </td>
                <td>
                  <input
                    name="ingredient2"
                    type="number"
                    value={this.state.quantity}
                    onChange={this.handleChangeQuantity}
                  />
                </td>

                <td>
                  <select
                    name="ingredient2"
                    value={this.state.typeOfQuantity}
                    onChange={this.handleSelectQuantity}
                  >
                    <option>...</option>
                    <option value="items">items</option>
                    <option value="kg">weight [kg]</option>
                  </select>
                </td>
                <td>
                  <select
                    name="ingredient2"
                    value={this.state.ingredient2.category}
                    onChange={this.selectChange}
                  >
                    <option>Wybierz kategorię...</option>
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
                  <input type="text" name="ingredient3" />
                </td>
                <td>
                  <input
                    name="ingredient3"
                    type="number"
                    value={this.state.quantity}
                    onChange={this.handleChangeQuantity}
                  />
                </td>

                <td>
                  <select
                    name="ingredient3"
                    value={this.state.typeOfQuantity}
                    onChange={this.handleSelectQuantity}
                  >
                    <option>...</option>
                    <option value="items">items</option>
                    <option value="kg">weight [kg]</option>
                  </select>
                </td>
                <td>
                  <select
                    name="ingredient3"
                    value={this.state.ingredient3.category}
                    onChange={this.selectChange}
                  >
                    <option>Wybierz kategorię...</option>
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
            </tbody>
          </table>
          <button>Add another ingredient</button>
        </label>
        <button>Save your recipe</button>
      </div>
    );
  }
}

export default NewRecipe;

import React, { Component } from "react";
import "./Recipe.scss";

class Recipe extends Component {
  state = {
    removeButton: false
  };

  toRemove = () => {
    this.setState({
      removeButton: true
    });
  };

  notToRemove = () => {
    this.setState({
      removeButton: false
    });
  };

  render() {
    const hidden = (
      <>
        <tr>
          <td className="nameOfTheRecipe">{this.props.name}</td>
          <td className="addRecipeToShoplistBtn">
            <button
              onClick={
                () =>
                  this.props.addRecipeToShoplist(
                    this.props.ingredient1,
                    this.props.ingredient2,
                    this.props.ingredient3,
                    this.props.ingredient4,
                    this.props.ingredient5
                  )
                //   ,
                // this.toRemove
              }
            >
              Add to your shoplist
            </button>
          </td>
          <td className="removeRecipeBtn">
            <button onClick={() => this.props.removeRecipe(this.props.name)}>
              Remove from your recipes
            </button>
          </td>
        </tr>

        <tr>
          <td className="ingredient">Ingredients:</td>
          <td className="ingredient">
            {this.props.ingredient1.quantity}{" "}
            {this.props.ingredient1.typeOfQuantity}{" "}
            {this.props.ingredient1.product}
          </td>

          <td className="ingredient">
            {this.props.ingredient2.quantity}{" "}
            {this.props.ingredient2.typeOfQuantity}{" "}
            {this.props.ingredient2.product}
          </td>

          <td className="ingredient">
            {this.props.ingredient3.quantity}{" "}
            {this.props.ingredient3.typeOfQuantity}{" "}
            {this.props.ingredient3.product}
          </td>

          <td className="ingredient">
            {this.props.ingredient4.quantity}{" "}
            {this.props.ingredient4.typeOfQuantity}{" "}
            {this.props.ingredient4.product}
          </td>

          <td className="ingredient">
            {this.props.ingredient5.quantity}{" "}
            {this.props.ingredient5.typeOfQuantity}{" "}
            {this.props.ingredient5.product}
          </td>
        </tr>
      </>
    );

    const visible = (
      <>
        <tr>
          <td className="nameOfTheRecipe">{this.props.name}</td>
          <td>
            <button
              onClick={
                (() =>
                  this.props.removeRecipeFromShoplist(
                    this.props.ingredient1,
                    this.props.ingredient2,
                    this.props.ingredient3,
                    this.props.ingredient4,
                    this.props.ingredient5
                  ),
                this.notToRemove)
              }
            >
              Remove from your shoplist
            </button>
          </td>
        </tr>
        <tr>
          <td className="ingredient">Ingredients:</td>

          <td className="ingredient">
            {this.props.ingredient1.quantity}{" "}
            {this.props.ingredient1.typeOfQuantity}{" "}
            {this.props.ingredient1.product}
          </td>

          <td className="ingredient">
            {this.props.ingredient2.quantity}{" "}
            {this.props.ingredient2.typeOfQuantity}{" "}
            {this.props.ingredient2.product}
          </td>

          <td className="ingredient">
            {this.props.ingredient3.quantity}{" "}
            {this.props.ingredient3.typeOfQuantity}{" "}
            {this.props.ingredient3.product}
          </td>

          <td className="ingredient">
            {this.props.ingredient4.quantity}{" "}
            {this.props.ingredient4.typeOfQuantity}{" "}
            {this.props.ingredient4.product}
          </td>

          <td className="ingredient">
            {this.props.ingredient5.quantity}{" "}
            {this.props.ingredient5.typeOfQuantity}{" "}
            {this.props.ingredient5.product}
          </td>
        </tr>
      </>
    );

    return this.state.removeButton ? visible : hidden;
  }
}

export default Recipe;

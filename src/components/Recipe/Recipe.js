import React, { Component } from "react";
import "./Recipe.scss";

class Recipe extends Component {
  state = {
    remove: true
  };
  render() {
    const recipeAdd = (
      <table>
        <tbody>
          <tr>
            <td id="nameOfTheRecipe">{this.props.name}</td>
          </tr>

          <tr>
            <td className="ingredientMain">Ingredients:</td>
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
          <tr>
            <td className="addRecipeToShoplistBtn">
              <button
                onClick={() =>
                  this.props.addRecipeToShoplist(
                    this.props.ingredient1,
                    this.props.ingredient2,
                    this.props.ingredient3,
                    this.props.ingredient4,
                    this.props.ingredient5,
                    this.setState(state => ({
                      remove: !state.remove
                    }))
                  )
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
        </tbody>
      </table>
    );

    const recipeRemove = (
      <table>
        <tbody>
          <tr>
            <td className="nameOfTheRecipe">{this.props.name}</td>
          </tr>

          <tr>
            <td className="ingredientMain">Ingredients:</td>
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
          <tr>
            <td className="removeRecipeFromShoplistBtn">
              <button
                onClick={() =>
                  this.props.removeRecipeFromShoplist(
                    this.props.ingredient1,
                    this.props.ingredient2,
                    this.props.ingredient3,
                    this.props.ingredient4,
                    this.props.ingredient5,
                    this.setState(state => ({
                      remove: !state.remove
                    }))
                  )
                }
              >
                Remove from your shoplist
              </button>
            </td>
            {/* <td className="removeRecipeBtn">
              <button onClick={() => this.props.removeRecipe(this.props.name)}>
                Remove from your recipes
              </button>
            </td> */}
          </tr>
        </tbody>
      </table>
    );

    return (
      <div className="col-12">
        {this.state.remove ? recipeAdd : recipeRemove}
      </div>
    );
  }
}

export default Recipe;

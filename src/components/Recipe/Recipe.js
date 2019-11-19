import React, { Component } from "react";
import "./Recipe.scss";

class Recipe extends Component {
  state = {
    open: false
  };

  toOpen = () => {
    this.setState({
      open: true
    });
  };

  render() {
    const hidden = (
      <tr>
        <td>{this.props.name}</td>
        <td>
          <button
            onClick={() =>
              this.props.addRecipeToShoplist(
                this.props.ingredient1,
                this.props.ingredient2,
                this.props.ingredient3,
                this.props.ingredient4,
                this.props.ingredient5
              )
            }
          >
            Add to your shoplist
          </button>
          <button onClick={this.toOpen}>Show ingredients</button>
          <button onClick={this.props.removeRecipeFromShoplist}>
            Remove from your shoplist
          </button>
        </td>
      </tr>
    );

    const visible = (
      <>
        <tr>
          <td>{this.props.name}</td>
        </tr>
        <tr>
          <td>Ingredients:</td>
        </tr>

        <tr>
          <td>
            {this.props.ingredient1.quantity}{" "}
            {this.props.ingredient1.typeOfQuantity}{" "}
            {this.props.ingredient1.product}
          </td>
        </tr>

        <tr>
          <td>
            {this.props.ingredient2.quantity}{" "}
            {this.props.ingredient2.typeOfQuantity}{" "}
            {this.props.ingredient2.product}
          </td>
        </tr>

        <tr>
          <td>
            {this.props.ingredient3.quantity}{" "}
            {this.props.ingredient3.typeOfQuantity}{" "}
            {this.props.ingredient3.product}
          </td>
        </tr>

        <tr>
          <td>
            {this.props.ingredient4.quantity}{" "}
            {this.props.ingredient4.typeOfQuantity}{" "}
            {this.props.ingredient4.product}
          </td>
        </tr>

        <tr>
          <td>
            {this.props.ingredient5.quantity}{" "}
            {this.props.ingredient5.typeOfQuantity}{" "}
            {this.props.ingredient5.product}
          </td>
        </tr>
        <tr>
          <td>
            <button
              onClick={() =>
                this.props.addRecipeToShoplist(
                  this.props.ingredient1,
                  this.props.ingredient2,
                  this.props.ingredient3,
                  this.props.ingredient4,
                  this.props.ingredient5
                )
              }
            >
              Add to your shoplist
            </button>
          </td>
        </tr>
      </>
    );

    return this.state.open ? visible : hidden;
  }
}

export default Recipe;

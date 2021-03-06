import React, { Component } from "react";
import "./Product.scss";

class Product extends Component {
  state = {
    name: this.props.name,
    category: this.props.category,
    quantity: "",
    typeOfQuantity: "",
    input: true
  };

  // quantity of the product when adding to shopping list
  handleChangeQuantity = event => {
    this.setState({
      quantity: event.target.value
    });
  };

  // type of quantity of the product when adding to shopping list
  handleSelectQuantity = event => {
    this.setState({
      typeOfQuantity: event.target.value
    });
  };

  render() {
    const form = (
      <>
        <tr key={this.props.name}>
          <td className="nameOfProduct">{this.props.name}</td>

          <td className="numberOfProducts">
            <input
              type="number"
              value={this.state.quantity}
              onChange={this.handleChangeQuantity}
            />
          </td>
          <td className="typeOfQuantity">
            <select
              value={this.state.typeOfQuantity}
              onChange={this.handleSelectQuantity}
            >
              <option>...</option>
              <option value="items">items</option>
              <option value="kg">weight [kg]</option>
            </select>
          </td>
        </tr>
        <tr>
          <td className="addToYourShoplistBtn">
            <button
              onClick={
                this.state.quantity !== "" && this.state.typeOfQuantity !== ""
                  ? e =>
                      this.props.addProductToShoplist(
                        this.state.name,
                        this.state.category,
                        this.state.quantity,
                        this.state.typeOfQuantity,

                        this.setState(state => ({
                          input: !state.input
                        }))
                      )
                  : null
              }
            >
              Add to shopping list
            </button>
          </td>
          <td></td>
          <td className="removeFromYourProductsBtn">
            <button
              onClick={() =>
                this.props.deleteProductFromLocalStorage(
                  this.state.category,
                  this.state.name
                )
              }
            >
              Remove from your products
            </button>
          </td>
        </tr>
      </>
    );

    const chosen = (
      <>
        <tr key={this.props.name}>
          <td className="nameOfProduct">
            {this.props.name} - {this.state.quantity}{" "}
            {this.state.typeOfQuantity}
          </td>

          <td className="removeFromYourShoplistBtn">
            <button
              onClick={e =>
                this.setState(
                  state => ({
                    input: !state.input
                  }),
                  () => {
                    this.props.removeProductFromShoplist(
                      this.state.name,
                      this.state.category,
                      this.state.quantity,
                      this.state.typeOfQuantity
                    );
                  }
                )
              }
            >
              Remove from shopping list
            </button>
          </td>
        </tr>
      </>
    );

    return this.state.input ? form : chosen;
  }
}

export default Product;

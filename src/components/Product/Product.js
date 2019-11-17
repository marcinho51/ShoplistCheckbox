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

  handleChangeQuantity = event => {
    this.setState({
      quantity: event.target.value
    });
  };

  handleSelectQuantity = event => {
    this.setState({
      typeOfQuantity: event.target.value
    });
  };

  render() {
    const form = (
      <tr key={this.props.name}>
        <td>{this.props.name}</td>
        <td>
          <input
            type="number"
            value={this.state.quantity}
            onChange={this.handleChangeQuantity}
          />
        </td>
        <td>
          <select
            value={this.state.typeOfQuantity}
            onChange={this.handleSelectQuantity}
          >
            <option>...</option>
            <option value="items">items</option>
            <option value="kg">weight [kg]</option>
          </select>
        </td>
        <td>
          <button
            onClick={e =>
              this.props.handleButton(
                this.state.name,
                this.state.category,
                this.state.quantity,
                this.state.typeOfQuantity,

                this.setState(state => ({
                  input: !state.input
                }))
              )
            }
          >
            Add to your shoplist
          </button>
        </td>
        <td>
          <button
            onClick={() =>
              this.props.deleteItem(this.state.category, this.state.name)
            }
          >
            Delete
          </button>
        </td>
      </tr>
    );

    const chosen = (
      <tr key={this.props.name}>
        <td>{this.props.name}</td>
        <td>{this.state.quantity}</td>
        <td>{this.state.typeOfQuantity}</td>
        <td>
          <button
            onClick={e =>
              this.setState(
                state => ({
                  input: !state.input
                }),
                () => {
                  this.props.removeProductFromShoplist(this.state.name);
                }
              )
            }
          >
            Remove from your shoplist
          </button>
        </td>
      </tr>
    );

    return this.state.input ? form : chosen;
  }
}

export default Product;

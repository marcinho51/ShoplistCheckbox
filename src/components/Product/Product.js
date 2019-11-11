import React, { Component } from "react";
import "./Product.scss";

class Product extends Component {
  render() {
    return (
      <tr key={this.props.name}{this.props.quantity}>
        <td>{this.props.name}</td>
        <td>
          <input
            type="number"
            value={this.props.quantity}
            onChange={this.props.changeQuantity}
          />
        </td>
        <td>
          <select
            value={this.props.typeOfQuantity}
            onChange={this.props.selectQuantity}
          >
            <option>...</option>
            <option value="items">items</option>
            <option value="weight">weight [kg]</option>
          </select>
        </td>
        <td>
          <button onClick={this.props.handleButton}>
            Add to your shoplist
          </button>
        </td>
      </tr>
    );
  }
}

export default Product;

import React, { Component } from "react";
import "./NewProduct.scss";

class NewProduct extends Component {
  render() {
    return (
      <>
        <tr className="newProduct">
          <td>
            <input
              type="text"
              onChange={this.props.nameOfTheProduct}
              value={this.props.newProduct}
              name="newProduct"
              placeholder="Enter new product's name"
            />

            <select
              value={this.props.select}
              onChange={this.props.productsCategory}
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
        <tr className="newProductBtn">
          <td>
            <button onClick={this.props.addProductToLocalStorage}>Add</button>
          </td>
        </tr>
      </>
    );
  }
}

export default NewProduct;

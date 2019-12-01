import React, { Component } from "react";
import "./NewProduct.scss";

class NewProduct extends Component {
  render() {
    // const warn1 = (
    //   <span style={{ color: "red" }}>You must choose category!</span>
    // );
    // const warn2 = { border: "1px solid red" };
    // const normal = { border: "1px solid grey", color: "#39686b" };

    return (
      <>
        <tr className="newProduct">
          <td>
            <input
              type="text"
              onChange={this.props.change}
              value={this.props.newProduct}
              name="newProduct"
              placeholder="Enter new product's name"
              // style={this.props.warn2 ? warn2 : normal}
            />

            {/* {this.props.warn1 ? warn1 : null} */}
            <select
              value={this.props.select}
              onChange={this.props.selectChange}
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
            <button onClick={this.props.handleButton}>Add</button>
          </td>
        </tr>
      </>
    );
  }
}

export default NewProduct;

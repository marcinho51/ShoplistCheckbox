import React, { Component } from "react";
import "./YourProducts.scss";
import NewProduct from "../NewProduct/NewProduct";

class YourProducts extends Component {
  state = {
    newProduct: "",
    fruitsAndVegs: []
  };

  handleChange = event => {
    this.setState({
      newProduct: event.target.value
    });
  };

  addProduct = event => {
    const array = [...this.state.event.target.name];

    this.setState({
      [event.target.name]: array.push(event.target.value)
    });
  };

  render() {
    return (
      <div className="col-2 widget-yourProducts">
        <div className="cross">
          <i className="fas fa-plus fa-2x"></i>
        </div>
        <p className="add-recipe">Twoje produkty</p>
        <NewProduct
          change={this.handleChange}
          newProduct={this.state.newProduct}
        />
        <h1>Twoje produkty</h1>
        <ul>
          {this.state.fruitsAndVegs.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default YourProducts;

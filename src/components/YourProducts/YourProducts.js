import React, { Component } from "react";
import "./YourProducts.scss";
import NewProduct from "../NewProduct/NewProduct";

class YourProducts extends Component {
  render() {
    return (
      <div className="col-2 widget-yourProducts">
        <div className="cross">
          <i className="fas fa-plus fa-2x"></i>
        </div>
        <p className="add-recipe">Twoje produkty</p>
        <NewProduct />
      </div>
    );
  }
}

export default YourProducts;

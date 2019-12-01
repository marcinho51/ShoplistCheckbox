import React, { Component } from "react";
import "./Main.scss";
import { Link } from "react-router-dom";
import YourRecipes from "../YourRecipes/YourRecipes";
import YourProducts from "../YourProducts/YourProducts";

class Main extends Component {
  state = {
    user: "",
    products: []
  };

  render() {
    return (
      <div className="wrapper2">
        <div className="row">
          <YourProducts
            addProductToShoplist={this.props.addProductToShoplist}
            products={this.props.products}
            removeProductFromShoplist={this.props.removeProductFromShoplist}
          />
          <YourRecipes
            addRecipeToShoplist={this.props.addRecipeToShoplist}
            products={this.props.products}
            removeRecipeFromShoplist={this.props.removeRecipeFromShoplist}
          />
        </div>
        {this.props.products.length > 0 ? (
          <div className="row">
            <div className="col-5"></div>
            <div className="col-2">
              <button id="createShopList">
                <Link to="/shoppinglist">Create your shopping list!</Link>
              </button>
            </div>
            <div className="col-6"></div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Main;

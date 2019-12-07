import React, { Component } from "react";
import "./YourProducts.scss";
import NewProduct from "../NewProduct/NewProduct";
import Product from "../Product/Product";

class YourProducts extends Component {
  state = {
    newProduct: "",
    select: "",
    products: this.props.products
  };

  // name of the new product
  nameOfTheProduct = event => {
    this.setState({
      newProduct: event.target.value
    });
  };

  // category of the new product
  productsCategory = event => {
    this.setState({
      select: event.target.value
    });
  };

  // all available categories
  categories = [
    "fruitsAndVegs",
    "looseProducts",
    "forCakes",
    "meat",
    "cannedGoods",
    "sweets",
    "frozen",
    "bread",
    "diary",
    "spices",
    "beverages",
    "fats",
    "cleaningStuff",
    "forHome",
    "cosmetics",
    "other"
  ];

  arrayOfProducts = [];

  // add product to local storage
  addProductToLocalStorage = () => {
    if (
      (this.state.newProduct.length === 0 && this.state.select.length === 0) ||
      (this.state.select.length === 0 && this.state.newProduct.length > 0) ||
      (this.state.newProduct.length === 0 && this.state.select.length > 0)
    ) {
      this.setState({
        newProduct: "Enter the name and category!"
      });
    } else if (
      this.state.newProduct.length > 30 &&
      this.state.newProduct.length > 0
    ) {
      this.setState({ newProduct: "Too long name of the product!" });
    } else {
      this.categories.map(item => {
        if (this.state.select === item) {
          let arr = [];
          if (localStorage.getItem(item)) {
            arr = JSON.parse(localStorage.getItem(item));
          }
          arr.push(this.state.newProduct);
          localStorage.setItem(item, JSON.stringify(arr));
        }
      });

      this.arrayOfProducts.push(this.state.newProduct);

      localStorage.setItem(
        "productsFromLocalStorage",
        JSON.stringify(this.arrayOfProducts)
      );

      this.setState({
        newProduct: "",
        select: "",
        productsFromLocalStorage: JSON.parse(
          localStorage.getItem("productsFromLocalStorage")
        )
      });
    }
  };

  // delete product from local storage
  deleteProductFromLocalStorage = (category, name) => {
    let arr = JSON.parse(localStorage.getItem(category));
    const index = arr.indexOf(name);
    arr.splice(index, 1);
    localStorage.setItem(category, JSON.stringify(arr));

    if (localStorage.getItem(category).length === 2) {
      localStorage.removeItem(category);
    }

    let arr2 = JSON.parse(localStorage.getItem("productsFromLocalStorage"));
    const index2 = arr2.indexOf(name);
    arr2.splice(index2, 1);
    this.setState({
      productsFromLocalStorage: arr2
    });

    localStorage.setItem("productsFromLocalStorage", JSON.stringify(arr2));
  };

  render() {
    const all = this.categories.map(item =>
      localStorage.getItem(item) ? (
        <>
          <h2>{item}</h2>
          <table>
            <tbody>
              {JSON.parse(localStorage.getItem(item)).map(el => (
                <Product
                  addProductToShoplist={this.props.addProductToShoplist}
                  category={item}
                  deleteProductFromLocalStorage={
                    this.deleteProductFromLocalStorage
                  }
                  name={el}
                  key={el}
                  removeProductFromShoplist={
                    this.props.removeProductFromShoplist
                  }
                />
              ))}
            </tbody>
          </table>
        </>
      ) : null
    );

    return (
      <div className="yourProducts col-6">
        <h1>Your products</h1>
        {all}
        <table>
          <tbody>
            <NewProduct
              nameOfTheProduct={this.nameOfTheProduct}
              productsCategory={this.productsCategory}
              newProduct={this.state.newProduct}
              select={this.state.select}
              addProductToLocalStorage={this.addProductToLocalStorage}
            />
          </tbody>
        </table>
      </div>
    );
  }
}

export default YourProducts;

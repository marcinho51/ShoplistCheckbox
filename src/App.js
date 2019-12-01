import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import Main from "./components/Main/Main";
import Hello from "./components/Hello/Hello";
// import YourRecipes from "./components/YourRecipes/YourRecipes";
// import YourProducts from "./components/YourProducts/YourProducts";
import NewShoplist from "./components/NewShoplist/NewShoplist";
import Navigation from "./components/Navigation/Navigation";

class App extends Component {
  state = {
    user: "",
    products: []
  };

  handleChange = event => {
    this.setState({
      user: event.target.value
    });
  };

  handleButton = () => {
    const { user } = this.state;
    localStorage.setItem("user", user);
    this.setState({
      user: ""
    });
  };

  addRecipeToShoplist = (
    ingredient1,
    ingredient2,
    ingredient3,
    ingredient4,
    ingredient5
  ) => {
    const ingredients = [
      ingredient1,
      ingredient2,
      ingredient3,
      ingredient4,
      ingredient5
    ];

    let listOfProducts = [...this.state.products];

    ingredients.forEach(element => {
      let repeat = listOfProducts
        .map(item => item.product + item.typeOfQuantity)
        .indexOf(element.product + element.typeOfQuantity);

      console.log(repeat);

      if (repeat === -1 && element.product !== "") {
        listOfProducts.push({
          product: element.product,
          category: element.category,
          quantity: element.quantity,
          typeOfQuantity: element.typeOfQuantity
        });
      } else if (repeat !== -1 && element.product !== "") {
        listOfProducts.push({
          product: element.product,
          category: element.category,
          quantity: element.quantity,
          typeOfQuantity: element.typeOfQuantity
        });

        let filtered = listOfProducts.filter(
          item =>
            item.product === element.product &&
            item.typeOfQuantity === element.typeOfQuantity
        );

        let sum = filtered.reduce(
          (a, b) => parseFloat(a.quantity) + parseFloat(b.quantity)
        );

        let filteredListOfProducts = listOfProducts.filter(
          item =>
            !(
              item.product === element.product &&
              item.typeOfQuantity === element.typeOfQuantity
            )
        );

        listOfProducts = filteredListOfProducts;

        listOfProducts.push({
          product: element.product,
          category: element.category,
          quantity: sum,
          typeOfQuantity: element.typeOfQuantity
        });
      }

      this.setState({
        products: listOfProducts
      });
    });
  };

  addProductToShoplist = (name, category, quantity, typeOfQuantity) => {
    let listOfProducts = [...this.state.products];

    let repeat = listOfProducts
      .map(item => item.product + item.typeOfQuantity)
      .indexOf(name + typeOfQuantity);

    console.log(repeat);

    if (repeat === -1) {
      listOfProducts.push({
        product: name,
        category: category,
        quantity: quantity,
        typeOfQuantity: typeOfQuantity
      });
    } else if (repeat !== -1) {
      listOfProducts.push({
        product: name,
        category: category,
        quantity: quantity,
        typeOfQuantity: typeOfQuantity
      });

      let filtered = listOfProducts.filter(
        item => item.product === name && item.typeOfQuantity === typeOfQuantity
      );

      let sum = filtered.reduce(
        (a, b) => parseFloat(a.quantity) + parseFloat(b.quantity)
      );

      let filteredListOfProducts = listOfProducts.filter(
        item =>
          !(item.product === name && item.typeOfQuantity === typeOfQuantity)
      );

      listOfProducts = filteredListOfProducts;

      listOfProducts.push({
        product: name,
        category: category,
        quantity: sum,
        typeOfQuantity: typeOfQuantity
      });
    }

    this.setState({
      products: listOfProducts
    });
  };

  removeProductFromShoplist = (name, category, quantity, typeOfQuantity) => {
    let listOfProducts = [...this.state.products];

    let filtered = listOfProducts.filter(
      item => item.product === name && item.typeOfQuantity === typeOfQuantity
    );

    if (parseFloat(filtered[0].quantity) === parseFloat(quantity)) {
      let updatedListOfProducts = listOfProducts.filter(
        item =>
          !(item.product === name && item.typeOfQuantity === typeOfQuantity)
      );

      listOfProducts = updatedListOfProducts;
    } else if (parseFloat(filtered[0].quantity) > parseFloat(quantity)) {
      let updatedListOfProducts = listOfProducts.filter(
        item =>
          !(item.product === name && item.typeOfQuantity === typeOfQuantity)
      );

      listOfProducts = updatedListOfProducts;

      listOfProducts.push({
        product: name,
        category: category,
        quantity: parseFloat(filtered[0].quantity) - parseFloat(quantity),
        typeOfQuantity: typeOfQuantity
      });
    }

    this.setState({
      products: listOfProducts
    });
  };

  arrayOfIngredients = [];

  removeRecipeFromShoplist = (
    ingredient1,
    ingredient2,
    ingredient3,
    ingredient4,
    ingredient5
  ) => {
    let ingredients = [
      ingredient1,
      ingredient2,
      ingredient3,
      ingredient4,
      ingredient5
    ];
    ingredients.forEach(ingredient => {
      if (ingredient.product.length > 0) {
        this.arrayOfIngredients.push({
          product: ingredient.product,
          category: ingredient.category,
          quantity: ingredient.quantity,
          typeOfQuantity: ingredient.typeOfQuantity
        });
      }
    });

    let listOfProducts = [...this.state.products];

    const result = listOfProducts.filter(
      item =>
        this.arrayOfIngredients.findIndex(
          item2 =>
            item.product === item2.product &&
            item.typeOfQuantity === item2.typeOfQuantity
        ) === -1
    );

    const result2 = listOfProducts.filter(
      item =>
        this.arrayOfIngredients.findIndex(
          item2 =>
            item.product === item2.product &&
            item.typeOfQuantity === item2.typeOfQuantity &&
            item.quantity > item2.quantity
        ) !== -1
    );

    const result3 = this.arrayOfIngredients.filter(
      item =>
        result2.findIndex(
          item2 =>
            item.product === item2.product &&
            item.typeOfQuantity === item2.typeOfQuantity
        ) !== -1
    );

    const result4 = result2.concat(result3);

    for (var i = 0; i < result4.length - 1; i++) {
      for (var j = i + 1; j < result4.length; j++) {
        if (result4[i].product === result4[j].product) {
          result.push({
            product: result4[i].product,
            category: result4[i].category,
            quantity:
              parseFloat(result4[i].quantity) - parseFloat(result4[j].quantity),
            typeOfQuantity: result4[i].typeOfQuantity
          });
        }
      }
    }

    this.setState({
      products: result
    });
  };

  render() {
    return (
      <HashRouter>
        {/* <Navigation /> */}
        <Switch>
          <Route
            exact
            path="/"
            render={routeProps => (
              <Hello
                {...routeProps}
                user={this.state.user}
                change={this.handleChange}
                buttonChange={this.handleButton}
              />
            )}
          />

          <Route
            path="/productsandrecipes"
            render={routeProps => (
              <Main
                {...routeProps}
                addProductToShoplist={this.addProductToShoplist}
                removeProductFromShoplist={this.removeProductFromShoplist}
                addRecipeToShoplist={this.addRecipeToShoplist}
                products={this.state.products}
                removeRecipeFromShoplist={this.removeRecipeFromShoplist}
              />
            )}
          />
          <Route
            path="/shoppinglist"
            render={routeProps => (
              <NewShoplist {...routeProps} products={this.state.products} />
            )}
          />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;

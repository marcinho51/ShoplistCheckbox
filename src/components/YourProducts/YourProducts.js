import React, { Component } from "react";
import "./YourProducts.scss";
import NewProduct from "../NewProduct/NewProduct";
import Product from "../Product/Product";
import NewShoplist from "../NewShoplist/NewShoplist";
import YourRecipes from "../YourRecipes/YourRecipes";

class YourProducts extends Component {
  state = {
    newProduct: "",
    select: "",
    products: []
  };

  handleChange = event => {
    this.setState({
      newProduct: event.target.value
    });
  };

  selectChange = event => {
    this.setState({
      select: event.target.value
    });
  };

  arrayOfProducts = [];

  handleButton = () => {
    if (this.state.select === "sweets") {
      let sweets = [];
      if (localStorage.getItem("sweets")) {
        sweets = JSON.parse(localStorage.getItem("sweets"));
      }
      sweets.push(this.state.newProduct);
      localStorage.setItem("sweets", JSON.stringify(sweets));
    } else if (this.state.select === "fruitsAndVegs") {
      let fruitsAndVegs = [];
      if (
        this.state.select === "fruitsAndVegs" &&
        localStorage.getItem("fruitsAndVegs")
      ) {
        fruitsAndVegs = JSON.parse(localStorage.getItem("fruitsAndVegs"));
      }
      fruitsAndVegs.push(this.state.newProduct);
      localStorage.setItem("fruitsAndVegs", JSON.stringify(fruitsAndVegs));
    } else if (this.state.select === "looseProducts") {
      let looseProducts = [];
      if (
        this.state.select === "looseProducts" &&
        localStorage.getItem("looseProducts")
      ) {
        looseProducts = JSON.parse(localStorage.getItem("looseProducts"));
      }
      looseProducts.push(this.state.newProduct);
      localStorage.setItem("looseProducts", JSON.stringify(looseProducts));
    } else if (this.state.select === "forCakes") {
      let forCakes = [];
      if (
        this.state.select === "forCakes" &&
        localStorage.getItem("forCakes")
      ) {
        forCakes = JSON.parse(localStorage.getItem("forCakes"));
      }
      forCakes.push(this.state.newProduct);
      localStorage.setItem("forCakes", JSON.stringify(forCakes));
    } else if (this.state.select === "meat") {
      let meat = [];
      if (this.state.select === "meat" && localStorage.getItem("meat")) {
        meat = JSON.parse(localStorage.getItem("meat"));
      }
      meat.push(this.state.newProduct);
      localStorage.setItem("meat", JSON.stringify(meat));
    } else if (this.state.select === "cannedGoods") {
      let cannedGoods = [];
      if (
        this.state.select === "cannedGoods" &&
        localStorage.getItem("cannedGoods")
      ) {
        cannedGoods = JSON.parse(localStorage.getItem("cannedGoods"));
      }
      cannedGoods.push(this.state.newProduct);
      localStorage.setItem("cannedGoods", JSON.stringify(cannedGoods));
    } else if (this.state.select === "frozen") {
      let frozen = [];
      if (this.state.select === "frozen" && localStorage.getItem("frozen")) {
        frozen = JSON.parse(localStorage.getItem("frozen"));
      }
      frozen.push(this.state.newProduct);
      localStorage.setItem("frozen", JSON.stringify(frozen));
    } else if (this.state.select === "bread") {
      let bread = [];
      if (this.state.select === "bread" && localStorage.getItem("bread")) {
        bread = JSON.parse(localStorage.getItem("bread"));
      }
      bread.push(this.state.newProduct);
      localStorage.setItem("bread", JSON.stringify(bread));
    } else if (this.state.select === "dairy") {
      let dairy = [];
      if (this.state.select === "dairy" && localStorage.getItem("dairy")) {
        dairy = JSON.parse(localStorage.getItem("dairy"));
      }
      dairy.push(this.state.newProduct);
      localStorage.setItem("dairy", JSON.stringify(dairy));
    } else if (this.state.select === "spices") {
      let spices = [];
      if (this.state.select === "spices" && localStorage.getItem("spices")) {
        spices = JSON.parse(localStorage.getItem("spices"));
      }
      spices.push(this.state.newProduct);
      localStorage.setItem("spices", JSON.stringify(spices));
    } else if (this.state.select === "beverages") {
      let beverages = [];
      if (
        this.state.select === "beverages" &&
        localStorage.getItem("beverages")
      ) {
        beverages = JSON.parse(localStorage.getItem("beverages"));
      }
      beverages.push(this.state.newProduct);
      localStorage.setItem("beverages", JSON.stringify(beverages));
    } else if (this.state.select === "fats") {
      let fats = [];
      if (this.state.select === "fats" && localStorage.getItem("fats")) {
        fats = JSON.parse(localStorage.getItem("fats"));
      }
      fats.push(this.state.newProduct);
      localStorage.setItem("fats", JSON.stringify(fats));
    } else if (this.state.select === "cleaningStuff") {
      let cleaningStuff = [];
      if (
        this.state.select === "cleaningStuff" &&
        localStorage.getItem("cleaningStuff")
      ) {
        cleaningStuff = JSON.parse(localStorage.getItem("cleaningStuff"));
      }
      cleaningStuff.push(this.state.newProduct);
      localStorage.setItem("cleaningStuff", JSON.stringify(cleaningStuff));
    } else if (this.state.select === "forHome") {
      let forHome = [];
      if (this.state.select === "forHome" && localStorage.getItem("forHome")) {
        forHome = JSON.parse(localStorage.getItem("forHome"));
      }
      forHome.push(this.state.newProduct);
      localStorage.setItem("forHome", JSON.stringify(forHome));
    } else if (this.state.select === "cosmetics") {
      let cosmetics = [];
      if (
        this.state.select === "cosmetics" &&
        localStorage.getItem("cosmetics")
      ) {
        cosmetics = JSON.parse(localStorage.getItem("cosmetics"));
      }
      cosmetics.push(this.state.newProduct);
      localStorage.setItem("cosmetics", JSON.stringify(cosmetics));
    } else if (this.state.select === "other") {
      let other = [];
      if (this.state.select === "other" && localStorage.getItem("other")) {
        other = JSON.parse(localStorage.getItem("other"));
      }
      other.push(this.state.newProduct);
      localStorage.setItem("other", JSON.stringify(other));
    }

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
  };

  deleteItem = (category, name) => {
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

  handleButtonShoplist = (name, category, quantity, typeOfQuantity) => {
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

  removeProductFromShoplist = (name, category, quantity, typeOfQuantity) => {
    let listOfProducts = [...this.state.products];

    let filtered = listOfProducts.filter(
      item => item.product === name && item.typeOfQuantity === typeOfQuantity
    );
    console.log(filtered);

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

  render() {
    return (
      <div className="col-2 widget-yourProducts">
        <div className="cross">
          <i className="fas fa-plus fa-2x"></i>
        </div>
        <p className="add-recipe">Twoje produkty</p>
        <NewProduct
          change={this.handleChange}
          selectChange={this.selectChange}
          newProduct={this.state.newProduct}
          select={this.state.select}
          handleButton={this.handleButton}
        />
        <h1>Your products</h1>

        {localStorage.getItem("fruitsAndVegs") ? (
          <>
            <h2>Fruits and vegetables</h2>
            <table>
              <tbody>
                {JSON.parse(localStorage.getItem("fruitsAndVegs")).map(item => (
                  <Product
                    handleButton={this.handleButtonShoplist}
                    category="fruitsAndVegs"
                    deleteItem={this.deleteItem}
                    name={item}
                    key={item}
                    removeProductFromShoplist={this.removeProductFromShoplist}
                  />
                ))}
              </tbody>
            </table>
          </>
        ) : null}
        {localStorage.getItem("looseProducts") ? (
          <>
            <h2>Loose products</h2>
            <table>
              <tbody>
                {JSON.parse(localStorage.getItem("looseProducts")).map(item => (
                  <Product
                    handleButton={this.handleButtonShoplist}
                    category="looseProducts"
                    deleteItem={this.deleteItem}
                    name={item}
                    key={item}
                    removeProductFromShoplist={this.removeProductFromShoplist}
                  />
                ))}
              </tbody>
            </table>
          </>
        ) : null}
        {localStorage.getItem("forCakes") ? (
          <>
            <h2>For cakes</h2>
            <table>
              <tbody>
                {JSON.parse(localStorage.getItem("forCakes")).map(item => (
                  <Product
                    handleButton={this.handleButtonShoplist}
                    category="forCakes"
                    deleteItem={this.deleteItem}
                    name={item}
                    key={item}
                    removeProductFromShoplist={this.removeProductFromShoplist}
                  />
                ))}
              </tbody>
            </table>
          </>
        ) : null}
        {localStorage.getItem("meat") ? (
          <>
            <h2>Meat</h2>
            <table>
              <tbody>
                {JSON.parse(localStorage.getItem("meat")).map(item => (
                  <Product
                    handleButton={this.handleButtonShoplist}
                    category="meat"
                    deleteItem={this.deleteItem}
                    name={item}
                    key={item}
                    removeProductFromShoplist={this.removeProductFromShoplist}
                  />
                ))}
              </tbody>
            </table>
          </>
        ) : null}
        {localStorage.getItem("cannedGoods") ? (
          <>
            <h2>Canned goods</h2>
            <table>
              <tbody>
                {JSON.parse(localStorage.getItem("cannedGoods")).map(item => (
                  <Product
                    handleButton={this.handleButtonShoplist}
                    category="cannedGoods"
                    deleteItem={this.deleteItem}
                    name={item}
                    key={item}
                    removeProductFromShoplist={this.removeProductFromShoplist}
                  />
                ))}
              </tbody>
            </table>
          </>
        ) : null}
        {localStorage.getItem("sweets") ? (
          <>
            <h2>Sweets</h2>
            <table>
              <tbody>
                {JSON.parse(localStorage.getItem("sweets")).map(item => (
                  <Product
                    handleButton={this.handleButtonShoplist}
                    category="sweets"
                    deleteItem={this.deleteItem}
                    name={item}
                    key={item}
                    removeProductFromShoplist={this.removeProductFromShoplist}
                  />
                ))}
              </tbody>
            </table>
          </>
        ) : null}
        {localStorage.getItem("frozen") ? (
          <>
            <h2>Frozen</h2>
            <table>
              <tbody>
                {JSON.parse(localStorage.getItem("frozen")).map(item => (
                  <Product
                    handleButton={this.handleButtonShoplist}
                    category="frozen"
                    deleteItem={this.deleteItem}
                    name={item}
                    key={item}
                    removeProductFromShoplist={this.removeProductFromShoplist}
                  />
                ))}
              </tbody>
            </table>
          </>
        ) : null}
        {localStorage.getItem("bread") ? (
          <>
            <h2>Bread</h2>
            <table>
              <tbody>
                {JSON.parse(localStorage.getItem("bread")).map(item => (
                  <Product
                    handleButton={this.handleButtonShoplist}
                    category="bread"
                    deleteItem={this.deleteItem}
                    name={item}
                    key={item}
                    removeProductFromShoplist={this.removeProductFromShoplist}
                  />
                ))}
              </tbody>
            </table>
          </>
        ) : null}
        {localStorage.getItem("dairy") ? (
          <>
            <h2>Dairy</h2>
            <table>
              <tbody>
                {JSON.parse(localStorage.getItem("dairy")).map(item => (
                  <Product
                    handleButton={this.handleButtonShoplist}
                    category="dairy"
                    deleteItem={this.deleteItem}
                    name={item}
                    key={item}
                    removeProductFromShoplist={this.removeProductFromShoplist}
                  />
                ))}
              </tbody>
            </table>
          </>
        ) : null}
        {localStorage.getItem("spices") ? (
          <>
            <h2>Spices</h2>
            <table>
              <tbody>
                {JSON.parse(localStorage.getItem("spices")).map(item => (
                  <Product
                    handleButton={this.handleButtonShoplist}
                    category="spices"
                    deleteItem={this.deleteItem}
                    name={item}
                    key={item}
                    removeProductFromShoplist={this.removeProductFromShoplist}
                  />
                ))}
              </tbody>
            </table>
          </>
        ) : null}
        {localStorage.getItem("beverages") ? (
          <>
            <h2>Beverages</h2>
            <table>
              <tbody>
                {JSON.parse(localStorage.getItem("beverages")).map(item => (
                  <Product
                    handleButton={this.handleButtonShoplist}
                    category="beverages"
                    deleteItem={this.deleteItem}
                    name={item}
                    key={item}
                    removeProductFromShoplist={this.removeProductFromShoplist}
                  />
                ))}
              </tbody>
            </table>
          </>
        ) : null}
        {localStorage.getItem("fats") ? (
          <>
            <h2>Fats</h2>
            <table>
              <tbody>
                {JSON.parse(localStorage.getItem("fats")).map(item => (
                  <Product
                    handleButton={this.handleButtonShoplist}
                    category="fats"
                    deleteItem={this.deleteItem}
                    name={item}
                    key={item}
                    removeProductFromShoplist={this.removeProductFromShoplist}
                  />
                ))}
              </tbody>
            </table>
          </>
        ) : null}
        {localStorage.getItem("cleaningStuff") ? (
          <>
            <h2>Cleaning stuff</h2>
            <table>
              <tbody>
                {JSON.parse(localStorage.getItem("cleaningStuff")).map(item => (
                  <Product
                    handleButton={this.handleButtonShoplist}
                    category="cleaningStuff"
                    deleteItem={this.deleteItem}
                    name={item}
                    key={item}
                    removeProductFromShoplist={this.removeProductFromShoplist}
                  />
                ))}
              </tbody>
            </table>
          </>
        ) : null}
        {localStorage.getItem("forHome") ? (
          <>
            <h2>For home</h2>
            <table>
              <tbody>
                {JSON.parse(localStorage.getItem("forHome")).map(item => (
                  <Product
                    handleButton={this.handleButtonShoplist}
                    category="forHome"
                    deleteItem={this.deleteItem}
                    name={item}
                    key={item}
                    removeProductFromShoplist={this.removeProductFromShoplist}
                  />
                ))}
              </tbody>
            </table>
          </>
        ) : null}
        {localStorage.getItem("cosmetics") ? (
          <>
            <h2>Cosmetics</h2>
            <table>
              <tbody>
                {JSON.parse(localStorage.getItem("cosmetics")).map(item => (
                  <Product
                    handleButton={this.handleButtonShoplist}
                    category="cosmetics"
                    deleteItem={this.deleteItem}
                    name={item}
                    key={item}
                    removeProductFromShoplist={this.removeProductFromShoplist}
                  />
                ))}
              </tbody>
            </table>
          </>
        ) : null}
        {localStorage.getItem("other") ? (
          <>
            <h2>Other</h2>
            <table>
              <tbody>
                {JSON.parse(localStorage.getItem("other")).map(item => (
                  <Product
                    handleButton={this.handleButtonShoplist}
                    category="other"
                    deleteItem={this.deleteItem}
                    name={item}
                    key={item}
                    removeProductFromShoplist={this.removeProductFromShoplist}
                  />
                ))}
              </tbody>
            </table>
          </>
        ) : null}
        <YourRecipes addRecipeToShoplist={this.addRecipeToShoplist} />
        <NewShoplist products={this.state.products} />
      </div>
    );
  }
}

export default YourProducts;

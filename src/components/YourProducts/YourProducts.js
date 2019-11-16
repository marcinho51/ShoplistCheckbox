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
    this.setState({
      newProduct: "",
      select: ""
    });
  };

  handleButtonShoplist = (name, category, quantity, typeOfQuantity) => {
    const arr = [...this.state.products];

    arr.push({
      product: name,
      category: category,
      quantity: quantity,
      typeOfQuantity: typeOfQuantity
    });

    this.setState({
      products: arr
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
  };

  addRecipeToShoplist = (
    ingredient1,
    ingredient2,
    ingredient3,
    ingredient4,
    ingredient5
  ) => {
    let arr = this.state.products;
    if (ingredient1.product !== "") {
      arr.push(ingredient1);
    }

    if (ingredient2.product) {
      arr.push(ingredient2);
    }

    if (ingredient3.product) {
      arr.push(ingredient3);
    }

    if (ingredient4.product) {
      arr.push(ingredient4);
    }

    if (ingredient5.product) {
      arr.push(ingredient5);
    }

    this.setState({
      products: arr
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
                  />
                ))}
              </tbody>
            </table>
          </>
        ) : null}
        {localStorage.getItem("diary") ? (
          <>
            <h2>Dairy</h2>
            <table>
              <tbody>
                {JSON.parse(localStorage.getItem("diary")).map(item => (
                  <Product
                    handleButton={this.handleButtonShoplist}
                    category="diary"
                    deleteItem={this.deleteItem}
                    name={item}
                    key={item}
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

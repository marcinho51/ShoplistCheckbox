import React, { Component } from "react";
import "./NewProduct.scss";

class NewProduct extends Component {
  state = {
    newProduct: "",
    select: ""
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
      console.log(sweets);
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
      console.log(fruitsAndVegs);
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
      console.log(looseProducts);
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
      console.log(forCakes);
    } else if (this.state.select === "meat") {
      let meat = [];
      if (this.state.select === "meat" && localStorage.getItem("meat")) {
        meat = JSON.parse(localStorage.getItem("meat"));
      }
      meat.push(this.state.newProduct);
      localStorage.setItem("meat", JSON.stringify(meat));
      console.log(meat);
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
      console.log(cannedGoods);
    } else if (this.state.select === "frozen") {
      let frozen = [];
      if (this.state.select === "frozen" && localStorage.getItem("frozen")) {
        frozen = JSON.parse(localStorage.getItem("frozen"));
      }
      frozen.push(this.state.newProduct);
      localStorage.setItem("cfrozen", JSON.stringify(frozen));
      console.log(frozen);
    } else if (this.state.select === "bread") {
      let bread = [];
      if (this.state.select === "bread" && localStorage.getItem("bread")) {
        bread = JSON.parse(localStorage.getItem("bread"));
      }
      bread.push(this.state.newProduct);
      localStorage.setItem("bread", JSON.stringify(bread));
      console.log(bread);
    } else if (this.state.select === "dairy") {
      let dairy = [];
      if (this.state.select === "dairy" && localStorage.getItem("dairy")) {
        dairy = JSON.parse(localStorage.getItem("dairy"));
      }
      dairy.push(this.state.newProduct);
      localStorage.setItem("dairy", JSON.stringify(dairy));
      console.log(dairy);
    } else if (this.state.select === "spices") {
      let spices = [];
      if (this.state.select === "spices" && localStorage.getItem("spices")) {
        spices = JSON.parse(localStorage.getItem("spices"));
      }
      spices.push(this.state.newProduct);
      localStorage.setItem("spices", JSON.stringify(spices));
      console.log(spices);
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
      console.log(beverages);
    } else if (this.state.select === "fats") {
      let fats = [];
      if (this.state.select === "fats" && localStorage.getItem("fats")) {
        fats = JSON.parse(localStorage.getItem("fats"));
      }
      fats.push(this.state.newProduct);
      localStorage.setItem("fats", JSON.stringify(fats));
      console.log(fats);
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
      console.log(cleaningStuff);
    } else if (this.state.select === "forHome") {
      let forHome = [];
      if (this.state.select === "forHome" && localStorage.getItem("forHome")) {
        forHome = JSON.parse(localStorage.getItem("forHome"));
      }
      forHome.push(this.state.newProduct);
      localStorage.setItem("forHome", JSON.stringify(forHome));
      console.log(forHome);
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
      console.log(cosmetics);
    } else if (this.state.select === "other") {
      let other = [];
      if (this.state.select === "other" && localStorage.getItem("other")) {
        other = JSON.parse(localStorage.getItem("other"));
      }
      other.push(this.state.newProduct);
      localStorage.setItem("other", JSON.stringify(other));
      console.log(other);
    }
  };

  render() {
    return (
      <>
        <label>
          Add new product
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.newProduct}
          />
        </label>
        <label>
          Category
          <select value={this.state.select} onChange={this.selectChange}>
            <option>Wybierz kategorię...</option>
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
        </label>
        <button onClick={this.handleButton}>Dodaj</button>
      </>
    );
  }
}

export default NewProduct;

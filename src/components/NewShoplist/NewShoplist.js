import React, { Component } from "react";
import "./NewShoplist.scss";

class NewShoplist extends Component {
  state = {
    shoplist: false,
    products1: this.props.products
  };

  createShoplist = () => {
    this.setState({
      shoplist: true
    });
  };

  deleteItem = (event, name) => {
    if (event.target.checked) {
      let arr = this.props.products;
      const myArray = arr.filter(obj => obj.product !== name);
      this.setState({
        products1: myArray
      });
      console.log(this.state.products1);
    }
  };

  render() {
    const button = (
      <div>
        <button onClick={this.createShoplist} className="add-recipe">
          Wygeneruj listę zakupów
        </button>
      </div>
    );

    const newShoplist = (
      <ul>
        {this.state.products1.map((item, index) => {
          return (
            <li key={index}>
              <input
                onChange={event => this.deleteItem(event, item.product)}
                type="checkbox"
              />
              {item.product} {item.quantity} {item.typeOfQuantity}
            </li>
          );
        })}
      </ul>
    );
    return this.state.shoplist ? newShoplist : button;
  }
}

export default NewShoplist;

import React, { Component } from "react";
import "./NewShoplist.scss";

class NewShoplist extends Component {
  state = {
    shoplist: false,
    products: []
  };

  createShoplist = () => {
    this.setState({
      shoplist: true,
      products: this.props.products
    });
  };

  deleteItemFromShoplist = (event, name) => {
    if (event.target.checked) {
      let arr = [...this.state.products];
      const myArray = arr.filter(obj => obj.product !== name);
      this.setState({
        products: myArray
      });
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
        {this.state.products.map((item, index) => {
          return (
            <li key={index}>
              <input
                onChange={event =>
                  this.deleteItemFromShoplist(event, item.product)
                }
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

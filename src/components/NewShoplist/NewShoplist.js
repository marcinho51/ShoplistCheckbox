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

  deleteItemFromShoplist = (event, name, typeOfQuantity) => {
    if (event.target.checked) {
      let listOfProducts = [...this.state.products];

      let repeat = listOfProducts
        .map(item => item.product + item.typeOfQuantity)
        .indexOf(name + typeOfQuantity);

      if (repeat === -1) {
        let updatedListOfProducts = listOfProducts.filter(
          item => item.product !== name
        );

        listOfProducts = updatedListOfProducts;
      } else if (repeat !== -1) {
        let updatedListOfProducts = listOfProducts.filter(
          item =>
            !(item.product === name && item.typeOfQuantity === typeOfQuantity)
        );

        listOfProducts = updatedListOfProducts;
      }

      this.setState({
        products: listOfProducts
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
                  this.deleteItemFromShoplist(
                    event,
                    item.product,
                    item.typeOfQuantity
                  )
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

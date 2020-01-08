import React, { Component } from "react";
import "./NewShoplist.scss";

class NewShoplist extends Component {
  state = {
    products: this.props.products
  };

  // remove product from shopping list
  deleteItemFromShoppinglist = (event, name, typeOfQuantity) => {
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
    const sorted = [...this.state.products].sort((a, b) => {
      let categoryA = a.category;
      let categoryB = b.category;
      return categoryA.localeCompare(categoryB);
    });

    const shoppingList = (
      <div className="wrapper2">
        <div className="row">
          <div className="newShoplist col-12">
            <h1>Here's your shopping list:</h1>
            <table>
              <tbody>
                {sorted.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <input
                          onChange={event =>
                            this.deleteItemFromShoppinglist(
                              event,
                              item.product,
                              item.typeOfQuantity
                            )
                          }
                          type="checkbox"
                          checked={false}
                        />
                      </td>
                      <td> {item.product}</td>
                      <td>{item.quantity}</td>
                      <td>{item.typeOfQuantity}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );

    const finishedShoppingList = (
      <div className="wrapper2">
        <div className="row">
          <div className="newShoplist col-12">
            <h1>Shopping done, congratulations :)</h1>
            <img src={require("../../images/img1.jpg")} alt="Shopping done" />
          </div>
        </div>
      </div>
    );

    return sorted.length > 0 ? shoppingList : finishedShoppingList;
  }
}

export default NewShoplist;

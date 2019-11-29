import React, { Component } from "react";
import "./NewShoplist.scss";

class NewShoplist extends Component {
  state = {
    shoplist: false,
    products: this.props.products
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
    const sorted = [...this.state.products].sort((a, b) => {
      let categoryA = a.category;
      let categoryB = b.category;
      return categoryA.localeCompare(categoryB);
    });

    // const button = (
    //   <div>
    //     <button onClick={this.createShoplist} className="add-recipe">
    //       Wygeneruj listę zakupów
    //     </button>
    //   </div>
    // );

    // const newShoplist = (
    //   <ul>
    // {sorted.map((item, index) => {
    //   return (
    //     <li key={index}>
    //       <input
    //         onChange={event =>
    //           this.deleteItemFromShoplist(
    //             event,
    //             item.product,
    //             item.typeOfQuantity
    //           )
    //         }
    //         type="checkbox"
    //       />
    //       {item.product} {item.quantity} {item.typeOfQuantity}
    //     </li>
    //   );
    // })}
    //   </ul>
    // );

    return (
      <div className="wrapper">
        <div className="row">
          <div className="newShoplist col-12">
            <h1>Here's your shoplist:</h1>
            <table>
              <tbody>
                {sorted.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
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
  }
}

export default NewShoplist;

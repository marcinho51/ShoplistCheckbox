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

  // deleteItemFromShoplist = (event, name) => {
  //   if (event.target.checked) {
  //     let arr = [...this.state.products];
  //     const myArray = arr.filter(obj => obj.product !== name);
  //     this.setState({
  //       products: myArray
  //     });
  //   }
  // };

  deleteItemFromShoplist = (event, name, typeOfQuantity) => {
    if (event.target.checked) {
      let arr = [...this.state.products];
      // wszystkie produkty oprócz tych z nazwą z parametru funkcji
      const myArray1 = arr.filter(item => item.product !== name);
      // produkty z nazwą z parametru funkcji
      let myArray2 = arr.filter(item => item.product === name);
      // produkty z nazwą z parametru funkcji z typeOfQuantity "kg"
      let productsKg = myArray2.filter(item => item.typeOfQuantity === "kg");
      // produkty z nazwą z parametru funkcji z typeOfQuantity "items"
      let productsItems = myArray2.filter(
        item => item.typeOfQuantity === "items"
      );
      // produkty z nazwą z parametru funkcji według typeOfQuantity
      // let productsTypeOfQuantity = myArray2.map(item => item.typeOfQuantity);
      // sprawdzenie, czy wśród produktów z nazwą z parametru funkcji typeOfQuantity się powtarza
      // let repeat = productsTypeOfQuantity.indexOf(typeOfQuantity);

      console.log(myArray1);
      console.log(myArray2);
      console.log(productsKg);
      console.log(productsItems);

      if (typeOfQuantity === "kg" && productsItems.length > 0) {
        console.log("1");
        myArray1.push(productsItems);

        this.setState({
          products: myArray1
        });
      } else if (typeOfQuantity === "items" && productsKg.length > 0) {
        console.log("2");
        myArray1.push(productsKg);
        this.setState({
          products: myArray1
        });
      } else {
        console.log("3");
        this.setState({
          products: myArray1
        });
      }
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

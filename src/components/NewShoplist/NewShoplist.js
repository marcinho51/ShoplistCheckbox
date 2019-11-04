import React, { Component } from "react";
import "./NewShoplist.scss";

class NewShoplist extends Component {
  render() {
    return (
      <div className="col-2 widget-newShoplist">
        <div className="cross">
          <i className="fas fa-plus fa-2x"></i>
        </div>
        <p className="add-recipe">Nowa lista zakupów</p>
      </div>
    );
  }
}

export default NewShoplist;

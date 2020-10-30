import React, { Component, Fragment } from "react";
import CardProduct from "./CardProduct";
import "./Product.css";

class Product extends Component {
  state = {
    count: 3,
  };

  handleCounterChange = (newValue) => {
    this.setState({
      count: newValue,
    });
  };
  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="count">{this.state.count}</div>
        </div>
        <CardProduct
          onCounterChange={(value) => this.handleCounterChange(value)}
        />
      </Fragment>
    );
  }
}

export default Product;

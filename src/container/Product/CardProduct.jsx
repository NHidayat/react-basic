import React, { Component } from "react";

class CardProduct extends Component {
  state = {
    count: 3,
  };

  handleCounterChange = (data) => {
    this.props.onCounterChange(data);
  };

  handlePlus = () => {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        this.handleCounterChange(this.state.count);
      }
    );
  };

  handleMinus = () => {
    if (this.state.count > 1) {
      this.setState(
        {
          count: this.state.count - 1,
        },
        () => {
          this.handleCounterChange(this.state.count);
        }
      );
    }
  };

  render() {
    return (
      <div className="card">
        <div className="img-thumb-product">
          <img
            src="https://kit8.net/images/detailed/4/data_centre.png"
            alt=""
          />
        </div>
        <p className="product-title"></p>
        <p className="product-price"></p>
        <div className="counter">
          <button className="minus" onClick={this.handleMinus}>
            -
          </button>
          <input type="text" name="" id="" value={this.state.count} />
          <button className="plus" onClick={this.handlePlus}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default CardProduct;

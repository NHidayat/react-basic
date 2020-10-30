import React, { Component } from "react";
import YTComp from "../../component/YTComp/YTComp";
import Product from "../Product/Product";

class Home extends Component {
  render() {
    return (
      <div>
        <p>Youtube Component</p>
        <hr />
        <YTComp title="Tes1" />
        <YTComp title="Tes2" />
        <YTComp title="Tes3" />
        <YTComp title="Tes4" desc="lorem ipsum dolor" />
        <YTComp />
        <p>Counter</p>
        <hr />
        <Product />
      </div>
    );
  }
}

export default Home;

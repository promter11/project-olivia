import React, { Component, Fragment } from "react";
import Header from "../components/Header";
import Home from "../components/Home";

export default class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Home />
      </Fragment>
    );
  }
}

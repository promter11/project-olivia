import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import CartPage from "./pages/CartPage";
import NoMatch from "./components/NoMatch";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/catalog">
          <CatalogPage />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    );
  }
}

export default Routes;

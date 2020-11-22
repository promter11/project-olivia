import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import ItemPage from "./pages/ItemPage";
import CartPage from "./pages/CartPage";
import Checkout from "./components/Checkout";
import EmptyPage from "./pages/EmptyPage";
import NoMatch from "./components/NoMatch";
import Breadcrumbs from "./components/Breadcrumbs";

const routes = [
  { path: "/", title: "Главная", Component: HomePage },
  { path: "/catalog", title: "Каталог", Component: CatalogPage },
  { path: "/catalog/:id", Component: ItemPage },
  { path: "/cart", title: "Корзина", Component: CartPage },
  { path: "/cart/empty", title: "Корзина пуста", Component: EmptyPage },
  { path: "/checkout", title: "Оформление заказа", Component: Checkout },
  { path: "*", Component: NoMatch },
];

class Routes extends Component {
  render() {
    return (
      <Switch>
        {routes.map(({ path, Component }, index) => {
          return (
            <Route
              key={index}
              path={path}
              exact
              render={(props) => {
                const crumbs = routes
                  .filter(
                    ({ path, title }) =>
                      props.match.path.includes(path) && title
                  )
                  .map(({ path, ...rest }) => ({
                    path: Object.keys(props.match.params).length
                      ? Object.keys(props.match.params).reduce(
                          (path, param) =>
                            path.replace(
                              `:${param}`,
                              props.match.params[param]
                            ),
                          path
                        )
                      : path,
                    ...rest,
                  }));

                return (
                  <Fragment>
                    <Breadcrumbs crumbs={crumbs} />
                    <Component {...props} />
                  </Fragment>
                );
              }}
            />
          );
        })}
      </Switch>
    );
  }
}

export default Routes;

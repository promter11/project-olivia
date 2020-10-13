import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import CartPage from "./pages/CartPage";
import EmptyPage from "./pages/EmptyPage";
import NoMatch from "./components/NoMatch";
import Breadcrumbs from "./components/Breadcrumbs";

const routes = [
  { path: "/", title: "Главная", Component: HomePage },
  { path: "/catalog", title: "Каталог", Component: CatalogPage },
  { path: "/cart", title: "Корзина", Component: CartPage },
  { path: "/cart/empty", title: "Корзина пустая", Component: EmptyPage },
  { path: "*", title: "Страница не найдена", Component: NoMatch },
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
                  .filter(({ path }) => props.match.path.includes(path))
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

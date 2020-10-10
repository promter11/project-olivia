import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import { Title } from "./style";

import AppStore from "../../stores/AppStore";

class Counter extends Component {
  static propTypes = {
    count: PropTypes.number,
  };

  render() {
    const { count } = this.props;

    return <p className="app__counter">{count}</p>;
  }
}

class App extends Component {
  store = new AppStore();

  render() {
    const { title } = this.store;

    return (
      <Fragment>
        <Title className="app__title">{title}</Title>
        <Counter count={5} />
      </Fragment>
    );
  }
}

export default App;

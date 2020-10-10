import React, { Component } from "react";
import { Title } from "./style";

import AppStore from "../../stores/AppStore";

class App extends Component {
  store = new AppStore();

  render() {
    const { title } = this.store;

    return <Title>{title}</Title>;
  }
}

export default App;

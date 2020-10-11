import React, { Component } from "react";
import { AppStyled } from "./style";
import GlobalStyles from "../../styled";
import Routes from "../../routes";

class App extends Component {
  render() {
    return (
      <AppStyled>
        <GlobalStyles />
        <Routes />
      </AppStyled>
    );
  }
}

export default App;

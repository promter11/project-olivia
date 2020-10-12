import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { AppStyled, Main } from "./style";
import GlobalStyles from "../../styled";

import Header from "../Header";
import Routes from "../../routes";

class App extends Component {
  render() {
    const { pathname } = this.props.location;

    const isHomePage = pathname === "/";

    return (
      <AppStyled active={isHomePage}>
        <GlobalStyles />
        <Header active={isHomePage} />
        <Main>
          <Routes />
        </Main>
      </AppStyled>
    );
  }
}

export default withRouter(App);

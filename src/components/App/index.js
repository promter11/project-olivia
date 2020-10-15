import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import GlobalStyles from "../../styled";
import * as S from "./style";

import Header from "../Header";
import Routes from "../../routes";

class App extends Component {
  render() {
    const { pathname } = this.props.location;

    const isHomePage = pathname === "/";

    return (
      <S.App active={isHomePage}>
        <GlobalStyles />
        <Header active={isHomePage} />
        <S.Main>
          <Routes />
        </S.Main>
      </S.App>
    );
  }
}

export default withRouter(App);

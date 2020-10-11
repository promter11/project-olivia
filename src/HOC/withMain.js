import React, { Component } from "react";
import { Main, Container } from "../styled/components";

const withMain = (Wrapped) => {
  return class extends Component {
    render() {
      return (
        <Main>
          <Container>
            <Wrapped {...this.props}>{this.props.children}</Wrapped>
          </Container>
        </Main>
      );
    }
  };
};

export default withMain;

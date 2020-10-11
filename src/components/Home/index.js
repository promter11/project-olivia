import React, { Component } from "react";
import { HomeStyled, Title, Description, StyledLink } from "./style";
import withMain from "../../HOC/withMain";

class Home extends Component {
  render() {
    return (
      <HomeStyled>
        <Title>Olivia</Title>
        <Description>
          В этом мире нет ничего вечного. Все потихоньку рассыпается. Под
          кажущейся человеку нерушимой поверхностью вещей зачастую вызревают
          кошмары.
        </Description>
        <StyledLink to="/catalog">Изучить каталог</StyledLink>
      </HomeStyled>
    );
  }
}

export default withMain(Home);

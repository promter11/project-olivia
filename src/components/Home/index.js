import React, { Component } from "react";
import { Container } from "../../styled/components";
import { HomeStyled, Block, Title, Description, StyledLink } from "./style";

class Home extends Component {
  render() {
    return (
      <HomeStyled>
        <Container>
          <Block>
            <Title>Olivia</Title>
            <Description>
              В этом мире нет ничего вечного. Все потихоньку рассыпается. Под
              кажущейся человеку нерушимой поверхностью вещей зачастую вызревают
              кошмары.
            </Description>
            <StyledLink to="/catalog">Изучить каталог</StyledLink>
          </Block>
        </Container>
      </HomeStyled>
    );
  }
}

export default Home;

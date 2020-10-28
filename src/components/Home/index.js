import React, { Component } from "react";

import { Container } from "../../styled/components";
import * as S from "./style";

class Home extends Component {
  render() {
    return (
      <S.Home>
        <Container>
          <S.Block>
            <S.Title>Olivia</S.Title>
            <S.Description>
              В&nbsp;этом мире нет ничего вечного. Все потихоньку рассыпается.
              Под кажущейся человеку нерушимой поверхностью вещей зачастую
              вызревают кошмары.
            </S.Description>
            <S.StyledLink to="/catalog">Изучить каталог</S.StyledLink>
          </S.Block>
        </Container>
      </S.Home>
    );
  }
}

export default Home;

import React, { Component } from "react";
import { observer } from "mobx-react";

import { Container } from "../../styled/components";
import * as S from "./style";

import Filter from "../Filter";
import Sort from "../Sort";

import FilterStore from "../../stores/FilterStore";
import SortStore from "../../stores/SortStore";

class Catalog extends Component {
  render() {
    const { filteredItems, count } = FilterStore;

    return (
      <S.Catalog>
        <Container>
          <S.CatalogBlock>
            <S.Wrapper>
              <S.TitleWrapper>
                <S.Title>Каталог</S.Title>
                <S.Count>{count}</S.Count>
              </S.TitleWrapper>
              <Sort />
            </S.Wrapper>
            <S.Wrapper>
              <Filter />
              <S.List>
                {filteredItems.map(
                  ({ id, brand, title, image, options }, _) => {
                    return (
                      <S.ListItem
                        key={id}
                        style={{
                          background: `rgba(0, 0, 0, 0) url("${image}") no-repeat center center / cover`,
                          backgroundBlendMode: "darken",
                        }}
                      >
                        <S.ListItemBrand>{brand}</S.ListItemBrand>
                        <S.ListItemTitle>{title}</S.ListItemTitle>
                        <S.ListItemWrapper>
                          <S.ListItemPrice>
                            {options[0].price.toLocaleString()} ₽
                          </S.ListItemPrice>
                          <S.ListItemLink to={`/catalog/${id}`}>
                            Подробнее
                          </S.ListItemLink>
                        </S.ListItemWrapper>
                      </S.ListItem>
                    );
                  }
                )}
              </S.List>
            </S.Wrapper>
          </S.CatalogBlock>
        </Container>
      </S.Catalog>
    );
  }
}

export default observer(Catalog);

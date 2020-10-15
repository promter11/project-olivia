import React, { Component } from "react";

import { Container } from "../../styled/components";
import * as S from "./style";

import Filter from "../Filter";
import Sort from "../Sort";

import ItemStore from "../../stores/ItemStore";

export default class Catalog extends Component {
  render() {
    const { items, count } = ItemStore;

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
                {items.map(
                  ({ id, active, brand, title, image, options }, _) => {
                    return (
                      active && (
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
                      )
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

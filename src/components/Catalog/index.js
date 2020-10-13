import React, { Component } from "react";
import { Container } from "../../styled/components";
import {
  CatalogStyled,
  CatalogBlock,
  Title,
  TitleWrapper,
  Count,
  Wrapper,
  List,
  ListItem,
  ListItemBrand,
  ListItemTitle,
  ListItemWrapper,
  ListItemPrice,
  ListItemLink,
} from "./style";

import Filter from "../Filter";
import Sort from "../Sort";

export default class Catalog extends Component {
  render() {
    const items = [
      { id: 0, title: "Aventus", brand: "Creed", price: 19320, image: "" },
      {
        id: 1,
        title: "Virgin Island Water",
        brand: "Creed",
        price: 17090,
        image: "",
      },
      {
        id: 2,
        title: "Spicebomb",
        brand: "Viktor & Rolf",
        price: 7230,
        image: "",
      },
      {
        id: 3,
        title: "Herod",
        brand: "Parfums de Marly",
        price: 21010,
        image: "",
      },
    ];

    return (
      <CatalogStyled>
        <Container>
          <CatalogBlock>
            <Wrapper>
              <TitleWrapper>
                <Title>Каталог</Title>
                <Count>100</Count>
              </TitleWrapper>
              <Sort />
            </Wrapper>
            <Wrapper>
              <Filter />
              <List>
                {items.map(({ id, title, brand, price }, _) => {
                  return (
                    <ListItem key={id}>
                      <ListItemBrand>{brand}</ListItemBrand>
                      <ListItemTitle>{title}</ListItemTitle>
                      <ListItemWrapper>
                        <ListItemPrice>{price} ₽</ListItemPrice>
                        <ListItemLink to="/">Подробнее</ListItemLink>
                      </ListItemWrapper>
                    </ListItem>
                  );
                })}
              </List>
            </Wrapper>
          </CatalogBlock>
        </Container>
      </CatalogStyled>
    );
  }
}

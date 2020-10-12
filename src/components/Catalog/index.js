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
} from "./style";

import Breadcrumbs from "../Breadcrumbs";
import Filter from "../Filter";

export default class Catalog extends Component {
  render() {
    const crumbs = [
      { title: "Главная", link: "/" },
      { title: "Каталог", link: "/catalog" },
    ];

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
          <Breadcrumbs crumbs={crumbs} />
          <CatalogBlock>
            <TitleWrapper>
              <Title>Каталог</Title>
              <Count>100</Count>
            </TitleWrapper>
            <Wrapper>
              <Filter />
              <List>
                {items.map(({ id, title, brand, price }, _) => {
                  return (
                    <ListItem key={id}>
                      {title} {brand} {price}
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

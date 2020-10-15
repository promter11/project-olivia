import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { Container } from "../../styled/components";
import * as S from "./style";

import ItemStore from "../../stores/ItemStore";

class CatalogItem extends Component {
  render() {
    const {
      params: { id },
    } = this.props.match;
    const { getItemById } = ItemStore;

    const {
      active,
      article,
      brand,
      title,
      image,
      options,
      specifications,
    } = getItemById(id);

    return (
      <S.CatalogItem>
        <Container>
          <S.Wrapper>
            <S.TitleWrapper>
              <S.Title>
                {brand} {title}
              </S.Title>
              <S.Article>{article}</S.Article>
            </S.TitleWrapper>
            <S.Active>{active ? "Есть в наличии" : "Нет в наличии"}</S.Active>
          </S.Wrapper>
          <S.Wrapper>
            <S.Block>
              <S.Image src={image} loading="lazy" alt={`${brand} - ${title}`} />
            </S.Block>
            <S.Block>
              <S.List>
                <S.ListItem>
                  <S.ListItemTitle>Объем</S.ListItemTitle>
                  <S.VolumeList>
                    {options.map(({ id, volume }, _) => {
                      return (
                        <S.VolumeListItem key={id}>
                          {volume} ML
                        </S.VolumeListItem>
                      );
                    })}
                  </S.VolumeList>
                </S.ListItem>
                <S.ListItem>
                  <S.ListItemTitle>Цена</S.ListItemTitle>
                  <S.PriceList>
                    <S.PriceListItem>
                      <S.PriceTitle>3000 P</S.PriceTitle>
                      <S.PriceText>цена со скидкой</S.PriceText>
                    </S.PriceListItem>
                    <S.PriceListItem discount>
                      <S.PriceTitle>5550 P</S.PriceTitle>
                      <S.PriceText>цена без скидки</S.PriceText>
                    </S.PriceListItem>
                  </S.PriceList>
                  <S.Button href="/">Добавить в корзину</S.Button>
                </S.ListItem>
              </S.List>
            </S.Block>
          </S.Wrapper>
        </Container>
      </S.CatalogItem>
    );
  }
}

export default withRouter(CatalogItem);

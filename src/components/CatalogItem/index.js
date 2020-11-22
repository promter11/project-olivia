import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { observer } from "mobx-react";

import { Container } from "../../styled/components";
import * as S from "./style";

import ItemStore from "../../stores/ItemStore";
import TabsStore from "../../stores/TabsStore";

class CatalogItem extends Component {
  render() {
    const {
      params: { id },
    } = this.props.match;
    const {
      getItemById,
      getItemPriceWithDiscount,
      splitNumber,
      zoomImage,
    } = ItemStore;
    const { items, activeID, selectItem } = TabsStore;

    const {
      active,
      code,
      brand,
      title,
      description,
      image,
      price,
      options,
      specifications,
      notes,
    } = getItemById(id);

    return (
      <S.CatalogItem>
        <Container>
          <S.Wrapper>
            <S.TitleWrapper>
              <S.Title>
                {brand} {title}
              </S.Title>
              <S.Code>{code}</S.Code>
            </S.TitleWrapper>
            <S.Active active={active === "Y"}>
              {active === "Y" ? "Есть в наличии" : "Нет в наличии"}
            </S.Active>
          </S.Wrapper>
          <S.Wrapper>
            <S.Block
              style={{
                background: `url("${image}") no-repeat`,
              }}
            >
              <S.Image
                src={image}
                loading="lazy"
                alt={`${brand} - ${title}`}
                onMouseMove={(event) => zoomImage(event)}
              />
            </S.Block>
            <S.Block>
              <S.List>
                <S.ListItem>
                  <S.ListItemTitle>Объем</S.ListItemTitle>
                  <S.VolumeForm>
                    {options.map(({ id, volume }, _) => {
                      return (
                        <S.VolumeFormLabel key={id}>
                          <S.VolumeRadio
                            value={volume}
                            defaultChecked={id === 0}
                          />
                          <S.VolumeRadioText>
                            {volume}&nbsp;ML
                          </S.VolumeRadioText>
                        </S.VolumeFormLabel>
                      );
                    })}
                  </S.VolumeForm>
                </S.ListItem>
                <S.ListItem>
                  <S.ListItemTitle>Цена</S.ListItemTitle>
                  <S.PriceList>
                    <S.PriceListItem>
                      <S.PriceTitle>
                        {splitNumber(
                          getItemPriceWithDiscount(
                            price,
                            options[0].discountPercentage
                          )
                        )}
                        &nbsp;₽
                      </S.PriceTitle>
                      <S.PriceText>цена со&nbsp;скидкой</S.PriceText>
                    </S.PriceListItem>
                    <S.PriceListItem discount>
                      <S.PriceTitle>{splitNumber(price)}&nbsp;₽</S.PriceTitle>
                      <S.PriceText>цена без скидки</S.PriceText>
                    </S.PriceListItem>
                  </S.PriceList>
                  <S.Button href="/" disabled={active !== "Y"}>
                    Добавить в&nbsp;корзину
                  </S.Button>
                </S.ListItem>
                <S.ListItem>
                  <S.Tabs>
                    {items.map((el, id) => {
                      return (
                        <S.TabsItem
                          key={id}
                          active={id === activeID}
                          onClick={() => selectItem(id)}
                        >
                          {el}
                        </S.TabsItem>
                      );
                    })}
                  </S.Tabs>
                  <S.TabsBlock active={0 === activeID}>
                    <S.SpecsList>
                      {specifications.map(({ id, title, description }, _) => {
                        return (
                          <S.SpecsItem key={id}>
                            <S.SpecsItemTitle>{title}</S.SpecsItemTitle>
                            <S.SpecsDotted />
                            <S.SpecsItemDesc>{description}</S.SpecsItemDesc>
                          </S.SpecsItem>
                        );
                      })}
                    </S.SpecsList>
                  </S.TabsBlock>
                  <S.TabsBlock active={1 === activeID}>
                    <S.Description>{description}</S.Description>
                  </S.TabsBlock>
                  <S.TabsBlock active={2 === activeID}>
                    {notes.map(({ id, title, description }) => {
                      return (
                        <S.NoteBlock key={id}>
                          <S.NoteTitle>{title}</S.NoteTitle>
                          <S.NoteDescription>{description}</S.NoteDescription>
                        </S.NoteBlock>
                      );
                    })}
                  </S.TabsBlock>
                </S.ListItem>
              </S.List>
            </S.Block>
          </S.Wrapper>
        </Container>
      </S.CatalogItem>
    );
  }
}

export default withRouter(observer(CatalogItem));

import React, { Component } from "react";
import { observer } from "mobx-react";

import Aventus from "../../assets/images/items/Creed Aventus.jpg";
import VIW from "../../assets/images/items/Creed Virgin Island Water.jpg";

import { Container } from "../../styled/components";
import * as S from "./style";

class Cart extends Component {
  render() {
    return (
      <S.Cart>
        <Container>
          <S.Title>Корзина</S.Title>
          <S.Wrapper>
            <S.Block>
              <S.BlockWrapper>
                <S.Image src={Aventus} alt="Creed" />
                <S.Inner>
                  <S.TitleWrapper>
                    <S.Name>Creed Aventus</S.Name>
                    <S.Volume>30 ML</S.Volume>
                  </S.TitleWrapper>
                  <S.PriceList>
                    <S.PriceListItem>
                      <S.PriceTitle>22 100 ₽</S.PriceTitle>
                      <S.PriceText>цена со скидкой</S.PriceText>
                    </S.PriceListItem>
                    <S.PriceListItem discount>
                      <S.PriceTitle>25 020 ₽</S.PriceTitle>
                      <S.PriceText>цена без скидки</S.PriceText>
                    </S.PriceListItem>
                  </S.PriceList>
                </S.Inner>
              </S.BlockWrapper>
              <S.BlockWrapper>
                <S.Options>
                  <S.Plus>
                    <path
                      d="M10 0C4.48578 0 0 4.48578 0 10C0 15.5142 4.48578 20 10 20C15.5142 20 20 15.5142 20 10C20 4.48578 15.5142 0 10 0ZM14.375 10.8333H10.8333V14.375C10.8333 14.8351 10.4601 15.2083 10 15.2083C9.53995 15.2083 9.16672 14.8351 9.16672 14.375V10.8333H5.625C5.16495 10.8333 4.79172 10.4601 4.79172 10C4.79172 9.53995 5.16495 9.16672 5.625 9.16672H9.16672V5.625C9.16672 5.16495 9.53995 4.79172 10 4.79172C10.4601 4.79172 10.8333 5.16495 10.8333 5.625V9.16672H14.375C14.8351 9.16672 15.2083 9.53995 15.2083 10C15.2083 10.4601 14.8351 10.8333 14.375 10.8333Z"
                      fill="#CCCCCC"
                    />
                  </S.Plus>
                  <S.Count>1</S.Count>
                  <S.Minus>
                    <path
                      d="M10 0C4.48578 0 0 4.48578 0 10C0 15.5142 4.48578 20 10 20C15.5142 20 20 15.5142 20 10C20 4.48578 15.5142 0 10 0ZM14.375 10.8333H5.625C5.16495 10.8333 4.79172 10.4601 4.79172 10C4.79172 9.53995 5.16495 9.16672 5.625 9.16672H14.375C14.8351 9.16672 15.2083 9.53995 15.2083 10C15.2083 10.4601 14.8351 10.8333 14.375 10.8333Z"
                      fill="#CCCCCC"
                    />
                  </S.Minus>
                </S.Options>
              </S.BlockWrapper>
              <S.BlockWrapper>
                <S.Close>
                  <polygon points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 214.2,178.5" />
                </S.Close>
              </S.BlockWrapper>
            </S.Block>
            <S.Block>
              <S.BlockWrapper>
                <S.Image src={VIW} alt="Creed" />
                <S.Inner>
                  <S.TitleWrapper>
                    <S.Name>Creed Virgin Island Water</S.Name>
                    <S.Volume>125 ML</S.Volume>
                  </S.TitleWrapper>
                  <S.PriceList>
                    <S.PriceListItem>
                      <S.PriceTitle>12 400 ₽</S.PriceTitle>
                      <S.PriceText>цена со скидкой</S.PriceText>
                    </S.PriceListItem>
                    <S.PriceListItem discount>
                      <S.PriceTitle>19 540 ₽</S.PriceTitle>
                      <S.PriceText>цена без скидки</S.PriceText>
                    </S.PriceListItem>
                  </S.PriceList>
                </S.Inner>
              </S.BlockWrapper>
              <S.BlockWrapper>
                <S.Options>
                  <S.Plus>
                    <path d="M10 0C4.48578 0 0 4.48578 0 10C0 15.5142 4.48578 20 10 20C15.5142 20 20 15.5142 20 10C20 4.48578 15.5142 0 10 0ZM14.375 10.8333H10.8333V14.375C10.8333 14.8351 10.4601 15.2083 10 15.2083C9.53995 15.2083 9.16672 14.8351 9.16672 14.375V10.8333H5.625C5.16495 10.8333 4.79172 10.4601 4.79172 10C4.79172 9.53995 5.16495 9.16672 5.625 9.16672H9.16672V5.625C9.16672 5.16495 9.53995 4.79172 10 4.79172C10.4601 4.79172 10.8333 5.16495 10.8333 5.625V9.16672H14.375C14.8351 9.16672 15.2083 9.53995 15.2083 10C15.2083 10.4601 14.8351 10.8333 14.375 10.8333Z" />
                  </S.Plus>
                  <S.Count>12</S.Count>
                  <S.Minus>
                    <path d="M10 0C4.48578 0 0 4.48578 0 10C0 15.5142 4.48578 20 10 20C15.5142 20 20 15.5142 20 10C20 4.48578 15.5142 0 10 0ZM14.375 10.8333H5.625C5.16495 10.8333 4.79172 10.4601 4.79172 10C4.79172 9.53995 5.16495 9.16672 5.625 9.16672H14.375C14.8351 9.16672 15.2083 9.53995 15.2083 10C15.2083 10.4601 14.8351 10.8333 14.375 10.8333Z" />
                  </S.Minus>
                </S.Options>
              </S.BlockWrapper>
              <S.BlockWrapper>
                <S.Close>
                  <polygon points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 214.2,178.5" />
                </S.Close>
              </S.BlockWrapper>
            </S.Block>
            <S.Result>
              <S.ButtonsWrapper>
                <S.Button href="/">Оформить заказ</S.Button>
                <S.Button href="/" clear>
                  Очистить корзину
                </S.Button>
              </S.ButtonsWrapper>
              <S.ResultWrapper>
                <S.ResultTitle>Итого</S.ResultTitle>
                <S.ResultPrice>43 010 ₽</S.ResultPrice>
              </S.ResultWrapper>
            </S.Result>
          </S.Wrapper>
        </Container>
      </S.Cart>
    );
  }
}

export default observer(Cart);

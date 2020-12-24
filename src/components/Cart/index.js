import React, { Component } from "react";
import { observer } from "mobx-react";
import { Redirect } from "react-router-dom";

import { Container } from "../../styled/components";
import * as S from "./style";

import ItemStore from "../../stores/ItemStore";
import CartStore from "../../stores/CartStore";

class Cart extends Component {
  render() {
    const { getItemPriceWithDiscount, splitNumber } = ItemStore;
    const {
      items,
      totalPrice,
      plusItem,
      minusItem,
      removeItem,
      clearCart,
      getItemWithTheSameVolume,
      getItemsCurrentOption,
    } = CartStore;

    if (!items.length) {
      return <Redirect to="/cart/empty" />;
    }

    return (
      <S.Cart>
        <Container>
          <S.Title>Корзина</S.Title>
          <S.Wrapper>
            {items.map(({ id, brand, title, article, image }, index) => {
              const item = getItemWithTheSameVolume(items[index]);
              const {
                price,
                volume,
                discountPercentage,
                countInCart,
              } = getItemsCurrentOption(item);

              const uniqueKey = Math.round(Math.random() * 10000000000);

              return (
                <S.Block key={uniqueKey}>
                  <S.BlockWrapper>
                    <S.Image src={image} alt={title} />
                    <S.Inner>
                      <S.TitleWrapper>
                        <S.Name>
                          {brand} {title}
                        </S.Name>
                        <S.Volume>{volume}&nbsp;ML</S.Volume>
                      </S.TitleWrapper>
                      <S.PriceList>
                        <S.PriceListItem>
                          <S.PriceTitle>
                            {splitNumber(
                              getItemPriceWithDiscount(
                                price,
                                discountPercentage
                              )
                            )}
                            &nbsp;₽
                          </S.PriceTitle>
                          <S.PriceText>цена со&nbsp;скидкой</S.PriceText>
                        </S.PriceListItem>
                        <S.PriceListItem discount>
                          <S.PriceTitle>
                            {splitNumber(price)}&nbsp;₽
                          </S.PriceTitle>
                          <S.PriceText>цена без скидки</S.PriceText>
                        </S.PriceListItem>
                      </S.PriceList>
                    </S.Inner>
                  </S.BlockWrapper>
                  <S.BlockWrapper>
                    <S.Options>
                      <S.Plus onClick={() => plusItem(index)}>
                        <path
                          d="M10 0C4.48578 0 0 4.48578 0 10C0 15.5142 4.48578 20 10 20C15.5142 20 20 15.5142 20 10C20 4.48578 15.5142 0 10 0ZM14.375 10.8333H10.8333V14.375C10.8333 14.8351 10.4601 15.2083 10 15.2083C9.53995 15.2083 9.16672 14.8351 9.16672 14.375V10.8333H5.625C5.16495 10.8333 4.79172 10.4601 4.79172 10C4.79172 9.53995 5.16495 9.16672 5.625 9.16672H9.16672V5.625C9.16672 5.16495 9.53995 4.79172 10 4.79172C10.4601 4.79172 10.8333 5.16495 10.8333 5.625V9.16672H14.375C14.8351 9.16672 15.2083 9.53995 15.2083 10C15.2083 10.4601 14.8351 10.8333 14.375 10.8333Z"
                          fill="#CCCCCC"
                        />
                      </S.Plus>
                      <S.Count>{countInCart}</S.Count>
                      <S.Minus onClick={() => minusItem(index)}>
                        <path
                          d="M10 0C4.48578 0 0 4.48578 0 10C0 15.5142 4.48578 20 10 20C15.5142 20 20 15.5142 20 10C20 4.48578 15.5142 0 10 0ZM14.375 10.8333H5.625C5.16495 10.8333 4.79172 10.4601 4.79172 10C4.79172 9.53995 5.16495 9.16672 5.625 9.16672H14.375C14.8351 9.16672 15.2083 9.53995 15.2083 10C15.2083 10.4601 14.8351 10.8333 14.375 10.8333Z"
                          fill="#CCCCCC"
                        />
                      </S.Minus>
                    </S.Options>
                  </S.BlockWrapper>
                  <S.BlockWrapper>
                    <S.Close onClick={() => removeItem(index)}>
                      <polygon points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 214.2,178.5" />
                    </S.Close>
                  </S.BlockWrapper>
                </S.Block>
              );
            })}
            <S.Result>
              <S.ButtonsWrapper>
                <S.Button to="/cart/checkout">Оформить заказ</S.Button>
                <S.ClearButton clear onClick={() => clearCart()}>
                  Очистить корзину
                </S.ClearButton>
              </S.ButtonsWrapper>
              <S.ResultWrapper>
                <S.ResultTitle>Итого</S.ResultTitle>
                <S.ResultPrice>{splitNumber(totalPrice)}&nbsp;₽</S.ResultPrice>
              </S.ResultWrapper>
            </S.Result>
          </S.Wrapper>
        </Container>
      </S.Cart>
    );
  }
}

export default observer(Cart);

import React, { Component } from "react";
import { observer } from "mobx-react";
import { Redirect } from "react-router-dom";

import { Container } from "../../styled/components";
import * as S from "./style";

import ItemStore from "../../stores/ItemStore";
import CartStore from "../../stores/CartStore";
import ValidationStore from "../../stores/ValidationStore";

class Checkout extends Component {
  render() {
    const { splitNumber } = ItemStore;
    const { items, count, getItemsCurrentOption } = CartStore;
    const { fields, validateFields, submitForm } = ValidationStore;

    if (!items.length) {
      return <Redirect to="/cart/empty" />;
    }

    return (
      <S.Checkout>
        <Container>
          <S.Title>Оформление заказа</S.Title>
          <S.Inner>
            <S.Wrapper>
              <S.Block>
                <S.BlockTitle>Данные получателя</S.BlockTitle>
                <S.Form>
                  {fields.map(
                    (
                      { type, name, title, error: { status, message } },
                      index
                    ) => {
                      return (
                        <S.Label key={index}>
                          <S.Input
                            type={type}
                            name={name}
                            error={status}
                            required
                            onChange={({ target: { value } }) =>
                              validateFields(index, fields[index], value)
                            }
                          />
                          <S.InputText>{title}</S.InputText>
                          <S.ErrorText>{message}</S.ErrorText>
                        </S.Label>
                      );
                    }
                  )}
                  <S.CheckboxLabel>
                    <S.Checkbox />
                    <S.CheckboxText>
                      Я&nbsp;принимаю условия пользовательского соглашения
                      и&nbsp;согласен(-на) на&nbsp;обработку персональных данных
                    </S.CheckboxText>
                  </S.CheckboxLabel>
                </S.Form>
              </S.Block>
              <S.Block>
                <S.BlockTitle>Способ доставки</S.BlockTitle>
                <S.Form>
                  <S.RadioLabel>
                    <S.Radio value="delivery" />
                    <S.RadioText>Доставка курьером</S.RadioText>
                  </S.RadioLabel>
                  <S.RadioLabel>
                    <S.Radio value="pickup" />
                    <S.RadioText>Самовывоз</S.RadioText>
                  </S.RadioLabel>
                </S.Form>
              </S.Block>
              <S.Block>
                <S.BlockTitle>Адрес доставки</S.BlockTitle>
                <S.Form>
                  <S.Label address>
                    <S.Input type="text" required />
                    <S.InputText>Введите адрес доставки</S.InputText>
                    <S.ErrorText>
                      Пожалуйста, проверьте корректность введенных данных
                    </S.ErrorText>
                  </S.Label>
                </S.Form>
              </S.Block>
              <S.Block>
                <S.BlockTitle>Адрес магазина</S.BlockTitle>
                <S.Form>
                  <S.CustomSelect>
                    <S.CustomSelectItem>
                      Выберите адрес магазина из списка
                    </S.CustomSelectItem>
                    <S.CustomOptionList>
                      <S.CustomOptionListItem>
                        ул. Усачева, 1, Москва, 119048
                      </S.CustomOptionListItem>
                      <S.CustomOptionListItem>
                        наб. реки Смоленки, 2, Санкт-Петербург, 199178
                      </S.CustomOptionListItem>
                      <S.CustomOptionListItem>
                        ул. Новорядская, 124, Волгоград, Волгоградская обл.,
                        400081
                      </S.CustomOptionListItem>
                    </S.CustomOptionList>
                  </S.CustomSelect>
                  <S.Select>
                    <S.Option value="ул. Усачева, 1, Москва, 119048" />
                    <S.Option value="наб. реки Смоленки, 2, Санкт-Петербург, 199178" />
                    <S.Option value="ул. Новорядская, 124, Волгоград, Волгоградская обл., 400081" />
                  </S.Select>
                </S.Form>
              </S.Block>
            </S.Wrapper>
            <S.Cart>
              <S.CartTitleWrapper>
                <S.CartTitle>Ваш заказ</S.CartTitle>
                <S.CartCount>Товаров в&nbsp;корзине: {count}</S.CartCount>
              </S.CartTitleWrapper>
              <S.CartWrapper>
                {items.map(({ id, brand, title, image }, index) => {
                  const {
                    type,
                    volume,
                    price,
                    countInCart,
                  } = getItemsCurrentOption(items[index]);

                  return (
                    <S.Product key={index}>
                      <S.ProductImage src={image} alt={brand} />
                      <S.ProductWrapper>
                        <S.ProductType>{type}</S.ProductType>
                        <S.ProductTitle>
                          {brand} {title}
                        </S.ProductTitle>
                        <S.ProductVolume>{volume}&nbsp;ML</S.ProductVolume>
                        <S.ProductInner>
                          <S.ProductCount>
                            Количество: {countInCart}
                          </S.ProductCount>
                          <S.ProductPrice>
                            {splitNumber(price)}&nbsp;₽
                          </S.ProductPrice>
                        </S.ProductInner>
                      </S.ProductWrapper>
                    </S.Product>
                  );
                })}
              </S.CartWrapper>
              <S.OrderButton onClick={(event) => submitForm(event)}>
                Оформить заказ
              </S.OrderButton>
            </S.Cart>
          </S.Inner>
        </Container>
      </S.Checkout>
    );
  }
}

export default observer(Checkout);

import React, { Component } from "react";
import { observer } from "mobx-react";

import { Container } from "../../styled/components";
import * as S from "./style";

import AventusImg from "../../assets/images/items/Creed Aventus.jpg";

class Checkout extends Component {
  render() {
    return (
      <S.Checkout>
        <Container>
          <S.Title>Оформление заказа</S.Title>
          <S.Inner>
            <S.Wrapper>
              <S.Block>
                <S.BlockTitle>Данные получателя</S.BlockTitle>
                <S.Form>
                  <S.Label>
                    <S.Input type="text" required />
                    <S.InputText>Фамилия</S.InputText>
                    <S.ErrorText>
                      Пожалуйста, проверьте корректность введенных данных
                    </S.ErrorText>
                  </S.Label>
                  <S.Label>
                    <S.Input type="text" required />
                    <S.InputText>Имя</S.InputText>
                    <S.ErrorText>
                      Пожалуйста, проверьте корректность введенных данных
                    </S.ErrorText>
                  </S.Label>
                  <S.Label>
                    <S.Input type="text" required />
                    <S.InputText>Отчество</S.InputText>
                    <S.ErrorText>
                      Пожалуйста, проверьте корректность введенных данных
                    </S.ErrorText>
                  </S.Label>
                  <S.Label>
                    <S.Input type="text" required />
                    <S.InputText>Телефон</S.InputText>
                    <S.ErrorText>
                      Пожалуйста, проверьте корректность введенных данных
                    </S.ErrorText>
                  </S.Label>
                  <S.Label>
                    <S.Input type="text" required />
                    <S.InputText>Адрес электронной почты</S.InputText>
                    <S.ErrorText>
                      Пожалуйста, проверьте корректность введенных данных
                    </S.ErrorText>
                  </S.Label>
                  <S.CheckboxLabel>
                    <S.Checkbox />
                    <S.CheckboxText>
                      Я принимаю условия пользовательского соглашения и согласен
                      на обработку персональных данных
                    </S.CheckboxText>
                  </S.CheckboxLabel>
                </S.Form>
              </S.Block>
              <S.Block>
                <S.BlockTitle>Способ доставки</S.BlockTitle>
                <S.Form>
                  <S.RadioLabel>
                    <S.Radio />
                    <S.RadioText>Доставка курьером</S.RadioText>
                  </S.RadioLabel>
                  <S.RadioLabel>
                    <S.Radio />
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
                <S.CartCount>10 товаров</S.CartCount>
              </S.CartTitleWrapper>
              <S.CartWrapper>
                <S.Product>
                  <S.ProductImage src={AventusImg} alt="Creed" />
                  <S.ProductWrapper>
                    <S.ProductType>Парфюмерная вода</S.ProductType>
                    <S.ProductTitle>Creed Aventus</S.ProductTitle>
                    <S.ProductVolume>50 ML</S.ProductVolume>
                    <S.ProductPrice>19 920 P</S.ProductPrice>
                  </S.ProductWrapper>
                </S.Product>
                <S.Product>
                  <S.ProductImage src={AventusImg} alt="Creed" />
                  <S.ProductWrapper>
                    <S.ProductType>Парфюмерная вода</S.ProductType>
                    <S.ProductTitle>Creed Aventus</S.ProductTitle>
                    <S.ProductVolume>50 ML</S.ProductVolume>
                    <S.ProductPrice>19 920 P</S.ProductPrice>
                  </S.ProductWrapper>
                </S.Product>
                <S.Product>
                  <S.ProductImage src={AventusImg} alt="Creed" />
                  <S.ProductWrapper>
                    <S.ProductType>Парфюмерная вода</S.ProductType>
                    <S.ProductTitle>Creed Aventus</S.ProductTitle>
                    <S.ProductVolume>50 ML</S.ProductVolume>
                    <S.ProductPrice>19 920 P</S.ProductPrice>
                  </S.ProductWrapper>
                </S.Product>
                <S.Product>
                  <S.ProductImage src={AventusImg} alt="Creed" />
                  <S.ProductWrapper>
                    <S.ProductType>Парфюмерная вода</S.ProductType>
                    <S.ProductTitle>Creed Aventus</S.ProductTitle>
                    <S.ProductVolume>50 ML</S.ProductVolume>
                    <S.ProductPrice>19 920 P</S.ProductPrice>
                  </S.ProductWrapper>
                </S.Product>
                <S.Product>
                  <S.ProductImage src={AventusImg} alt="Creed" />
                  <S.ProductWrapper>
                    <S.ProductType>Парфюмерная вода</S.ProductType>
                    <S.ProductTitle>Creed Aventus</S.ProductTitle>
                    <S.ProductVolume>50 ML</S.ProductVolume>
                    <S.ProductPrice>19 920 P</S.ProductPrice>
                  </S.ProductWrapper>
                </S.Product>
                <S.Product>
                  <S.ProductImage src={AventusImg} alt="Creed" />
                  <S.ProductWrapper>
                    <S.ProductType>Парфюмерная вода</S.ProductType>
                    <S.ProductTitle>Creed Aventus</S.ProductTitle>
                    <S.ProductVolume>50 ML</S.ProductVolume>
                    <S.ProductPrice>19 920 P</S.ProductPrice>
                  </S.ProductWrapper>
                </S.Product>
              </S.CartWrapper>
              <S.OrderButton>Оформить заказ</S.OrderButton>
            </S.Cart>
          </S.Inner>
        </Container>
      </S.Checkout>
    );
  }
}

export default observer(Checkout);

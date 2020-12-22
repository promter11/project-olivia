import React, { Component } from "react";
import { observer } from "mobx-react";
import { Redirect } from "react-router-dom";

import Modal from "../Modal";

import { Container } from "../../styled/components";
import * as S from "./style";

import ItemStore from "../../stores/ItemStore";
import CartStore from "../../stores/CartStore";
import CheckoutStore from "../../stores/CheckoutStore";

class Checkout extends Component {
  render() {
    const { splitNumber } = ItemStore;
    const { items, count, getItemsCurrentOption } = CartStore;
    const {
      form,
      modalHiddenStatus,
      validateField,
      validateChecked,
      handleBlocks,
      handleSelect,
      submitForm,
      clearForm,
    } = CheckoutStore;

    if (!items.length) {
      return <Redirect to="/cart/empty" />;
    }

    return (
      <S.Checkout>
        <Container>
          <S.Title>Оформление заказа</S.Title>
          <S.Inner>
            <S.Wrapper>
              {form.blocks.map(({ id, title, hidden, fields }, _) => {
                return (
                  <S.Block key={id} hidden={hidden}>
                    <S.BlockTitle>{title}</S.BlockTitle>
                    <S.Form>
                      {fields.map(
                        (
                          {
                            attr,
                            type,
                            name,
                            text,
                            opened,
                            checked,
                            value,
                            options,
                            toggleBlock,
                            error: { status, message },
                          },
                          index
                        ) => {
                          if (type === "checkbox") {
                            return (
                              <S.CheckboxLabel key={index}>
                                <S.Checkbox
                                  required
                                  onChange={(event) =>
                                    validateChecked(fields[index], event)
                                  }
                                />
                                <S.CheckboxText error={status}>
                                  {text}
                                </S.CheckboxText>
                              </S.CheckboxLabel>
                            );
                          } else if (type === "radio") {
                            return (
                              <S.RadioLabel
                                key={index}
                                onChange={() => handleBlocks(toggleBlock)}
                              >
                                <S.Radio
                                  value={value}
                                  required
                                  onChange={(event) =>
                                    validateChecked(fields[index], event)
                                  }
                                />
                                <S.RadioText error={status}>{text}</S.RadioText>
                              </S.RadioLabel>
                            );
                          } else if (type === "select") {
                            return (
                              <S.CustomSelect key={index} error={status}>
                                <S.CustomSelectItem
                                  onClick={() => handleSelect(fields[index])}
                                >
                                  {text}
                                </S.CustomSelectItem>
                                <S.CustomOptionList opened={opened}>
                                  {options.map((option, optionIndex) => {
                                    return (
                                      <S.CustomOptionListItem
                                        key={optionIndex}
                                        onClick={() =>
                                          handleSelect(fields[index], option)
                                        }
                                      >
                                        {option}
                                      </S.CustomOptionListItem>
                                    );
                                  })}
                                </S.CustomOptionList>
                              </S.CustomSelect>
                            );
                          } else {
                            return (
                              <S.Label key={index} attr={attr}>
                                <S.Input
                                  type={type}
                                  name={name}
                                  placeholder="&nbsp;"
                                  error={status}
                                  required
                                  onChange={({ target: { value } }) =>
                                    validateField(fields[index], value)
                                  }
                                />
                                <S.InputText>{text}</S.InputText>
                                <S.ErrorText>{message}</S.ErrorText>
                              </S.Label>
                            );
                          }
                        }
                      )}
                    </S.Form>
                  </S.Block>
                );
              })}
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
          <Modal hidden={modalHiddenStatus}>
            <S.ModalTitle>Отлично!</S.ModalTitle>
            <S.ModalDesc>
              Ваш заказ отправлен. Наш менеджер свяжется с&nbsp;вами
              в&nbsp;ближайшее время.
            </S.ModalDesc>
            <S.ModalButton to="/" onClick={() => clearForm()}>
              Понятно
            </S.ModalButton>
          </Modal>
        </Container>
      </S.Checkout>
    );
  }
}

export default observer(Checkout);

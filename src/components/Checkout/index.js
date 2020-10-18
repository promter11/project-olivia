import React, { Component } from "react";
import { observer } from "mobx-react";

import { Container } from "../../styled/components";
import * as S from "./style";

class Checkout extends Component {
  render() {
    return (
      <S.Checkout>
        <Container>
          <S.Title>Оформление заказа</S.Title>
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
                  <S.Checkbox type="checkbox" required />
                  <S.CheckboxText>
                    Я принимаю условия пользовательского соглашения и согласен
                    на обработку персональных данных
                  </S.CheckboxText>
                  <S.ErrorText>
                    Пожалуйста, проверьте корректность введенных данных
                  </S.ErrorText>
                </S.CheckboxLabel>
              </S.Form>
            </S.Block>
          </S.Wrapper>
        </Container>
      </S.Checkout>
    );
  }
}

export default observer(Checkout);

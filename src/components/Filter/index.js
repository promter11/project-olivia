import React, { Component } from "react";
import { observer } from "mobx-react";

import * as S from "./style";

class Filter extends Component {
  render() {
    return (
      <S.Filter>
        <S.Form>
          <S.Block>
            <S.BlockTitle>Наличие</S.BlockTitle>
            <S.Label>
              <S.Checkbox name="active" />
              <S.CheckboxText>Отобразить неактивные товары</S.CheckboxText>
            </S.Label>
          </S.Block>
          <S.Block>
            <S.BlockTitle>Пол</S.BlockTitle>
            <S.Label>
              <S.Checkbox name="male" />
              <S.CheckboxText>Мужской</S.CheckboxText>
            </S.Label>
            <S.Label>
              <S.Checkbox name="female" />
              <S.CheckboxText>Женский</S.CheckboxText>
            </S.Label>
          </S.Block>
          <S.Block>
            <S.BlockTitle>Цена</S.BlockTitle>
            <S.Wrapper>
              <S.FieldsWrapper>
                <S.TextField defaultValue={0} />
                <S.TextField defaultValue={100000} />
              </S.FieldsWrapper>
              <S.Range />
            </S.Wrapper>
          </S.Block>
          <S.Block>
            <S.BlockTitle>Тип</S.BlockTitle>
            <S.Label>
              <S.Checkbox name="edt" />
              <S.CheckboxText>Туалетная вода (EDT)</S.CheckboxText>
            </S.Label>
            <S.Label>
              <S.Checkbox name="edp" />
              <S.CheckboxText>Парфюмерная вода (EDP)</S.CheckboxText>
            </S.Label>
            <S.Label>
              <S.Checkbox name="cologne" />
              <S.CheckboxText>Одеколон (cologne)</S.CheckboxText>
            </S.Label>
          </S.Block>
          <S.Block>
            <S.BlockTitle>Рейтинг</S.BlockTitle>
            <S.Label>
              <S.Radio />
              <S.RadioText>Больше 3 звёзд</S.RadioText>
            </S.Label>
            <S.Label>
              <S.Radio />
              <S.RadioText>Больше 4 звёзд</S.RadioText>
            </S.Label>
            <S.Label>
              <S.Radio />
              <S.RadioText>Любой</S.RadioText>
            </S.Label>
          </S.Block>
          <S.Button>Очистить фильтр</S.Button>
        </S.Form>
      </S.Filter>
    );
  }
}

export default observer(Filter);

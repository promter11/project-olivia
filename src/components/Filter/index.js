import React, { Component } from "react";

import * as S from "./style";

export default class Filter extends Component {
  render() {
    return (
      <S.Filter>
        <S.Form>
          <S.Block>
            <S.BlockTitle>Пол</S.BlockTitle>
            <S.Label>
              <S.Checkbox />
              <S.CheckboxText>Мужской</S.CheckboxText>
            </S.Label>
            <S.Label>
              <S.Checkbox />
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
              <S.Checkbox />
              <S.CheckboxText>Туалетная вода (EDT)</S.CheckboxText>
            </S.Label>
            <S.Label>
              <S.Checkbox />
              <S.CheckboxText>Парфюмерная вода (EDP)</S.CheckboxText>
            </S.Label>
            <S.Label>
              <S.Checkbox />
              <S.CheckboxText>Духи (parfum)</S.CheckboxText>
            </S.Label>
            <S.Label>
              <S.Checkbox />
              <S.CheckboxText>Одеколон (cologne)</S.CheckboxText>
            </S.Label>
          </S.Block>
          <S.Block>
            <S.BlockTitle>Рейтинг</S.BlockTitle>
            <S.Label>
              <S.Radio />
              <S.RadioText>Больше 2 звёзд</S.RadioText>
            </S.Label>
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

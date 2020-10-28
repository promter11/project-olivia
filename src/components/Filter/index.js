import React, { Component } from "react";
import { observer } from "mobx-react";

import * as S from "./style";

import FilterStore from "../../stores/FilterStore";

class Filter extends Component {
  render() {
    const { handleInput } = FilterStore;

    return (
      <S.Filter>
        <S.Form>
          <S.Block>
            <S.BlockTitle>Наличие</S.BlockTitle>
            <S.Label>
              <S.Checkbox
                name="active"
                value="false"
                onChange={(event) => handleInput(event)}
              />
              <S.CheckboxText>Отобразить неактивные товары</S.CheckboxText>
            </S.Label>
          </S.Block>
          <S.Block>
            <S.BlockTitle>Пол</S.BlockTitle>
            <S.Label>
              <S.Checkbox
                name="gender"
                value="male"
                onChange={(event) => handleInput(event)}
              />
              <S.CheckboxText>Мужской</S.CheckboxText>
            </S.Label>
            <S.Label>
              <S.Checkbox
                name="gender"
                value="female"
                onChange={(event) => handleInput(event)}
              />
              <S.CheckboxText>Женский</S.CheckboxText>
            </S.Label>
          </S.Block>
          <S.Block>
            <S.BlockTitle>Цена</S.BlockTitle>
            <S.Wrapper>
              <S.FieldsWrapper>
                <S.TextField defaultValue={0} />
                <S.TextField defaultValue={1000000} />
              </S.FieldsWrapper>
              <S.Range>
                <S.RangeWrapper>
                  <S.Point />
                  <S.Point />
                </S.RangeWrapper>
                <S.RangeWrapper>
                  <S.MinValue>0</S.MinValue>
                  <S.MaxValue>1 000 000</S.MaxValue>
                </S.RangeWrapper>
              </S.Range>
            </S.Wrapper>
          </S.Block>
          <S.Block>
            <S.BlockTitle>Тип</S.BlockTitle>
            <S.Label>
              <S.Checkbox
                name="type"
                value="edt"
                onChange={(event) => handleInput(event)}
              />
              <S.CheckboxText>Туалетная вода (EDT)</S.CheckboxText>
            </S.Label>
            <S.Label>
              <S.Checkbox
                name="type"
                value="edp"
                onChange={(event) => handleInput(event)}
              />
              <S.CheckboxText>Парфюмерная вода (EDP)</S.CheckboxText>
            </S.Label>
            <S.Label>
              <S.Checkbox
                name="type"
                value="cologne"
                onChange={(event) => handleInput(event)}
              />
              <S.CheckboxText>Одеколон (cologne)</S.CheckboxText>
            </S.Label>
          </S.Block>
          <S.Block>
            <S.BlockTitle>Рейтинг</S.BlockTitle>
            <S.Label>
              <S.Radio value="3" onChange={(event) => handleInput(event)} />
              <S.RadioText>Больше 3&nbsp;звёзд</S.RadioText>
            </S.Label>
            <S.Label>
              <S.Radio value="4" onChange={(event) => handleInput(event)} />
              <S.RadioText>Больше 4&nbsp;звёзд</S.RadioText>
            </S.Label>
            <S.Label>
              <S.Radio value="all" onChange={(event) => handleInput(event)} />
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

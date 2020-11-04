import React, { Component } from "react";
import { observer } from "mobx-react";

import * as S from "./style";

import FilterStore from "../../stores/FilterStore";

class Filter extends Component {
  render() {
    const {
      price: { min, average, max },
      maxPrice,
      handleCheckbox,
      handleRange,
      handleRadio,
      clearFilters,
    } = FilterStore;

    return (
      <S.Filter>
        <S.Form>
          <S.Block>
            <S.BlockTitle>Наличие</S.BlockTitle>
            <S.Label>
              <S.Checkbox
                name="active"
                value="N"
                onChange={(event) => handleCheckbox(event)}
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
                onChange={(event) => handleCheckbox(event)}
              />
              <S.CheckboxText>Мужской</S.CheckboxText>
            </S.Label>
            <S.Label>
              <S.Checkbox
                name="gender"
                value="female"
                onChange={(event) => handleCheckbox(event)}
              />
              <S.CheckboxText>Женский</S.CheckboxText>
            </S.Label>
          </S.Block>
          <S.Block>
            <S.BlockTitle>Цена</S.BlockTitle>
            <S.Wrapper>
              <S.FieldsWrapper>
                <S.TextField readOnly value={min} />
                <S.TextField readOnly value={max} />
              </S.FieldsWrapper>
              <S.RangeWrapper>
                <S.Range
                  step="10"
                  min={0}
                  max={average}
                  defaultValue={min}
                  onInput={(event) => handleRange(event)}
                  data-range="min"
                />
                <S.Range
                  step="10"
                  min={average}
                  max={maxPrice}
                  defaultValue={max}
                  onInput={(event) => handleRange(event)}
                  data-range="max"
                />
              </S.RangeWrapper>
            </S.Wrapper>
          </S.Block>
          <S.Block>
            <S.BlockTitle>Тип</S.BlockTitle>
            <S.Label>
              <S.Checkbox
                name="type"
                value="edt"
                onChange={(event) => handleCheckbox(event)}
              />
              <S.CheckboxText>Туалетная вода (EDT)</S.CheckboxText>
            </S.Label>
            <S.Label>
              <S.Checkbox
                name="type"
                value="edp"
                onChange={(event) => handleCheckbox(event)}
              />
              <S.CheckboxText>Парфюмерная вода (EDP)</S.CheckboxText>
            </S.Label>
            <S.Label>
              <S.Checkbox
                name="type"
                value="cologne"
                onChange={(event) => handleCheckbox(event)}
              />
              <S.CheckboxText>Одеколон (cologne)</S.CheckboxText>
            </S.Label>
          </S.Block>
          <S.Block>
            <S.BlockTitle>Рейтинг</S.BlockTitle>
            <S.Label>
              <S.Radio value="3" onChange={(event) => handleRadio(event)} />
              <S.RadioText>Больше 3&nbsp;звёзд</S.RadioText>
            </S.Label>
            <S.Label>
              <S.Radio value="4" onChange={(event) => handleRadio(event)} />
              <S.RadioText>Больше 4&nbsp;звёзд</S.RadioText>
            </S.Label>
            <S.Label>
              <S.Radio value="all" onChange={(event) => handleRadio(event)} />
              <S.RadioText>Любой</S.RadioText>
            </S.Label>
          </S.Block>
          <S.Button onClick={(event) => clearFilters(event)}>
            Очистить фильтр
          </S.Button>
        </S.Form>
      </S.Filter>
    );
  }
}

export default observer(Filter);

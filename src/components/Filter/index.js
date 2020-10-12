import React, { Component } from "react";
import {
  FilterStyled,
  Form,
  Block,
  BlockTitle,
  Label,
  Checkbox,
  CheckboxText,
  TextField,
  Range,
  Wrapper,
  FieldsWrapper,
  Button,
} from "./style";

export default class Filter extends Component {
  render() {
    return (
      <FilterStyled>
        <Form>
          <Block>
            <BlockTitle>Пол</BlockTitle>
            <Label>
              <Checkbox />
              <CheckboxText>Мужской</CheckboxText>
            </Label>
            <Label>
              <Checkbox />
              <CheckboxText>Женский</CheckboxText>
            </Label>
          </Block>
          <Block>
            <BlockTitle>Цена</BlockTitle>
            <Wrapper>
              <FieldsWrapper>
                <TextField />
                <TextField />
              </FieldsWrapper>
              <Range />
            </Wrapper>
          </Block>
          <Block>
            <BlockTitle>Тип</BlockTitle>
            <Label>
              <Checkbox />
              <CheckboxText>Туалетная вода (EDT)</CheckboxText>
            </Label>
            <Label>
              <Checkbox />
              <CheckboxText>Парфюмерная вода (EDP)</CheckboxText>
            </Label>
            <Label>
              <Checkbox />
              <CheckboxText>Духи (parfum)</CheckboxText>
            </Label>
            <Label>
              <Checkbox />
              <CheckboxText>Одеколон (cologne)</CheckboxText>
            </Label>
          </Block>
          <Button>Очистить фильтр</Button>
        </Form>
      </FilterStyled>
    );
  }
}

import React, { Component } from "react";
import { observer } from "mobx-react";

import * as S from "../Search/style";

import SearchStore from "../../stores/SearchStore";

class Search extends Component {
  render() {
    const { items } = SearchStore;
    const { query, opened, active, toggleSearch, updateSearch } = SearchStore;

    return (
      <S.Search active={opened}>
        <S.Title>Поиск аромата</S.Title>
        <S.FormWrapper>
          <S.Form onSubmit={(event) => event.preventDefault()}>
            <S.Input
              onChange={(event) => updateSearch(event)}
              placeholder="Введите название бренда или аромата"
              value={query}
            />
          </S.Form>
          <S.Description>
            Гармония&nbsp;&mdash; это ещё не&nbsp;всё.
          </S.Description>
          <S.List active={active}>
            {items.map(({ id, brand, title }, _) => {
              return (
                <S.ListItem key={id}>
                  <S.ListItemLink
                    to={`/catalog/${id}`}
                    onClick={() => toggleSearch()}
                  >
                    <S.ListItemBrand>{brand}</S.ListItemBrand> {title}
                  </S.ListItemLink>
                </S.ListItem>
              );
            })}
          </S.List>
        </S.FormWrapper>
        <S.Close onClick={() => toggleSearch()}>
          <polygon
            fill="white"
            points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 214.2,178.5"
          />
        </S.Close>
      </S.Search>
    );
  }
}

export default observer(Search);

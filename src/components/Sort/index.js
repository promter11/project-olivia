import React, { Component } from "react";
import { observer } from "mobx-react";

import * as S from "./style";

import SortStore from "../../stores/SortStore";

class Sort extends Component {
  handleItem(item) {
    SortStore.selectItem(item);
    SortStore.toggleSort();
  }

  render() {
    const { items, current, active, toggleSort } = SortStore;

    return (
      <S.Sort>
        <S.Title>
          Сортировка:&nbsp;
          <S.Option onClick={() => toggleSort()}>{current}</S.Option>
        </S.Title>
        <S.List active={active}>
          {items.map((el, index) => {
            return (
              <S.ListItem key={index} onClick={() => this.handleItem(el)}>
                {el}
              </S.ListItem>
            );
          })}
        </S.List>
      </S.Sort>
    );
  }
}

export default observer(Sort);

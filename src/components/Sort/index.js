import React, { Component } from "react";
import { observer } from "mobx-react";

import * as S from "./style";

import SortStore from "../../stores/SortStore";

class Sort extends Component {
  handleItem(id, value) {
    SortStore.toggleSortBlock();
    SortStore.selectElement(id);
    SortStore.sortItemsBy(value);
  }

  render() {
    const {
      elements,
      currentElement,
      activeSortBlock,
      toggleSortBlock,
    } = SortStore;

    return (
      <S.Sort>
        <S.Title>
          Сортировка:&nbsp;
          <S.Option onClick={() => toggleSortBlock()}>
            {currentElement}
          </S.Option>
        </S.Title>
        <S.List active={activeSortBlock}>
          {elements.map(({ id, title, parameter }, _) => {
            return (
              <S.ListItem
                key={id}
                onClick={() => this.handleItem(id, parameter)}
              >
                {title}
              </S.ListItem>
            );
          })}
        </S.List>
      </S.Sort>
    );
  }
}

export default observer(Sort);

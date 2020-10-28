import React, { Component } from "react";
import { observer } from "mobx-react";

import * as S from "./style";

import SortStore from "../../stores/SortStore";

class Sort extends Component {
  handleItem(id) {
    SortStore.toggleSortBlock();
    SortStore.selectElement(id);
  }

  render() {
    const {
      elements,
      currentElementInfo: { title: currentElementTitle },
      activeSortBlock,
      toggleSortBlock,
    } = SortStore;

    return (
      <S.Sort>
        <S.Title>
          Сортировка:&nbsp;
          <S.Option onClick={() => toggleSortBlock()}>
            {currentElementTitle}
          </S.Option>
        </S.Title>
        <S.List active={activeSortBlock}>
          {elements.map(({ id, title }, _) => {
            return (
              <S.ListItem key={id} onClick={() => this.handleItem(id)}>
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

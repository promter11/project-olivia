import React, { Component } from "react";
import { observer } from "mobx-react";
import { SortStyled, Title, Option, List, ListItem } from "./style";
import SortStore from "../../stores/SortStore";

class Sort extends Component {
  handleItem(item) {
    SortStore.selectItem(item);
    SortStore.toggleSort();
  }

  render() {
    const { items, current, active, toggleSort } = SortStore;

    return (
      <SortStyled>
        <Title>
          Сортировка:&nbsp;
          <Option onClick={() => toggleSort()}>{current}</Option>
        </Title>
        <List active={active}>
          {items.map((el, index) => {
            return (
              <ListItem key={index} onClick={() => this.handleItem(el)}>
                {el}
              </ListItem>
            );
          })}
        </List>
      </SortStyled>
    );
  }
}

export default observer(Sort);

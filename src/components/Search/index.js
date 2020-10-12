import React, { Component } from "react";
import { observer } from "mobx-react";
import {
  SearchStyled,
  Title,
  Description,
  Form,
  FormWrapper,
  Input,
  Close,
} from "../Search/style";

import SearchStore from "../../stores/SearchStore";

class Search extends Component {
  render() {
    const {
      query,
      opened,
      toggleSearch,
      updateSearch,
      sendRequest,
    } = SearchStore;

    return (
      <SearchStyled active={opened}>
        <Title>Поиск аромата</Title>
        <FormWrapper>
          <Form onSubmit={(event) => sendRequest(event)}>
            <Input
              onChange={(event) => updateSearch(event.target.value)}
              value={query}
            />
          </Form>
          <Description>Гармония - это ещё не всё.</Description>
        </FormWrapper>
        <Close onClick={() => toggleSearch()}>
          <polygon
            fill="white"
            points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 214.2,178.5"
          />
        </Close>
      </SearchStyled>
    );
  }
}

export default observer(Search);

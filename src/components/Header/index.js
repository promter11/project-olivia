import React, { Component } from "react";
import { Container } from "../../styled/components";
import {
  HeaderStyled,
  Wrapper,
  ItemsWrapper,
  StyledLink,
  LogoIcon,
  SearchIcon,
  BagIcon,
  Search,
  SearchTitle,
  SearchDescription,
  SearchFormWrapper,
  SearchForm,
  SearchInput,
  SearchClose,
} from "./style";

export default class Header extends Component {
  state = {
    search: "",
    isActive: false,
  };

  handleSearch = (event) => {
    event.preventDefault();

    this.setState((prevState) => {
      return {
        isActive: !prevState.isActive,
      };
    });
  };

  updateSearch = (value) => {
    this.setState({
      search: value,
    });
  };

  submitForm = (event) => {
    event.preventDefault();

    this.setState({
      search: "",
    });
  };

  render() {
    const { search, isActive } = this.state;

    return (
      <HeaderStyled>
        <Container>
          <Wrapper>
            <StyledLink to="/">
              <LogoIcon>
                <path
                  d="M11.7163 26.2438C12.8122 28.3216 14.3262 29.6946 14.4137 29.7729C14.5805 29.9224 14.7902 29.997 14.9998 29.997C15.2095 29.997 15.4194 29.9224 15.5862 29.7729C15.6737 29.6946 17.1873 28.3216 18.2832 26.2438C16.9934 25.7306 15.8785 25.0266 14.9998 24.3599C14.1209 25.0266 13.0063 25.7306 11.7163 26.2438Z"
                  fill="white"
                />
                <path
                  d="M27.9514 18.6323C27.7879 18.8175 27.6199 18.9976 27.4469 19.1707C25.72 20.8973 23.4282 22.1322 20.6347 22.8408C19.1511 23.2171 17.7764 23.377 16.7407 23.4414C18.1142 24.3592 19.9771 25.2427 22.0597 25.2427C26.3027 25.2427 29.6346 21.576 29.7744 21.4199C30.0731 21.0862 30.0731 20.5813 29.7744 20.2475C29.7286 20.1965 29.0539 19.4513 27.9514 18.6323Z"
                  fill="white"
                />
                <path
                  d="M9.36542 22.841C6.57192 22.1324 4.2799 20.8976 2.55298 19.1707C2.37972 18.9976 2.21195 18.8177 2.0483 18.6323C0.946003 19.4513 0.271259 20.1967 0.225483 20.2475C-0.0732079 20.5813 -0.0732079 21.0864 0.225483 21.4201C0.36533 21.5762 3.69716 25.2427 7.93995 25.2427C10.0228 25.2427 11.8854 24.3592 13.2592 23.4414C12.2235 23.377 10.8488 23.2171 9.36542 22.841Z"
                  fill="white"
                />
                <path
                  d="M14.4138 21.4886C14.5806 21.638 14.7903 21.7129 14.9999 21.7129C15.2096 21.7129 15.4193 21.638 15.5863 21.4886C15.8019 21.2956 20.8676 16.6926 20.8676 10.8563C20.8676 5.02029 15.8019 0.417252 15.5863 0.224075C15.4195 0.0746155 15.2096 0 14.9999 0C14.7903 0 14.5806 0.0746155 14.4138 0.224075C14.1979 0.417252 9.13232 5.02029 9.13232 10.8563C9.13232 16.6924 14.1982 21.2956 14.4138 21.4886Z"
                  fill="white"
                />
                <path
                  d="M24.3424 4.5186C23.9162 3.043 23.4575 2.07734 23.4285 2.01738C23.2346 1.6134 22.7679 1.42022 22.3452 1.56854C22.2825 1.59074 21.2756 1.94871 19.9312 2.69075C20.513 3.57515 21.006 4.47511 21.4038 5.37805C22.4083 4.98803 23.4076 4.712 24.3424 4.5186Z"
                  fill="white"
                />
                <path
                  d="M10.069 2.69072C8.72473 1.94869 7.71788 1.59072 7.65494 1.56851C7.23219 1.41997 6.7655 1.61337 6.57164 2.01712C6.5428 2.07732 6.08389 3.04297 5.65771 4.51857C6.59224 4.71175 7.59177 4.98778 8.59633 5.37779C8.99413 4.47531 9.48714 3.57512 10.069 2.69072Z"
                  fill="white"
                />
                <path
                  d="M22.625 10.8564C22.625 12.4047 22.319 13.9936 21.715 15.5784C21.2419 16.8203 20.5848 18.0643 19.7617 19.2762C19.1341 20.2005 18.4992 20.9734 17.9746 21.5589C20.3946 21.246 23.7704 20.3614 26.2041 17.9279C30.3308 13.8011 30.0038 6.96422 29.9877 6.67514C29.963 6.22791 29.606 5.87085 29.1587 5.84613C29.1191 5.84407 28.9255 5.83423 28.611 5.83423C27.4725 5.83423 24.7509 5.96057 22.0224 7.02304C22.4227 8.31165 22.625 9.59727 22.625 10.8564Z"
                  fill="white"
                />
                <path
                  d="M12.0255 21.5591C11.5009 20.9734 10.8659 20.2005 10.2383 19.2762C9.41529 18.0643 8.75794 16.8203 8.28484 15.5784C7.68105 13.9936 7.3748 12.4047 7.3748 10.8564C7.3748 9.59727 7.57714 8.31165 7.97768 7.02304C5.24918 5.96057 2.52777 5.83423 1.38931 5.83423C1.07437 5.83423 0.880739 5.84384 0.841143 5.84613C0.393907 5.87085 0.0368518 6.22791 0.0121326 6.67514C-0.00388912 6.96422 -0.330961 13.8011 3.79578 17.9279C6.22971 20.3616 9.60549 21.246 12.0255 21.5591Z"
                  fill="white"
                />
              </LogoIcon>
            </StyledLink>
            <ItemsWrapper>
              <StyledLink to="/" onClick={(event) => this.handleSearch(event)}>
                <SearchIcon>
                  <path
                    d="M18 18L23 23"
                    strokeWidth="1.5"
                    fill="none"
                    stroke="white"
                  />
                  <circle
                    cx="11.5"
                    cy="11.5"
                    r="8.5"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                </SearchIcon>
              </StyledLink>
              <StyledLink to="/cart">
                <BagIcon>
                  <path
                    d="M3.75879 6.75H21.2588V23.25H3.75879V6.75Z"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M16.75 9V5.3105C16.75 4.16729 16.3022 3.07089 15.5052 2.26252C14.7082 1.45414 13.6272 1 12.5 1C11.3728 1 10.2918 1.45414 9.4948 2.26252C8.69777 3.07089 8.25 4.16729 8.25 5.3105L8.25 9"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                </BagIcon>
              </StyledLink>
            </ItemsWrapper>
          </Wrapper>
          <Search active={isActive}>
            <SearchTitle>Поиск аромата</SearchTitle>
            <SearchFormWrapper>
              <SearchForm onSubmit={(event) => this.submitForm(event)}>
                <SearchInput
                  onChange={(event) => this.updateSearch(event.target.value)}
                  value={search}
                />
              </SearchForm>
              <SearchDescription>Гармония - это ещё не все.</SearchDescription>
            </SearchFormWrapper>
            <SearchClose onClick={(event) => this.handleSearch(event)}>
              <polygon
                fill="white"
                points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 214.2,178.5"
              />
            </SearchClose>
          </Search>
        </Container>
      </HeaderStyled>
    );
  }
}

import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchImage from "../../assets/images/search.jpg";

export const HeaderStyled = styled.header`
  padding: 1.5rem 0;
  border-bottom: 0.1rem solid var(--border-color);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ItemsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchIcon = styled.svg.attrs({
  width: "25",
  height: "25",
  viewBox: "0 0 25 25",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
})``;

export const LogoIcon = styled.svg.attrs({
  width: "30",
  height: "30",
  viewBox: "0 0 30 30",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
})``;

export const BagIcon = styled.svg.attrs({
  width: "25",
  height: "25",
  viewBox: "0 0 25 25",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
})``;

export const StyledLink = styled(Link)`
  &:hover ${LogoIcon} > path {
    fill: var(--pink-color);
  }

  &:hover ${SearchIcon} > path,
  &:hover ${SearchIcon} > circle,
  &:hover ${BagIcon} > path {
    stroke: var(--pink-color);
  }

  &:not(:last-child) {
    margin-right: 3rem;
  }
`;

export const Search = styled.div`
  position: absolute;
  top: ${(props) => (props.active ? "0" : "-100%")};
  left: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  transition: top 0.5s ease;
  background: rgba(0, 0, 0, 0.5) url(${SearchImage}) no-repeat center center /
    cover;
  background-blend-mode: darken;
`;

export const SearchTitle = styled.h2`
  margin-bottom: 4rem;
  color: var(--white-color);
`;

export const SearchDescription = styled.p`
  font-weight: 300;
  font-style: italic;
  color: var(--white-color);
`;

export const SearchFormWrapper = styled.div`
  max-width: 77rem;
  width: 100%;
`;

export const SearchForm = styled.form``;

export const SearchInput = styled.input.attrs({
  type: "text",
  placeholder: "Введите название аромата",
})`
  width: 100%;
  font-size: 1.8rem;
  font-weight: 300;
  padding: 1.5rem 3rem;
  margin-bottom: 1rem;
  border: 0;

  &:focus::placeholder {
    color: transparent;
  }
`;

export const SearchClose = styled.svg.attrs({
  xmlns: "http://www.w3.org/2000/svg",
  width: "30",
  height: "30",
  viewBox: "0 0 357 357",
})`
  position: absolute;
  top: 4rem;
  right: 4rem;
  cursor: pointer;

  polygon {
    transition: fill 0.25s ease-in-out;
  }

  &:hover > polygon {
    fill: var(--pink-color);
  }
`;

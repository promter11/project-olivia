import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderStyled = styled.header`
  padding: 1.5rem 0;
  border-bottom: ${(props) =>
    props.active
      ? "0.1rem solid var(--border-color)"
      : "0.1rem solid var(--grey-color)"};
  background-color: ${(props) =>
    props.active ? "transparent" : "var(--grey-color)"};
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
})`
  path,
  circle {
    transition: stroke 0.2s ease-in-out;
  }
`;

export const LogoIcon = styled.svg.attrs({
  width: "30",
  height: "30",
  viewBox: "0 0 30 30",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
})`
  path {
    transition: fill 0.2s ease-in-out;
  }
`;

export const BagIcon = styled.svg.attrs({
  width: "25",
  height: "25",
  viewBox: "0 0 25 25",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
})`
  path {
    transition: stroke 0.2s ease-in-out;
  }
`;

export const StyledLink = styled(Link)`
  &:hover ${LogoIcon} > path {
    fill: var(--pink-color);
  }

  &:hover ${BagIcon} > path {
    stroke: var(--pink-color);
  }
`;

export const Button = styled.button`
  margin-right: 3rem;
  background-color: transparent;

  &:hover ${SearchIcon} > path,
  &:hover ${SearchIcon} > circle {
    stroke: var(--pink-color);
  }
`;

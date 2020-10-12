import styled from "styled-components";
import { Link } from "react-router-dom";

export const NoMatchStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  text-align: center;
`;

export const Image = styled.svg.attrs({
  width: "120",
  height: "120",
  viewBox: "0 0 491.52 491.52",
  xmlns: "http://www.w3.org/2000/svg",
})`
  margin-bottom: 4rem;
`;

export const Title = styled.h1`
  color: var(--grey-color);
`;

export const Description = styled.p`
  max-width: 48rem;
  margin: 0 auto 4rem auto;
  font-size: 2.4rem;
  line-height: 2.8rem;
  font-weight: 600;
  color: var(--grey-color);
`;

export const StyledLink = styled(Link)`
  font-size: 1.4rem;
  line-height: 1.8rem;
  padding-left: 3rem;
  color: var(--link-color);

  &:hover {
    color: var(--link-color);
  }
`;

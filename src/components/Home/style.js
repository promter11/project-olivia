import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeStyled = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  max-width: 43rem;
`;

export const Title = styled.h1`
  font-style: italic;
  -webkit-text-stroke-width: 0.1rem;
  -webkit-text-stroke-color: var(--white-color);
  margin-bottom: 1.6rem;
  cursor: crosshair;
  transition: color 0.25s linear;
  color: transparent;

  &:hover {
    color: var(--white-color);
  }
`;

export const Description = styled.p`
  font-size: 1.8rem;
  line-height: 150%;
  font-weight: 300;
  font-style: italic;
  margin-bottom: 4rem;
  color: var(--white-color);
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  position: relative;
  font-size: 1.4rem;
  line-height: 1;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  padding: 1.5rem 3rem;
  border: 0.1rem solid var(--white-color);
  transition: color 0.5s 0.5s ease;
  color: var(--white-color);

  &::before {
    content: "";
    position: absolute;
    top: -0.1rem;
    left: -0.1rem;
    z-index: -5;
    width: 0;
    height: calc(100% + 0.2rem);
    transition: width 0.5s ease;
    background-color: var(--white-color);
  }

  &:hover {
    color: var(--grey-color);

    &::before {
      width: calc(100% + 0.2rem);
    }
  }
`;

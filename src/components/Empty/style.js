import { Link } from "react-router-dom";
import styled from "styled-components";

import Arrow from "../../assets/icons/arrow.svg";

export const Empty = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  flex-grow: 1;
`;

export const Image = styled.svg.attrs({
  width: "120",
  height: "120",
  viewBox: "0 0 120 120",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
})`
  margin-bottom: 3rem;
`;

export const Title = styled.h2`
  margin-bottom: 3rem;
  color: var(--grey-color);
`;

export const Description = styled.p`
  max-width: 30rem;
  font-size: 1.8rem;
  line-height: 2.4rem;
  margin: 0 auto 3rem auto;
  color: var(--grey-color);
`;

export const StyledLink = styled(Link)`
  position: relative;
  display: inline-block;
  font-size: 1.2rem;
  line-height: 1;
  font-weight: bold;
  padding: 1rem 1.5rem 1rem 4.5rem;
  border-radius: 3.2rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25);
  transition: transform 0.25s ease-in-out;
  background-color: var(--white-color);
  color: var(--grey-color);

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 1.5rem;
    transform: translateY(-50%);
    width: 2rem;
    height: 1rem;
    background: url(${Arrow}) no-repeat center center / cover;
  }

  &:hover {
    transform: translateY(-0.25rem);
    color: var(--grey-color);
  }
`;

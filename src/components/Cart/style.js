import styled from "styled-components";
import { Link } from "react-router-dom";

export const Cart = styled.section`
  margin: 4rem 0;
`;

export const Title = styled.h2`
  margin-bottom: 4rem;
`;

export const Wrapper = styled.div`
  max-width: 77rem;
`;

export const BlockWrapper = styled.div`
  display: flex;
`;

export const Block = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 2rem;
  border-bottom: 0.1rem solid var(--lightgray-color);

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  display: block;
  width: 14rem;
  height: 14rem;
  margin-right: 2rem;
  flex-shrink: 0;
  object-fit: cover;

  @media (max-width: 576px) {
    width: 8rem;
    height: 8rem;
    margin-right: 1rem;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    width: 10rem;
    height: 10rem;
  }
`;

export const TitleWrapper = styled.div``;

export const Name = styled.h3`
  margin-bottom: 0.5rem;
`;

export const Volume = styled.span`
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: var(--gray-color);

  @media (max-width: 576px) {
    font-size: 1.2rem;
    line-height: 1.4rem;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
`;

export const Plus = styled.svg.attrs({
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
})`
  cursor: pointer;
  fill: var(--gray-color);

  path {
    transition: fill 0.25s ease-in-out;
  }

  &:hover > path {
    fill: var(--grey-color);
  }

  @media (max-width: 576px) {
    width: 1.5rem;
  }
`;

export const Minus = styled.svg.attrs({
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
})`
  cursor: pointer;
  fill: var(--gray-color);

  path {
    transition: fill 0.25s ease-in-out;
  }

  &:hover > path {
    fill: var(--grey-color);
  }

  @media (max-width: 576px) {
    width: 1.5rem;
  }
`;

export const Count = styled.span`
  font-size: 1.4rem;
  line-height: 1.8rem;
  font-weight: bold;
  margin: 0 1.5rem;
  color: var(--grey-color);

  @media (max-width: 576px) {
    font-size: 1.2rem;
    line-height: 1.4rem;
    margin: 0 1rem;
  }
`;

export const Close = styled.svg.attrs({
  xmlns: "http://www.w3.org/2000/svg",
  width: "357px",
  height: "357px",
  viewBox: "0 0 357 357",
})`
  width: 2rem;
  height: auto;
  cursor: pointer;
  fill: var(--gray-color);

  polygon {
    transition: fill 0.25s ease-in-out;
  }

  &:hover > polygon {
    fill: var(--grey-color);
  }

  @media (max-width: 576px) {
    width: 1.5rem;
  }
`;

export const PriceList = styled.ul`
  display: flex;
  margin-top: auto;
`;

export const PriceListItem = styled.li`
  margin-right: 3rem;
  color: ${(props) =>
    props.discount ? "var(--gray-color)" : "var(--grey-color)"};

  @media (max-width: 576px) {
    margin-right: 1rem;
  }
`;

export const PriceTitle = styled.p`
  font-size: 1.8rem;
  line-height: 2.4rem;
  font-weight: bold;

  @media (max-width: 576px) {
    font-size: 1rem;
    line-height: 1.2rem;
  }
`;

export const PriceText = styled.p`
  font-size: 1.4rem;
  line-height: 1.8rem;
  font-weight: 300;

  @media (max-width: 576px) {
    font-size: 1rem;
    line-height: 1;
  }
`;

export const Result = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 576px) {
    width: 100%;
    margin-bottom: 1.5rem;
  }
`;

export const Button = styled(Link)`
  display: inline-block;
  font-size: 1.4rem;
  line-height: 1;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  padding: 1.5rem 3rem;
  border: ${(props) =>
    props.clear
      ? "0.1rem solid var(--gray-color)"
      : "0.1rem solid var(--grey-color)"};
  transition: all 0.25s ease;
  background-color: ${(props) =>
    props.clear ? "var(--gray-color)" : "var(--grey-color)"};
  color: var(--white-color);

  &:not(:last-child) {
    margin-right: 1.5rem;
  }

  &:hover {
    background-color: transparent;
    color: ${(props) =>
      props.clear ? "var(--gray-color)" : "var(--grey-color)"};
  }

  @media (max-width: 576px) {
    width: 100%;
    text-align: center;

    &:not(:last-child) {
      margin-right: 0;
      margin-bottom: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const ClearButton = Button.withComponent("button");

export const ResultWrapper = styled.div`
  text-align: right;

  @media (max-width: 576px) {
    text-align: left;
  }
`;

export const ResultTitle = styled.p`
  font-size: 1.4rem;
  line-height: 1.8rem;
  text-transform: uppercase;
  color: var(--gray-color);

  @media (max-width: 576px) {
    font-size: 1.2rem;
    line-height: 1.4rem;
  }
`;

export const ResultPrice = styled.p`
  font-size: 1.8rem;
  line-height: 2.4rem;
  font-weight: bold;

  @media (max-width: 576px) {
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
`;

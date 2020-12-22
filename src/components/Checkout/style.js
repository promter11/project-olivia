import styled from "styled-components";
import { Link } from "react-router-dom";

import Mark from "../../assets/icons/mark.svg";

export const Checkout = styled.section`
  margin: 4rem 0;
`;

export const Title = styled.h2`
  margin-bottom: 4rem;
`;

export const Inner = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Wrapper = styled.div`
  width: 66.66%;
  padding-right: 3rem;

  @media (max-width: 768px) {
    width: 100%;
    padding-right: 0;

    &:not(:last-child) {
      margin-bottom: 4rem;
    }
  }

  @media (min-width: 769px) and (max-width: 992px) {
    width: 50%;
  }
`;

export const Block = styled.div`
  display: ${(props) => (props.hidden ? "none" : "block")};

  &:not(:last-child) {
    margin-bottom: 4rem;
  }
`;

export const BlockTitle = styled.h3`
  margin-bottom: 3rem;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

export const Label = styled.label`
  position: relative;
  width: ${(props) => (props.attr ? "100%" : "calc((100% / 2) - (3rem / 2))")};
  padding-top: 1rem;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  &:not(:nth-child(2n)) {
    margin-right: ${(props) => (props.attr ? "0" : "3rem")};
  }

  @media (max-width: 992px) {
    width: 100%;

    &:not(:nth-child(2n)) {
      margin-right: 0;
    }
  }
`;

export const InputText = styled.span`
  position: absolute;
  top: 0.5rem;
  left: 0;
  font-size: 1.4rem;
  line-height: 1.8rem;
  transition: all 0.25s ease;
  pointer-events: none;
  color: var(--grey-color);
`;

export const Input = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 0.1rem solid var(--gray-color);
  background-color: transparent;
  color: var(--grey-color);

  &:focus ~ ${InputText}, &:not(:placeholder-shown) ~ ${InputText} {
    top: -0.2rem;
    font-size: 1rem;
    line-height: 1.2rem;
    color: var(--gray-color);
  }
`;

export const ErrorText = styled.p`
  font-size: 1.2rem;
  line-height: 1.4rem;
  margin-top: 0.5rem;
  color: var(--error-color);
`;

export const CheckboxText = styled.span`
  display: block;
  position: relative;
  font-size: 1.4rem;
  line-height: 1.8rem;
  padding-left: 3rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 1.5rem;
    height: 1.5rem;
    border: 0.1rem solid
      ${(props) => (props.error ? "var(--error-color)" : "var(--gray-color)")};
    border-radius: 0.4rem;
    transition: all 0.25s ease-in-out;
    background-color: var(--white-color);
  }

  &:hover {
    &::before {
      border: 0.1rem solid var(--green-color);
    }
  }
`;

export const Checkbox = styled.input.attrs({
  type: "checkbox",
})`
  position: absolute;
  height: 0;
  visibility: hidden;

  &:checked + ${CheckboxText}::before {
    border: 0.1rem solid transparent;
    background: var(--green-color) url(${Mark}) no-repeat 0.1rem -0.1rem / cover;
  }
`;

export const CheckboxLabel = styled.label`
  max-width: 43rem;
  cursor: pointer;

  @media (max-width: 992px) {
    max-width: none;
  }
`;

export const RadioText = styled.span`
  position: relative;
  font-size: 1.4rem;
  line-height: 1.8rem;
  padding-left: 2.5rem;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 1.5rem;
    height: 1.5rem;
    border: 0.1rem solid
      ${(props) => (props.error ? "var(--error-color)" : "var(--gray-color)")};
    border-radius: 50%;
    transition: all 0.25s ease-in-out;
    box-sizing: border-box;
    background-color: var(--white-color);
  }

  &:hover {
    &::before {
      border: 0.1rem solid var(--green-color);
    }
  }
`;

export const Radio = styled.input.attrs({
  type: "radio",
  name: "delivery",
})`
  position: absolute;
  height: 0;
  visibility: hidden;

  &:checked + ${RadioText}::before {
    border: 0.4rem solid var(--green-color);
  }
`;

export const RadioLabel = styled.label`
  width: 100%;
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const CustomSelect = styled.div`
  position: relative;
  width: 100%;
  border: 0.1rem solid
    ${(props) => (props.error ? "var(--error-color)" : "var(--gray-color)")};
`;

export const CustomSelectItem = styled.div`
  font-size: 1.2rem;
  line-height: 1;
  padding: 1.5rem 2rem;
  cursor: pointer;
  color: var(--grey-color);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const CustomOptionList = styled.ul`
  display: ${(props) => (props.opened ? "block" : "none")};
  position: absolute;
  bottom: calc(100% + 0.5rem);
  left: -0.1rem;
  width: calc(100% + 0.2rem);
  border: 0.1rem solid var(--gray-color);
  background-color: var(--background-color);
`;

export const CustomOptionListItem = styled.li`
  font-size: 1.2rem;
  line-height: 1;
  padding: 1.5rem 2rem;
  cursor: pointer;
  transition: background-color 0.25s ease-in-out;
  color: var(--grey-color);

  &:hover {
    background-color: var(--lightgray-color);
  }
`;

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.33%;
  padding: 3rem;
  border: 0.1rem solid var(--lightgray-color);

  @media (max-width: 768px) {
    width: 100%;
    padding: 2rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    width: 50%;
  }
`;

export const CartTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  padding-bottom: 1rem;
  border-bottom: 0.1rem solid var(--lightgray-color);
`;

export const CartTitle = styled.h4``;

export const CartCount = styled.span`
  font-size: 1.2rem;
  line-height: 1;
  color: var(--gray-color);
`;

export const CartWrapper = styled.div`
  max-height: 47rem;
  margin-bottom: 3rem;
  padding-right: 1.5rem;
  overflow-y: auto;

  @media (min-width: 769px) and (max-width: 992px) {
    max-height: calc(62.5rem - 4rem);
  }
`;

export const Product = styled.div`
  display: flex;

  &:not(:last-child) {
    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;
    border-bottom: 0.1rem solid var(--lightgray-color);
  }
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ProductTitle = styled.h4``;

export const ProductType = styled.p`
  @media (max-width: 768px) {
    font-size: 1.2rem;
    line-height: 1.4rem;
  }
`;

export const ProductVolume = styled.span`
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: var(--gray-color);
`;

export const ProductInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

export const ProductPrice = styled.p`
  font-size: 1.4rem;
  line-height: 1.8rem;
  font-weight: bold;
`;

export const ProductImage = styled.img`
  width: 8rem;
  height: 8rem;
  margin-right: 1rem;
  object-fit: cover;
`;

export const ProductCount = styled.span`
  font-size: 1.2rem;
  line-height: 1.4rem;
`;

export const OrderButton = styled.button.attrs({
  type: "button",
})`
  font-size: 1.4rem;
  line-height: 1;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  padding: 1.5rem 3rem;
  margin-top: auto;
  border: 0.1rem solid var(--grey-color);
  transition: all 0.25s ease;
  background-color: var(--grey-color);
  color: var(--white-color);

  &:hover {
    background-color: transparent;
    color: var(--grey-color);
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const ModalTitle = styled.h2`
  margin-bottom: 3rem;
`;

export const ModalDesc = styled.p`
  margin-bottom: 3rem;
`;

export const ModalButton = styled(Link)`
  font-size: 1.2rem;
  line-height: 1;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  padding: 1rem 2rem;
  margin-top: auto;
  border: 0.1rem solid var(--grey-color);
  transition: all 0.25s ease;
  background-color: var(--grey-color);
  color: var(--white-color);

  &:hover {
    background-color: transparent;
    color: var(--grey-color);
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

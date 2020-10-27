import styled from "styled-components";

import Mark from "../../assets/icons/mark.svg";

export const Filter = styled.aside`
  width: 25%;
  padding-right: 3rem;
  margin-right: 3rem;
  border-right: 0.1rem solid var(--lightgray-color);

  @media (max-width: 576px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 4rem;
    padding-right: 0;
    border-right: 0;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    width: 50%;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    width: 33.33%;
  }
`;

export const Form = styled.form``;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 4rem;
`;

export const BlockTitle = styled.h3`
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

export const CheckboxText = styled.span`
  display: block;
  position: relative;
  font-size: 1.4rem;
  line-height: 1.8rem;
  font-weight: bold;
  padding-left: 3rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 1.5rem;
    height: 1.5rem;
    border: 0.1rem solid var(--gray-color);
    border-radius: 0.4rem;
    transition: all 0.25s ease-in-out;
    background: var(--white-color);
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

export const RadioText = styled.span`
  position: relative;
  font-size: 1.4rem;
  line-height: 1.8rem;
  font-weight: bold;
  padding-left: 3rem;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 1.5rem;
    height: 1.5rem;
    border: 0.1rem solid var(--gray-color);
    border-radius: 50%;
    transition: all 0.25s ease-in-out;
    box-sizing: border-box;
    background: var(--white-color);
  }

  &:hover {
    &::before {
      border: 0.1rem solid var(--green-color);
    }
  }
`;

export const Radio = styled.input.attrs({
  type: "radio",
  name: "rating",
})`
  position: absolute;
  height: 0;
  visibility: hidden;

  &:checked + ${RadioText}::before {
    border: 0.4rem solid var(--green-color);
  }
`;

export const Wrapper = styled.div``;

export const FieldsWrapper = styled.div`
  display: flex;
  margin-bottom: 3rem;
`;

export const TextField = styled.input.attrs({
  type: "text",
})`
  width: 100%;
  padding: 0.8rem 1.2rem;
  border: 0.1rem solid var(--gray-color);
  border-radius: 0.4rem;

  &:not(:last-child) {
    margin-right: 1.5rem;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: textfield;
    margin: 0;
  }
`;

export const RangeWrapper = styled.div`
  position: relative;
`;

export const Range = styled.div`
  height: 0.1rem;
  margin-bottom: 1.5rem;
  background-color: var(--gray-color);
`;

export const Point = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 2rem;
  height: 2rem;
  border: 0.1rem solid var(--gray-color);
  border-radius: 50%;
  cursor: pointer;
  background-color: var(--background-color);

  &:first-child {
    left: 0;
  }

  &:last-child {
    right: 0;
  }
`;

export const MinValue = styled.div`
  position: absolute;
  left: 0;
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.4rem;
  margin-top: 1.5rem;
  color: var(--grey-color);
`;

export const MaxValue = styled.div`
  position: absolute;
  right: 0;
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.4rem;
  margin-top: 1.5rem;
  color: var(--grey-color);
`;

export const Button = styled.button`
  width: 100%;
  font-size: 1.2rem;
  line-height: 1;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  padding: 1.5rem;
  margin-top: auto;
  border: 0.1rem solid var(--grey-color);
  transition: all 0.25s ease;
  background-color: transparent;
  color: var(--grey-color);

  &:hover {
    background-color: var(--grey-color);
    color: var(--white-color);
  }
`;

import styled from "styled-components";
import Mark from "../../assets/icons/mark.svg";

export const FilterStyled = styled.aside`
  width: 33.33%;
  padding-right: 3rem;
  margin-right: 3rem;
  border-right: 0.1rem solid var(--lightgray-color);
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
  margin-bottom: 1.5rem;
  cursor: pointer;
`;

export const CheckboxText = styled.span`
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

export const Wrapper = styled.div``;

export const FieldsWrapper = styled.div`
  display: flex;
  margin-bottom: 3rem;
`;

export const TextField = styled.input.attrs({
  type: "number",
})`
  width: 100%;
  padding: 1rem;
  border: 0.1rem solid var(--gray-color);
  border-radius: 0.4rem;

  &:not(:last-child) {
    margin-right: 3rem;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: textfield;
    margin: 0;
  }
`;

export const Range = styled.input.attrs({
  type: "range",
  min: 0,
  max: 1000,
  step: 100,
})``;

export const Button = styled.button`
  width: 100%;
  font-size: 1.4rem;
  line-height: 1.8rem;
  font-weight: bold;
  padding: 1.2rem 2.4rem;
  border: 0.1rem solid var(--gray-color);
  border-radius: 0.4rem;
  transition: all 0.25s ease;
  background-color: transparent;
  color: var(--grey-color);

  &:hover {
    border-color: var(--grey-color);
    background-color: var(--grey-color);
    color: var(--white-color);
  }
`;

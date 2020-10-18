import styled from "styled-components";

export const Checkout = styled.section`
  margin: 4rem 0;
`;

export const Title = styled.h2`
  margin-bottom: 4rem;
`;

export const Wrapper = styled.div``;

export const Block = styled.div``;

export const BlockTitle = styled.h4`
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  max-width: 77rem;
  width: 100%;
`;

export const Label = styled.label`
  position: relative;
  width: calc((100% / 2) - (6rem / 2));
  padding: 0.5rem 0;
  margin-bottom: 3rem;
  border-bottom: 0.1rem solid var(--gray-color);

  &:not(:last-child) {
    margin-right: 3rem;
  }
`;

export const InputText = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  font-size: 1.4rem;
  line-height: 1.8rem;
  transition: all 0.25s ease;
  pointer-events: none;
  color: var(--gray-color);
`;

export const Input = styled.input`
  border: 0;
  background-color: transparent;
  color: var(--grey-color);

  &:focus ~ ${InputText}, &:valid ~ ${InputText} {
    top: 0rem;
    font-size: 1rem;
    line-height: 1.2rem;
  }
`;

export const ErrorText = styled.span`
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  font-size: 1.2rem;
  line-height: 1.4rem;
  opacity: 0;
  visibility: hidden;
  color: var(--error-color);
`;

export const CheckboxLabel = styled.label`
  display: flex;
  max-width: 42rem;
`;

export const Checkbox = styled.input`
  margin-right: 1rem;
`;

export const CheckboxText = styled.span`
  font-size: 1.4rem;
  line-height: 1.8rem;
  transition: all 0.25s ease;
  pointer-events: none;
  color: var(--grey-color);
`;

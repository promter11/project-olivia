import styled from "styled-components";

import SearchImage from "../../assets/images/search.jpg";

export const Search = styled.div`
  position: absolute;
  top: ${(props) => (props.active ? "0" : "-100%")};
  left: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  width: 100vw;
  height: 100vh;
  padding: 1.5rem;
  transition: top 0.5s ease;
  background: rgba(0, 0, 0, 0.5) url(${SearchImage}) no-repeat center center /
    cover;
  background-blend-mode: darken;
`;

export const Title = styled.h2`
  margin-bottom: 4rem;
  color: var(--white-color);

  @media (max-width: 576px) {
    margin-bottom: 2rem;
  }
`;

export const Description = styled.p`
  font-weight: 300;
  font-style: italic;
  color: var(--white-color);

  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
`;

export const FormWrapper = styled.div`
  max-width: 77rem;
  width: 100%;
`;

export const Form = styled.form``;

export const Input = styled.input.attrs({
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

  @media (max-width: 576px) {
    font-size: 1.4rem;
    padding: 1rem 2rem;
    margin-bottom: 0.5rem;
  }
`;

export const Close = styled.svg.attrs({
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
    transition: fill 0.2s ease-in-out;
  }

  &:hover > polygon {
    fill: var(--pink-color);
  }

  @media (max-width: 768px) {
    width: 2rem;
    height: auto;
    top: 2rem;
    right: 2rem;
  }
`;

import styled from "styled-components";
import SearchImage from "../../assets/images/search.jpg";

export const SearchStyled = styled.div`
  position: absolute;
  top: ${(props) => (props.active ? "0" : "-100%")};
  left: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  transition: top 0.5s ease;
  background: rgba(0, 0, 0, 0.5) url(${SearchImage}) no-repeat center center /
    cover;
  background-blend-mode: darken;
`;

export const Title = styled.h2`
  margin-bottom: 4rem;
  color: var(--white-color);
`;

export const Description = styled.p`
  font-weight: 300;
  font-style: italic;
  color: var(--white-color);
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
`;

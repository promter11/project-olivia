import styled from "styled-components";

export const Sort = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Title = styled.h4``;

export const Option = styled.span`
  font-size: 1.4rem;
  line-height: 1;
  border-bottom: 0.1rem dashed var(--pink-color);
  cursor: pointer;
  color: var(--pink-color);

  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
`;

export const List = styled.ul`
  position: absolute;
  top: calc(100% + 1rem);
  right: 0;
  transform: ${(props) =>
    props.active ? "translateY(0)" : "translateY(-1rem)"};
  z-index: 5;
  min-width: 21rem;
  width: 100%;
  border: 0.1rem solid var(--gray-color);
  border-radius: 0.8rem;
  opacity: ${(props) => (props.active ? "1" : "0")};
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
  transition: all 0.25s ease-in-out;
  background-color: var(--white-color);

  &::before,
  &::after {
    content: "";
    position: absolute;
    bottom: 100%;
    right: 1.5rem;
    border-bottom: 1rem solid var(--white-color);
    border-left: 1rem solid transparent;
    border-right: 1rem solid transparent;
  }

  &::before {
    bottom: calc(100% + 0.1rem);
    border-bottom-color: var(--gray-color);
  }
`;

export const ListItem = styled.li`
  font-size: 1.4rem;
  padding: 1rem;
  transition: font-weight 0.25s ease-in-out;
  cursor: pointer;

  &:first-child {
    border-radius: 0.8rem 0.8rem 0 0;
  }

  &:last-child {
    border-radius: 0 0 0.8rem 0.8rem;
  }

  &:hover {
    font-weight: bold;
  }

  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
`;

import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
  max-width: 47rem;
  width: 100%;
  margin: 0 auto;
  padding: 4rem;
  text-align: center;
  border-radius: 0.8rem;
  background-color: var(--white-color);
`;

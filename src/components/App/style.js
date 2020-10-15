import styled from "styled-components";

import HomeImage from "../../assets/images/home.jpg";

export const App = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${(props) =>
    props.active
      ? `rgba(0, 0, 0, 0.5) url(${HomeImage}) no-repeat center center / cover`
      : "var(--background-color)"};
  background-blend-mode: ${(props) => (props.active ? "darken" : "normal")};
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

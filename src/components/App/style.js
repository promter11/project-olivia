import styled from "styled-components";
import HomeImage from "../../assets/images/home.jpg";

export const AppStyled = styled.div`
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5) url(${HomeImage}) no-repeat center center /
    cover;
  background-blend-mode: darken;
`;

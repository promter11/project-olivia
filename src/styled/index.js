import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --green-color: #97da7b;
    --pink-color: #f9c6c6;
    --grey-color: #303030;
    --lightgrey-color: #505050;
    --gray-color: #c8c8c8;
    --lightgray-color: #e8e8e8;
    --border-color: #808080;
    --error-color: #f79595;
    --white-color: #ffffff;
  }
  
  * {
    margin: 0;
    padding: 0;
    font-family: "Proxima Nova", sans-serif;
    box-sizing: border-box;
  }
  
  html {
    font-size: 10px;
  }
  
  body {
    min-height: 100vh;
  }
  
  h1 {
    font-size: 14.4rem;
  }
  
  h2 {
    font-size: 3.6rem;
  }
  
  h3 {
    font-size: 2.4rem;
  }
  
  h4 {
    font-size: 1.4rem;
  }
  
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
  
  p {
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
  
  a,
  a:hover {
    text-decoration: none;
    color: var(--white-color);
  }
  
  input,
  textarea,
  button {
    outline: none;
  }
  
  button {
    font-size: 1.2rem;
    line-height: 1.4rem;
    padding: 1rem 3rem;
    border: 0;
    border-radius: 0.4rem;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
`;

export default GlobalStyles;

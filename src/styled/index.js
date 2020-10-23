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
    --catalog-item-background-color: #f2f2f2;
    --background-color: #f8f8f8;
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
  
  h1 {
    font-size: 14.4rem;
    
    @media (max-width: 576px) {
      font-size: 7.8rem;
    }
  }
  
  h2 {
    font-size: 3.6rem;
    
    @media (max-width: 576px) {
      font-size: 1.8rem;
    }
  }
  
  h3 {
    font-size: 2.4rem;
    
    @media (max-width: 576px) {
      font-size: 1.4rem;
    }
  }
  
  h4 {
    font-size: 1.4rem;
    
    @media (max-width: 576px) {
      font-size: 1.2rem;
    }
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
  
  ul {
    list-style-type: none;
  }
  
  input,
  textarea,
  button {
    outline: none;
  }
  
  button {
    border: 0;
    cursor: pointer;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
`;

export default GlobalStyles;

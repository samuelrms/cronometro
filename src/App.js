import React from "react";
import ConstructorTimer from "./components/ConstructorTimer";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => (props.whiteColor ? "white" : "black")};
    background: #2d2d2d;
  }
`;

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <ConstructorTimer />
    </div>
  );
};

export default App;

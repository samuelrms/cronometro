import React from "react";
import { Buttons } from "./styled";

const Button = ({ onClick, children }) => {
  return <Buttons onClick={onClick}>{children}</Buttons>;
};

export default Button;

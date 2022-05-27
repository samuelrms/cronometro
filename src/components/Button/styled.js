import styled from "styled-components";

export const Buttons = styled.button`
  background: #fff;
  color: #000;
  padding: 15px;
  margin: 15px;
  cursor: pointer;
  border-radius: 10px;
  border-color: transparent;
  font-size: 20px;
  font-weight: 700;
  box-shadow: 6px 10px 19px -3px rgba(0, 0, 0, 0.58);
  animation: buttonAnimation 0.5s ease-in-out;
  :hover {
    background: #e54;
    color: #fff;
  }
  @keyframes buttonAnimation {
    from {
      opacity: 0;
      transform: translate3d(0, 30px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;

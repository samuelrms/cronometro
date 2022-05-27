import styled from "styled-components";
import { Buttons } from "../Button/styled";

export const Button = styled(Buttons)``;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ContentCronometro = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  animation: contentCronometroAnimation 0.5s ease-in-out;
  @keyframes contentCronometroAnimation {
    from {
      opacity: 0;
      transform: translate3d(0, 80px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;

export const Cronometro = styled.h1`
  color: #fff;
  font-size: 5rem;
  padding: 30px;
`;

export const ContentActions = styled(ContentCronometro)`
  flex-direction: row;
`;

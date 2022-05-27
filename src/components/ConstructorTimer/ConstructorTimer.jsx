import React, { useState, useEffect } from "react";
import Button from "../Button";
import {
  Container,
  Cronometro,
  ContentCronometro,
  ContentActions,
} from "./styled";

const ConstructorTimer = () => {
  const THOUSANDS_IN_HOURS = 60000;
  const THOUSANDS_IN_SECONDS = 1000;
  const THOUSANDS = 100;
  const MODULAR_VALUE_OF_SIXTY = 60;
  const MODULAR_VALUE_OF_ONE_TEN = 10;
  const [time, setTime] = useState(0);
  const [onTimer, setOnTimer] = useState(false);
  const [assembleStopwatch, setAssembleStopwatch] = useState(true);

  useEffect(() => {
    let interval = null;
    if (onTimer) {
      interval = setInterval(() => {
        setTime((prevTimer) => prevTimer + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [onTimer]);

  const minutes = (
    "0" + Math.floor((time / THOUSANDS_IN_HOURS) % MODULAR_VALUE_OF_SIXTY)
  ).slice(-2);
  const seconds = (
    "0" + Math.floor((time / THOUSANDS_IN_SECONDS) % MODULAR_VALUE_OF_SIXTY)
  ).slice(-2);
  const milliseconds = (
    "0" +
    ((time / MODULAR_VALUE_OF_ONE_TEN) % THOUSANDS)
  ).slice(-2);

  const displayStopwatch = () => {
    setAssembleStopwatch(!assembleStopwatch);
  };

  return (
    <Container>
      <Button onClick={displayStopwatch}>Cronômetro</Button>
      {!assembleStopwatch && (
        <ContentCronometro>
          <Cronometro>
            {minutes}:{seconds}:{milliseconds}
          </Cronometro>
          <ContentActions>
            {!onTimer && time === 0 && (
              <Button onClick={() => setOnTimer(true)}>Start</Button>
            )}
            {onTimer && (
              <Button onClick={() => setOnTimer(false)}>Pause</Button>
            )}
            {!onTimer && time !== 0 && (
              <Button onClick={() => setOnTimer(true)}>Resume</Button>
            )}
            {!onTimer && time > 0 && (
              <Button onClick={() => setTime(0)}>Reset</Button>
            )}
          </ContentActions>
        </ContentCronometro>
      )}
    </Container>
  );
};

export default ConstructorTimer;

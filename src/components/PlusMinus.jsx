import React from "react";
import styled from "styled-components";

export function PlusMinus({
  count,
  increment,
  decrement,
  style,
  input,
  setInput,
}) {
  return (
    <Container style={{ ...style }}>
      <div
        onClick={() => setInput(Math.max(input - 1, 1))}
        className="noselect"
      >
        -
      </div>
      <div>{input}</div>
      <div onClick={() => setInput(input - 1 + 2)} className="noselect">
        +
      </div>
    </Container>
  );
}

const Container = styled.div`
  border-radius: 8px;
  border: 1px solid rgba(35, 28, 30, 0.2);

  backdrop-filter: blur(10px);
  display: grid;
  align-items: center;

  width: 100%;
  min-width: 80px;
  height: 35px;
  grid-template-columns: 1fr 1fr 1fr;

  color: #231c1e;

  text-align: center;
  font-family: Onest;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 114.972%; /* 18.395px */
  letter-spacing: -0.16px;

  & div {
    text-align: center;
    font-size: 15px;
    padding-top: 3px;
  }

  & div:first-child {
    color: rgba(35, 28, 30, 0.2);
    font-size: 20px;
    padding-top: 0px;
    padding-bottom: 3px;
    cursor: pointer;
  }

  & div:last-child {
    color: rgba(35, 28, 30, 0.2);
    font-size: 20px;
    padding-top: 3px;
    cursor: pointer;
  }
`;

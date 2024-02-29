import React from "react";
import styled from "styled-components";

const StyledFour = styled.svg`
  .rect {
    fill: white;
    height: 39px;
    rx: 5.5px;
    stroke: #6E7E44;
    width: 39px;
    x: 0.5px;
    y: 0.5px;
  }

  .path {
    stroke: #6E7E44;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3px;
  }

  .rect {
    fill: #8EDDFF;
    height: 40px;
    rx: 6px;
    width: 40px;
    x: 56px;
  }

  .rect {
    fill: #99704A;
    height: 40px;
    rx: 6px;
    width: 40px;
    x: 112px;
  }
`;

export const Four = ({ className }) => {
  return (
    <StyledFour
      className={`four ${className}`}
      fill="none"
      height="40"
      viewBox="0 0 203 40"
      width="203"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className="rect" />
      <path className="path" d="M13 21L17 25L27 15" />
      <rect className="rect" />
      <rect className="rect" />
    </StyledFour>
  );
};

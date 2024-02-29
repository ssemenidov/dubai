import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledDivWrapper = styled.div`
  align-items: center;
  border-radius: 24px;
  border: 3px solid #fff;

  background: rgba(255, 255, 255, 0.1);

  backdrop-filter: blur(20px);
  display: flex;
  gap: 16px;
  height: 92px;
  justify-content: center;
  overflow: hidden;
  padding: 10px;
  position: relative;
  width: 333px;

  & .go-to-catalog {
    color: #fff;
    font-family: "Manrope", Helvetica;
    font-size: 24px;
    font-weight: 800;
    letter-spacing: -0.24px;
    line-height: 27.6px;
    position: relative;
    text-align: center;
    white-space: nowrap;
    width: fit-content;
  }

  & .img {
    position: relative;
  }

  & .prop-two {
    height: 39.19px;
    width: 39.19px;
  }

  & .prop-one {
    height: 32px;
    width: 32px;
  }
`;

export const DivWrapper = ({ prop, className, img = "/img/6.svg" }) => {
  return (
    <StyledDivWrapper className={`div-wrapper ${className}`}>
      <div className="go-to-catalog">GO TO CATALOG</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M6.66669 16H25.3334M25.3334 16L16 6.66666M25.3334 16L16 25.3333"
          stroke="white"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </StyledDivWrapper>
  );
};

DivWrapper.propTypes = {
  prop: PropTypes.oneOf(["two", "one"]),
  img: PropTypes.string,
};

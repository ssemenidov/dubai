import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledElementWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 50px;
  position: relative;
  width: 201px;

  & .element-cm {
    color: #231c1e80;
    font-family: "Onest", Helvetica;
    font-weight: 300;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .text-wrapper-7 {
    color: #231c1e80;
    font-family: "Onest", Helvetica;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: -0.16px;
    line-height: 18.4px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .div-9 {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }

  & .text-wrapper-8 {
    color: #6e7e44;
    font-family: "Onest", Helvetica;
    font-weight: 600;
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .rectangle {
    align-self: stretch;
    background-color: #6e7e44;
    height: 2px;
    margin-top: -4px;
    position: relative;
    width: 100%;
  }

  & .text-wrapper-9 {
    color: #231c1e80;
    font-family: "Onest", Helvetica;
    font-weight: 300;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  &.three {
    gap: 16px;
  }

  &.four {
    gap: 6px;
  }

  &.three .element-cm {
    font-size: 20px;
    letter-spacing: -0.2px;
    line-height: 23px;
  }

  &.four .element-cm {
    font-size: 16px;
    letter-spacing: -0.16px;
    line-height: 18.4px;
  }

  &.three .text-wrapper-8 {
    font-size: 20px;
    letter-spacing: -0.2px;
    line-height: 23px;
  }

  &.four .text-wrapper-8 {
    font-size: 16px;
    letter-spacing: -0.16px;
    line-height: 18.4px;
  }

  &.three .text-wrapper-9 {
    font-size: 20px;
    letter-spacing: -0.2px;
    line-height: 23px;
  }

  &.four .text-wrapper-9 {
    font-size: 16px;
    letter-spacing: -0.16px;
    line-height: 18.4px;
  }
`;

export const ElementWrapper = ({ prop }) => {
  return (
    <StyledElementWrapper className={`element-wrapper ${prop}`}>
      <div className="element-cm">
        {prop === "four" && <>20 cm</>}

        {prop === "three" && <>22 cm</>}
      </div>
      {prop === "four" && <div className="text-wrapper-7">22 cm</div>}

      <div className="div-9">
        <div className="text-wrapper-8">24 cm</div>
        <div className="rectangle" />
      </div>
      <div className="text-wrapper-9">28 cm</div>
    </StyledElementWrapper>
  );
};

ElementWrapper.propTypes = {
  prop: PropTypes.oneOf(["three", "four"])
};

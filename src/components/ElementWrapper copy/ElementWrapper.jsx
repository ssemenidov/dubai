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

  & .text-wrapper-11 {
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

  & .div-16 {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }

  & .text-wrapper-12 {
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

  & .text-wrapper-13 {
    color: #231c1e80;
    font-family: "Onest", Helvetica;
    font-weight: 300;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  &.prop-three {
    gap: 16px;
  }

  &.prop-four {
    gap: 6px;
  }

  &.prop-three .element-cm {
    font-size: 20px;
    letter-spacing: -0.2px;
    line-height: 23px;
  }

  &.prop-four .element-cm {
    font-size: 16px;
    letter-spacing: -0.16px;
    line-height: 18.4px;
  }

  &.prop-three .text-wrapper-12 {
    font-size: 20px;
    letter-spacing: -0.2px;
    line-height: 23px;
  }

  &.prop-four .text-wrapper-12 {
    font-size: 16px;
    letter-spacing: -0.16px;
    line-height: 18.4px;
  }

  &.prop-three .text-wrapper-13 {
    font-size: 20px;
    letter-spacing: -0.2px;
    line-height: 23px;
  }

  &.prop-four .text-wrapper-13 {
    font-size: 16px;
    letter-spacing: -0.16px;
    line-height: 18.4px;
  }
`;

export const ElementWrapper = ({ prop }) => {
  return (
    <StyledElementWrapper className={`element-wrapper prop-${prop}`}>
      <div className="element-cm">
        {prop === "four" && <>20 cm</>}

        {prop === "three" && <>22 cm</>}
      </div>
      {prop === "four" && <div className="text-wrapper-11">22 cm</div>}

      <div className="div-16">
        <div className="text-wrapper-12">24 cm</div>
        <div className="rectangle" />
      </div>
      <div className="text-wrapper-13">28 cm</div>
    </StyledElementWrapper>
  );
};

ElementWrapper.propTypes = {
  prop: PropTypes.oneOf(["three", "four"])
};

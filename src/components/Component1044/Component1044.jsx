import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledComponent1044 = styled.div`
  align-items: center;
  display: inline-flex;
  gap: 16px;
  height: 56px;
  justify-content: flex-end;
  position: relative;

  & .log-in-wrapper {
    align-items: center;
    border: 1px solid;
    border-color: #231c1e1a;
    border-radius: 8px;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 16px;
    justify-content: center;
    overflow: hidden;
    padding: 16px;
    position: relative;
  }

  & .log-in {
    color: #231c1e;
    font-family: "Manrope", Helvetica;
    font-size: 16px;
    font-weight: 800;
    letter-spacing: -0.16px;
    line-height: 18.4px;
    margin-top: -1px;
    position: relative;
    text-align: center;
    white-space: nowrap;
    width: fit-content;
  }

  & .become-a-partner-wrapper {
    align-items: center;
    background-color: #231c1e;
    border-radius: 8px;
    display: flex;
    gap: 16px;
    justify-content: center;
    overflow: hidden;
    padding: 16px;
    position: relative;
    width: 190px;
  }

  & .become-a-partner {
    color: #ffffff;
    font-family: "Manrope", Helvetica;
    font-size: 16px;
    font-weight: 800;
    letter-spacing: -0.16px;
    line-height: 18.4px;
    margin-top: -3px;
    position: relative;
    text-align: center;
    white-space: nowrap;
    width: fit-content;
  }
`;

export const Component1044 = ({ prop, className }) => {
  return (
    <StyledComponent1044 className={`component-1044 ${className}`}>
      <div className="log-in-wrapper">
        <div className="log-in">LOG IN</div>
      </div>
      <div className="become-a-partner-wrapper">
        <div className="become-a-partner">BECOME A PARTNER</div>
      </div>
    </StyledComponent1044>
  );
};

Component1044.propTypes = {
  prop: PropTypes.oneOf(["one"])
};

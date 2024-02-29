import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import styled from "styled-components";

const StyledDivWrapper = styled.div`
  align-items: center;
  background-color: #ffffff;
  border-radius: 16px;
  display: flex;
  height: 206px;
  justify-content: space-between;
  overflow: hidden;
  padding: 0px 10px 0px 24px;
  position: relative;
  width: 305px;

  & .div-2 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-grow: 1;
    gap: 16px;
    padding: 60px 0px 0px;
    position: relative;
  }

  & .soft-toys-and {
    align-self: stretch;
    font-family: "Onest", Helvetica;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: -0.2px;
    line-height: 23px;
    margin-top: -1px;
    position: relative;
  }

  & .div-3 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    position: relative;
    width: 100%;
  }

  & .text-wrapper {
    align-self: stretch;
    color: #231c1e80;
    font-family: "Onest", Helvetica;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.14px;
    line-height: 16.1px;
    margin-top: -1px;
    position: relative;
  }

  & .div-4 {
    background-image: url(/img/shop_page/dc3313-1-3.png;
    background-position: 50% 50%;
    background-size: cover;
    height: 120px;
    position: relative;
    width: 120px;
  }

  & .one {
    z-index: 1;
  }

  & .prop-0-one {
    z-index: 0;
  }

  & .div-2.two .soft-toys-and {
    color: #6d7d43;
  }

  & .div-2.one .soft-toys-and {
    color: #231c1e;
  }
`;

export const DivWrapper = ({
  prop,
  className,
  divClassName,
  softToysAndClassName,
  text = "Soft Toys<br/>and Characters",
  divClassNameOverride,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    prop: prop || "one",
  });

  return (
    <StyledDivWrapper
      className={`div-wrapper ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div className={`div-2 ${state.prop} ${divClassName}`}>
        <div className={`soft-toys-and ${softToysAndClassName}`}>{text}</div>
        <div className="div-3">
          <div className="text-wrapper">1789 products</div>
        </div>
      </div>
      <div className={`div-4 prop-0-${state.prop} ${divClassNameOverride}`} />
    </StyledDivWrapper>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        prop: "two",
      };

    case "mouse_leave":
      return {
        ...state,
        prop: "one",
      };
  }

  return state;
}

DivWrapper.propTypes = {
  prop: PropTypes.oneOf(["two", "one"]),
  text: PropTypes.string,
};

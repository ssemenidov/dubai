import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import styled from "styled-components";
import { DivWrapper } from "../DivWrapper";

const StyledComponent1036 = styled.div`
  align-items: flex-start;
  display: inline-flex;
  position: relative;

  & .component-1035 {
    height: 140px !important;
    width: 342px !important;
  }

  & .component-1035-instance {
    gap: 8px !important;
    justify-content: center !important;
    padding: unset !important;
  }

  & .class {
    color: #6e7e44 !important;
    margin-top: unset !important;
  }

  & .class-2 {
    margin-top: unset !important;
  }
`;

export const Component1036 = ({ prop, className, divWrapperDivClassName, divWrapperText = "Characters" }) => {
  const [state, dispatch] = useReducer(reducer, {
    prop: prop || "one"
  });

  return (
    <StyledComponent1036
      className={`component-1036 ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <DivWrapper
        className="component-1035"
        divClassName="component-1035-instance"
        divClassNameOverride={divWrapperDivClassName}
        prop="one"
        softToysAndClassName={`${state.prop === "two" ? "class" : "class-2"}`}
        text={divWrapperText}
      />
    </StyledComponent1036>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        prop: "two"
      };

    case "mouse_leave":
      return {
        ...state,
        prop: "one"
      };
  }

  return state;
}

Component1036.propTypes = {
  prop: PropTypes.oneOf(["two", "one"]),
  divWrapperText: PropTypes.string
};

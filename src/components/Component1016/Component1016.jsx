import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import styled from "styled-components";

const StyledComponent1016 = styled.div`
  align-items: center;
  background-color: #c5c5c51a;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 190px;
  justify-content: flex-end;
  padding: 0px 0px 40px;
  position: relative;
  width: 208px;

  & .img-3 {
    position: relative;
  }

  & .div-10 {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 8px;
    justify-content: flex-end;
    position: relative;
  }

  & .dogs {
    font-family: "Comic Helvetic-Light", Helvetica;
    font-size: 20px;
    font-weight: 300;
    letter-spacing: -0.2px;
    line-height: 23px;
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .arrow-right {
    height: 20px;
    position: relative;
    width: 20px;
  }

  & .prop-4-two {
    height: 60.6px;
    width: 48.6px;
  }

  & .prop-4-three {
    height: 36px;
    width: 54px;
  }

  & .prop-4-one {
    height: 60.6px;
    width: 48.6px;
  }

  & .prop-4-four {
    height: 36px;
    width: 54px;
  }

  & .prop-5-two {
    color: #6e7e44;
  }

  & .prop-5-three {
    color: #6e7e44;
  }

  & .prop-5-one {
    color: #2d2326;
  }

  & .prop-5-four {
    color: #2d2326;
  }
`;

export const Component1016 = ({ prop, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    prop: prop || "one"
  });

  return (
    <StyledComponent1016
      className={`component-1016 ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <img
        className={`img-3 prop-4-${state.prop}`}
        alt="Img"
        src={
          state.prop === "four"
            ? "/img/4-2x.png"
            : state.prop === "two"
            ? "/img/1.png"
            : state.prop === "three"
            ? "/img/5.png"
            : "/img/2x-2.png"
        }
      />
      <div className="div-10">
        <div className={`dogs prop-5-${state.prop}`}>
          {["one", "two"].includes(state.prop) && <>DOGS</>}

          {["four", "three"].includes(state.prop) && <>BEARS</>}
        </div>
        {["three", "two"].includes(state.prop) && (
          <img
            className="arrow-right"
            alt="Arrow right"
            src={state.prop === "three" ? "/img/arrow-right-1.svg" : "/img/arrow-right.svg"}
          />
        )}
      </div>
    </StyledComponent1016>
  );
};

function reducer(state, action) {
  if (state.prop === "one") {
    switch (action) {
      case "mouse_enter":
        return {
          prop: "two"
        };
    }
  }

  if (state.prop === "four") {
    switch (action) {
      case "mouse_enter":
        return {
          prop: "three"
        };
    }
  }

  if (state.prop === "two") {
    switch (action) {
      case "mouse_leave":
        return {
          prop: "one"
        };
    }
  }

  if (state.prop === "three") {
    switch (action) {
      case "mouse_leave":
        return {
          prop: "four"
        };
    }
  }

  return state;
}

Component1016.propTypes = {
  prop: PropTypes.oneOf(["two", "four", "three", "one"])
};

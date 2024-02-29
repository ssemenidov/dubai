import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import styled from "styled-components";

const StyledComponent1037 = styled.div`
  align-items: center;
  background-color: #ffffff;
  border-radius: 8px;
  display: flex;
  gap: 40px;
  justify-content: space-around;
  padding: 20px;
  position: relative;
  width: 1110px;

  & .div-5 {
    align-items: center;
    align-self: stretch;
    display: flex;
    flex: 1;
    flex-grow: 1;
    position: relative;
  }

  & .div-6 {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 20px;
    position: relative;
  }

  & .text-wrapper-2 {
    color: #231c1e;
    font-family: "Onest", Helvetica;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: -0.2px;
    line-height: 23px;
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .div-7 {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 16px;
    position: relative;
  }

  & .text-wrapper-3 {
    color: #6e7e44;
    font-family: "Onest", Helvetica;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: -0.2px;
    line-height: 23px;
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .text-wrapper-4 {
    color: #231c1e80;
    font-family: "Onest", Helvetica;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: -0.2px;
    line-height: 23px;
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .chevron-down {
    height: 20px;
    position: relative;
    width: 20px;
  }

  & .prop-1-two {
    justify-content: space-between;
  }

  & .prop-1-one {
    gap: 8px;
  }
`;

export const Component1037 = ({ prop }) => {
  const [state, dispatch] = useReducer(reducer, {
    prop: prop || "one",
  });

  return (
    <StyledComponent1037
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div className={`div-5 prop-1-${state.prop}`}>
        <div className="div-6">
          <div className="text-wrapper-2">Sort:</div>
          <div className="div-7">
            <div className="text-wrapper-3">we recommend</div>
            {state.prop === "two" && (
              <>
                <div className="text-wrapper-4">by popularity</div>
                <div className="text-wrapper-4">price descending</div>
                <div className="text-wrapper-4">price ascending</div>
              </>
            )}
          </div>
        </div>
        <img
          className="chevron-down"
          alt="Chevron down"
          src={
            state.prop === "two"
              ? "/img/shop_page/chevron-down-6.svg"
              : "/img/shop_page/chevron-down-7.svg"
          }
        />
      </div>
    </StyledComponent1037>
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

Component1037.propTypes = {
  prop: PropTypes.oneOf(["two", "one"]),
};

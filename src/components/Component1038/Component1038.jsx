import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledComponent1038 = styled.div`
  -webkit-backdrop-filter: blur(20px) brightness(100%);
  align-items: center;
  backdrop-filter: blur(20px) brightness(100%);
  background-color: #a2ac87;
  border-radius: 8px;
  display: flex;
  height: 50px;
  justify-content: center;
  padding: 12px 16px;
  position: relative;

  & .vuesax-bold-property {
    height: 24px;
    margin-left: -2px;
    position: relative;
    width: 24px;
  }

  & .subtract {
    height: 20px;
    left: 3px;
    position: absolute;
    top: 2px;
    width: 18px;
  }

  & .text-wrapper-5 {
    color: #ffffff;
    font-family: "Manrope", Helvetica;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.16px;
    line-height: 18.4px;
    margin-right: -2px;
    position: relative;
    text-align: right;
    white-space: nowrap;
    width: fit-content;
  }

  & .div-8 {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 8px;
    justify-content: center;
    position: relative;
  }

  & .plus {
    height: 16px;
    position: relative;
    width: 16px;
  }

  & .text-wrapper-6 {
    color: #ffffff;
    font-family: "Manrope", Helvetica;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.16px;
    line-height: 18.4px;
    margin-top: -1px;
    position: relative;
    text-align: right;
    white-space: nowrap;
    width: fit-content;
  }

  & .vuesax-bold-bag {
    height: 24px;
    position: relative;
    width: 24px;
  }

  &.prop-2-three {
    gap: 16px;
    width: 310px;
  }

  &.prop-2-one {
    gap: 8px;
    width: 91px;
  }
`;

export const Component1038 = ({
  prop,
  prop1,
  className,
  plus = "/img/shop_page/plus-5.svg",
  vuesaxBoldBag = "/img/shop_page/vuesax-bold-bag-2-6.svg",
}) => {
  return (
    <StyledComponent1038
      className={`component-1038 prop-2-${prop} ${className}`}
    >
      {prop === "one" && (
        <>
          <div className="vuesax-bold-property">
            <img
              className="subtract"
              alt="Subtract"
              src="/img/shop_page/subtract-9.svg"
            />
          </div>
          <div className="text-wrapper-5">Add</div>
        </>
      )}

      {prop === "three" && (
        <>
          <div className="div-8">
            <img className="plus" alt="Plus" src={plus} />
            <div className="text-wrapper-6">Add to Bag</div>
          </div>
          <img
            className="vuesax-bold-bag"
            alt="Vuesax bold bag"
            src={vuesaxBoldBag}
          />
        </>
      )}
    </StyledComponent1038>
  );
};

Component1038.propTypes = {
  prop: PropTypes.oneOf(["three", "one"]),
  prop1: PropTypes.oneOf(["two"]),
  plus: PropTypes.string,
  vuesaxBoldBag: PropTypes.string,
};

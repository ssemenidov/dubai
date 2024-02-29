import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledComponent1042 = styled.div`
  align-items: center;
  display: flex;
  gap: 24px;
  height: 56px;
  position: relative;
  width: 345px;

  & .div-19 {
    position: relative;
  }

  & .text-wrapper-16 {
    color: #6e7e44;
    font-family: "Onest", Helvetica;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.16px;
    line-height: 18.4px;
    margin-left: -1px;
    margin-right: -1px;
    margin-top: -1px;
    position: relative;
    text-decoration: underline;
    white-space: nowrap;
    width: fit-content;
  }

  & .text-wrapper-17 {
    color: #231c1e;
    font-family: "Onest", Helvetica;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: -0.16px;
    line-height: 18.4px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .div-20 {
    align-items: center;
    align-self: stretch;
    border-radius: 8px;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 4px;
    justify-content: center;
    padding: 4px 6px 4px 10px;
    position: relative;
  }

  & .text-wrapper-18 {
    font-family: "Onest", Helvetica;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.16px;
    line-height: 18.4px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .chevron-down-3 {
    height: 16px;
    position: relative;
    width: 16px;
  }

  & .prop-5-two {
    color: #231c1e;
    font-family: "Onest", Helvetica;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: -0.16px;
    line-height: 18.4px;
    white-space: nowrap;
    width: fit-content;
  }

  & .prop-5-one {
    align-items: center;
    display: flex;
    gap: 10px;
    justify-content: center;
    width: 35px;
  }

  & .prop-6-two {
    color: #6e7e44;
    text-decoration: underline;
  }

  & .prop-6-one {
    color: #231c1e;
  }
`;

export const Component1042 = ({
  prop,
  className,
  chevronDown = "/img/shop_page/chevron-down-8.svg",
  img = "/img/shop_page/chevron-down-9.svg",
}) => {
  return (
    <StyledComponent1042 className={`component-1042 ${className}`}>
      <div className={`div-19 prop-5-${prop}`}>
        {prop === "one" && <div className="text-wrapper-16">Main</div>}

        {prop === "two" && <>Main</>}
      </div>
      <div className="text-wrapper-17">Catalog</div>
      <div className="div-20">
        <div className={`text-wrapper-18 prop-6-${prop}`}>Brands</div>
        <img
          className="chevron-down-3"
          alt="Chevron down"
          src={prop === "two" ? chevronDown : img}
        />
      </div>
    </StyledComponent1042>
  );
};

Component1042.propTypes = {
  prop: PropTypes.oneOf(["two", "one"]),
  chevronDown: PropTypes.string,
  img: PropTypes.string,
};

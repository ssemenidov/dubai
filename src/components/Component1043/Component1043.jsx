import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledComponent1043 = styled.div`
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  position: relative;

  & .div-21 {
    -webkit-backdrop-filter: blur(24px) brightness(100%);
    align-items: center;
    backdrop-filter: blur(24px) brightness(100%);
    background-color: #ffffff66;
    border-radius: 8px;
    display: inline-flex;
    gap: 8px;
    height: 50px;
    justify-content: flex-end;
    overflow: hidden;
    padding: 16px;
    position: relative;
  }

  & .element-2 {
    color: #231c1e;
    font-family: "Manrope", Helvetica;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -0.2px;
    line-height: 23px;
    margin-top: -5.5px;
    position: relative;
    text-align: right;
    white-space: nowrap;
    width: fit-content;
  }

  & .vuesax-bold-bag-2 {
    height: 24px;
    margin-bottom: -3px;
    margin-top: -3px;
    position: relative;
    width: 24px;
  }
`;

export const Component1043 = ({
  prop,
  className,
  text = "99",
  vuesaxBoldBag = "/img/shop_page/vuesax-bold-bag-2-9.svg",
}) => {
  return (
    <StyledComponent1043 className={`component-1043 ${className}`}>
      <div className="div-21">
        <div className="element-2">{text}</div>
        <img
          className="vuesax-bold-bag-2"
          alt="Vuesax bold bag"
          src={vuesaxBoldBag}
        />
      </div>
    </StyledComponent1043>
  );
};

Component1043.propTypes = {
  prop: PropTypes.oneOf(["one"]),
  text: PropTypes.string,
  vuesaxBoldBag: PropTypes.string,
};

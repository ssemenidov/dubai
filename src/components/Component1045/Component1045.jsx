import PropTypes from "prop-types";
import React from "react";
import { Component1042 } from "../Component1042";
import { Component1043 } from "../Component1043";
import { Component1044 } from "../Component1044/Component1044";
import styled from "styled-components";

const StyledComponent1045 = styled.div`
  align-items: center;
  background-color: #ffffff;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: #231c1e33;
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
  position: relative;
  width: 1440px;

  & .div-22 {
    align-items: center;
    align-self: stretch;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 40px;
    position: relative;
  }

  & .img-3 {
    height: 26px;
    position: relative;
    width: 190px;
  }

  & .component-1042-instance {
    align-self: stretch !important;
    height: unset !important;
  }

  & .div-23 {
    align-items: center;
    display: flex;
    gap: 16px;
    justify-content: flex-end;
    position: relative;
    width: 615px;
  }

  & .div-24 {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 16px;
    position: relative;
  }

  & .img-4 {
    flex: 0 0 auto;
    height: 50px;
    position: relative;
  }

  & .design-component-instance-node {
    flex: 0 0 auto !important;
  }
`;

export const Component1045 = ({
  className,
  img = "/img/shop_page/6.png",
  component1042Prop = "one",
  component1042ChevronDown,
  img1 = "/img/shop_page/6.svg",
  component1043VuesaxBoldBag = "/img/shop_page/vuesax-bold-bag-2-9.svg",
}) => {
  return (
    <StyledComponent1045 className={`component-1045 ${className}`}>
      <div className="div-22">
        <img className="img-3" alt="Img" src={img} />
        <Component1042
          chevronDown={component1042ChevronDown}
          className="component-1042-instance"
          img="/img/shop_page/chevron-down-10.svg"
          prop={component1042Prop}
        />
      </div>
      <div className="div-23">
        <div className="div-24">
          <img className="img-4" alt="Img" src={img1} />
          <Component1043
            className="design-component-instance-node"
            prop="one"
            text="23"
            vuesaxBoldBag={component1043VuesaxBoldBag}
          />
        </div>
        <Component1044 className="design-component-instance-node" prop="one" />
      </div>
    </StyledComponent1045>
  );
};

Component1045.propTypes = {
  img: PropTypes.string,
  component1042Prop: PropTypes.string,
  component1042ChevronDown: PropTypes.string,
  img1: PropTypes.string,
  component1043VuesaxBoldBag: PropTypes.string,
};

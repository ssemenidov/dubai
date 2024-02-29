import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledPropertyWrapper = styled.div`
  align-items: flex-start;
  background-color: #ffffff;
  border-radius: 0px 16px 16px 0px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-end;
  overflow: hidden;
  padding: 20px 0px;
  position: relative;
  width: 240px;

  & .div-wrapper-3 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    gap: 10px;
    padding: 0px 0px 0px 50px;
    position: relative;
    width: 100%;
  }

  & .text-wrapper-14 {
    color: #231c1e;
    font-family: "Onest", Helvetica;
    font-size: 24px;
    font-weight: 500;
    letter-spacing: -0.24px;
    line-height: 27.6px;
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .img-2 {
    align-self: stretch;
    height: 1px;
    object-fit: cover;
    position: relative;
    width: 100%;
  }

  & .div-17 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 16px;
    padding: 0px 20px 0px 50px;
    position: relative;
    width: 100%;
  }

  & .div-18 {
    align-items: center;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    justify-content: space-between;
    position: relative;
    width: 100%;
  }

  & .text-wrapper-15 {
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

  & .chevron-down-2 {
    height: 20px;
    position: relative;
    width: 20px;
  }
`;

export const PropertyWrapper = ({ property1, className }) => {
  return (
    <StyledPropertyWrapper className={`property-wrapper ${className}`}>
      <div className="div-wrapper-3">
        <div className="text-wrapper-14">Filtr:</div>
      </div>
      <img className="img-2" alt="Img" src="/img/shop_page/22.svg" />
      <div className="div-17">
        <div className="div-18">
          <div className="text-wrapper-15">Price</div>
          <img
            className="chevron-down-2"
            alt="Chevron down"
            src="/img/shop_page/chevron-down-11.svg"
          />
        </div>
      </div>
      <img className="img-2" alt="Img" src="/img/shop_page/22.svg" />
      <div className="div-17">
        <div className="div-18">
          <div className="text-wrapper-15">Color</div>
          <img
            className="chevron-down-2"
            alt="Chevron down"
            src="/img/shop_page/chevron-down-11.svg"
          />
        </div>
      </div>
      <img className="img-2" alt="Img" src="/img/shop_page/22.svg" />
      <div className="div-17">
        <div className="div-18">
          <div className="text-wrapper-15">Size</div>
          <img
            className="chevron-down-2"
            alt="Chevron down"
            src="/img/shop_page/chevron-down-11.svg"
          />
        </div>
      </div>
      <img className="img-2" alt="Img" src="/img/shop_page/22.svg" />
      <div className="div-17">
        <div className="div-18">
          <div className="text-wrapper-15">Type</div>
          <img
            className="chevron-down-2"
            alt="Chevron down"
            src="/img/shop_page/chevron-down-11.svg"
          />
        </div>
      </div>
    </StyledPropertyWrapper>
  );
};

PropertyWrapper.propTypes = {
  property1: PropTypes.oneOf(["one"]),
};

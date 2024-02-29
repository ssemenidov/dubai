import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 60px;
  position: relative;
  width: 880px;

  & .view-12 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    gap: 30px;
    position: relative;
    width: 100%;
  }

  & .img-wrapper {
    background-color: #136e81;
    border-radius: 20px;
    height: 160px;
    overflow: hidden;
    position: relative;
    width: 160px;
  }

  & .element-logo-DC-et-HO-2 {
    height: 117px;
    left: 22px;
    position: absolute;
    top: 22px;
    width: 115px;
  }

  & .view-13 {
    align-items: flex-start;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-grow: 1;
    gap: 32px;
    position: relative;
  }

  & .text-wrapper-20 {
    align-self: stretch;
    color: #2d2326;
    font-family: "Onest", Helvetica;
    font-size: 24px;
    font-weight: 300;
    letter-spacing: -0.24px;
    line-height: 27.6px;
    margin-top: -1px;
    position: relative;
  }

  & .toys-from-histoire-d {
    align-self: stretch;
    color: #2d2326;
    font-family: "Onest", Helvetica;
    font-size: 24px;
    font-weight: 300;
    letter-spacing: -0.24px;
    line-height: 27.6px;
    position: relative;
  }

  & .view-14 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: 500px;
    position: relative;
    width: 100%;
  }

  & .view-15 {
    align-items: flex-end;
    align-self: stretch;
    display: flex;
    flex: 1;
    flex-grow: 1;
    gap: 16px;
    justify-content: center;
    position: relative;
    width: 100%;
  }

  & .view-16 {
    align-self: stretch;
    background-color: #00000033;
    background-image: url(/img/4-2.png);
    background-position: 50% 50%;
    background-size: cover;
    border-radius: 16px;
    flex: 1;
    flex-grow: 1;
    overflow: hidden;
    position: relative;
  }

  & .text-wrapper-21 {
    color: #ffffff;
    font-family: "Comic Helvetic-Medium", Helvetica;
    font-size: 24px;
    font-weight: 500;
    height: 28px;
    left: 160px;
    letter-spacing: -0.24px;
    line-height: 27.6px;
    position: absolute;
    top: 94px;
    white-space: nowrap;
  }

  & .view-17 {
    align-self: stretch;
    background-color: #00000033;
    background-image: url(/img/5-2x.png);
    background-position: 50% 50%;
    background-size: cover;
    border-radius: 16px;
    flex: 1;
    flex-grow: 1;
    overflow: hidden;
    position: relative;
  }

  & .text-wrapper-22 {
    color: #ffffff;
    font-family: "Comic Helvetic-Medium", Helvetica;
    font-size: 24px;
    font-weight: 500;
    height: 28px;
    left: 115px;
    letter-spacing: -0.24px;
    line-height: 27.6px;
    position: absolute;
    top: 94px;
    white-space: nowrap;
  }

  & .view-18 {
    align-self: stretch;
    background-color: #00000033;
    background-image: url(/img/6-2x.png);
    background-position: 50% 50%;
    background-size: cover;
    border-radius: 16px;
    flex: 1;
    flex-grow: 1;
    overflow: hidden;
    position: relative;
  }

  & .text-wrapper-23 {
    color: #ffffff;
    font-family: "Comic Helvetic-Medium", Helvetica;
    font-size: 24px;
    font-weight: 500;
    height: 28px;
    left: 150px;
    letter-spacing: -0.24px;
    line-height: 27.6px;
    position: absolute;
    top: 94px;
    white-space: nowrap;
  }

  & .view-19 {
    align-self: stretch;
    background-color: #00000033;
    background-image: url(/img/7.png);
    background-position: 50% 50%;
    background-size: cover;
    border-radius: 16px;
    flex: 1;
    flex-grow: 1;
    overflow: hidden;
    position: relative;
  }

  & .text-wrapper-24 {
    color: #ffffff;
    font-family: "Comic Helvetic-Medium", Helvetica;
    font-size: 24px;
    font-weight: 500;
    height: 28px;
    left: 148px;
    letter-spacing: -0.24px;
    line-height: 27.6px;
    position: absolute;
    top: 94px;
    white-space: nowrap;
  }

  & .view-20 {
    align-items: center;
    border-radius: 28px;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 16px;
    justify-content: center;
    overflow: hidden;
    position: relative;
  }

  & .see-all-brand {
    color: #6d7d43;
    font-family: "Manrope", Helvetica;
    font-size: 24px;
    font-weight: 800;
    letter-spacing: -0.24px;
    line-height: 27.6px;
    margin-top: -1px;
    position: relative;
    text-align: center;
    white-space: nowrap;
    width: fit-content;
  }

  & .arrow-right-4 {
    height: 32px;
    position: relative;
    width: 32px;
  }
`;

export const Div = () => {
  return (
    <StyledDiv>
      <div className="view-12">
        <div className="img-wrapper">
          <img
            className="element-logo-DC-et-HO-2"
            alt="Element logo DC et HO"
            src="/img/2021-logo-dc-et-ho-72-03-1-1.png"
          />
        </div>
        <div className="view-13">
          <p className="text-wrapper-20">
            The brand was founded in 1955 and still delights fans with exquisite
            and unique toys.
          </p>
          <p className="toys-from-histoire-d">
            Toys from Histoire d&#39;Ours are now recognized all over the world,
            and they are also collected.
          </p>
        </div>
      </div>
      <div className="view-14">
        <div className="view-15">
          <div className="view-16">
            <div className="text-wrapper-21">Hippo Bar</div>
          </div>
          <div className="view-17">
            <div className="text-wrapper-22">Giant Plush Bears</div>
          </div>
        </div>
        <div className="view-15">
          <div className="view-18">
            <div className="text-wrapper-23">Bear Family</div>
          </div>
          <div className="view-19">
            <div className="text-wrapper-24">Countryside</div>
          </div>
        </div>
        <div className="view-20">
          <div className="see-all-brand">
            SEE ALL&nbsp;&nbsp;BRAND CATEGORIES
          </div>
          <img
            className="arrow-right-4"
            alt="Arrow right"
            src="/img/arrow-right-10.svg"
          />
        </div>
      </div>
    </StyledDiv>
  );
};

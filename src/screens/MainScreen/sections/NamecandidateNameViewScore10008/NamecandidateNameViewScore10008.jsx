import React from "react";
import styled from "styled-components";

const StyledNamecandidateNameViewScore10008 = styled.div`
  align-items: flex-end;
  display: flex;
  gap: 20px;
  height: 800px;
  justify-content: center;
  left: 50px;
  position: absolute;
  top: 5740px;
  width: 1340px;

  & .view-100 {
    align-items: center;
    background-color: #00000033;
    background-image: url(/img/4.png);
    background-position: 50% 50%;
    background-size: cover;
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: 780px;
    justify-content: center;
    margin-left: -50px;
    margin-right: -50px;
    padding: 32px;
    position: relative;
    width: 1440px;
  }

  & .view-101 {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 80px;
    height: 736px;
    justify-content: center;
    margin-bottom: -10px;
    margin-top: -10px;
    position: relative;
    width: 1340px;
  }

  & .view-102 {
    align-items: center;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 24px;
    justify-content: center;
    position: relative;
    width: 848px;
  }

  & .text-wrapper-49 {
    color: #ffffff;
    font-family: "Comic Helvetic-Medium", Helvetica;
    font-size: 64px;
    font-weight: 500;
    letter-spacing: -0.64px;
    line-height: 73.6px;
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .for-a-complete {
    color: #ffffff;
    font-family: "Onest", Helvetica;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: -0.24px;
    line-height: 27.6px;
    margin-left: -76px;
    margin-right: -76px;
    position: relative;
    text-align: center;
    width: 1000px;
  }

  & .view-103 {
    -webkit-backdrop-filter: blur(40px) brightness(100%);
    align-items: center;
    backdrop-filter: blur(40px) brightness(100%);
    background-color: #ffffff1a;
    border: 3px solid;
    border-color: #ffffff;
    border-radius: 28px;
    display: flex;
    gap: 16px;
    height: 92px;
    justify-content: center;
    overflow: hidden;
    padding: 10px;
    position: relative;
    width: 333px;
  }

  & .go-to-catalog-2 {
    color: #ffffff;
    font-family: "Manrope", Helvetica;
    font-size: 24px;
    font-weight: 800;
    letter-spacing: -0.24px;
    line-height: 27.6px;
    position: relative;
    text-align: center;
    white-space: nowrap;
    width: fit-content;
  }

  & .arrow-right-9 {
    height: 32px;
    position: relative;
    width: 32px;
  }
`;

export const NamecandidateNameViewScore10008 = () => {
  return (
    <StyledNamecandidateNameViewScore10008>
      <div className="view-100">
        <div className="view-101">
          <div className="view-102">
            <div className="text-wrapper-49">Catalog</div>
            <p className="for-a-complete">
              For a complete overview of all available products, go to our
              catalog.
              <br />
              Here you can dive deeper into the offered assortment and learn
              more about any product.
            </p>
          </div>
          <div className="view-103">
            <div className="go-to-catalog-2">GO TO CATALOG</div>
            <img
              className="arrow-right-9"
              alt="Arrow right"
              src="/img/arrow-right-12.svg"
            />
          </div>
        </div>
      </div>
    </StyledNamecandidateNameViewScore10008>
  );
};

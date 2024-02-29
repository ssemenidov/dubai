import React from "react";
import { Component1016 } from "../../../../../../components/Component1016";
import styled from "styled-components";

const StyledView = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: relative;
  width: 880px;

  & .div-19 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    gap: 30px;
    position: relative;
    width: 100%;
  }

  & .element-logo-DC-et-HO-wrapper {
    background-color: #d58795;
    border-radius: 20px;
    height: 160px;
    overflow: hidden;
    position: relative;
    width: 160px;
  }

  & .element-logo-DC-et-HO {
    height: 127px;
    left: 17px;
    object-fit: cover;
    position: absolute;
    top: 16px;
    width: 127px;
  }

  & .div-20 {
    align-items: flex-start;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-grow: 1;
    gap: 20px;
    position: relative;
  }

  & .p {
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

  & .text-wrapper-16 {
    align-self: stretch;
    color: #2d2326;
    font-family: "Onest", Helvetica;
    font-size: 24px;
    font-weight: 300;
    letter-spacing: -0.24px;
    line-height: 27.6px;
    position: relative;
  }

  & .div-21 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 16px;
    position: relative;
    width: 100%;
  }

  & .div-22 {
    align-items: center;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    gap: 16px;
    justify-content: center;
    position: relative;
    width: 100%;
  }

  & .component-1016-instance {
    flex: 1 !important;
    flex-grow: 1 !important;
    width: unset !important;
  }

  & .div-23 {
    align-items: center;
    background-color: #c5c5c51a;
    border-radius: 16px;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-grow: 1;
    gap: 24px;
    height: 190px;
    justify-content: flex-end;
    padding: 0px 0px 40px;
    position: relative;
  }

  & .image {
    height: 46px;
    position: relative;
    width: 46px;
  }

  & .text-wrapper-17 {
    color: #2d2326;
    font-family: "Comic Helvetic-Light", Helvetica;
    font-size: 20px;
    font-weight: 300;
    letter-spacing: -0.2px;
    line-height: 23px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .image-2 {
    height: 40px;
    position: relative;
    width: 70px;
  }

  & .image-3 {
    height: 46.4px;
    position: relative;
    width: 64.4px;
  }

  & .image-4 {
    height: 56px;
    position: relative;
    width: 48px;
  }

  & .image-5 {
    height: 58px;
    position: relative;
    width: 40px;
  }

  & .image-6 {
    height: 50.4px;
    position: relative;
    width: 50.4px;
  }

  & .div-24 {
    align-items: center;
    border-radius: 28px;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 16px;
    justify-content: center;
    overflow: hidden;
    position: relative;
  }

  & .see-all-animals-toys {
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

  & .arrow-right-2 {
    height: 32px;
    position: relative;
    width: 32px;
  }

  & .div-25 {
    align-items: center;
    border-radius: 28px;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 8px;
    justify-content: center;
    overflow: hidden;
    position: relative;
  }

  & .see-other-categories {
    color: #a2ac87;
    font-family: "Manrope", Helvetica;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.16px;
    line-height: 18.4px;
    margin-top: -2px;
    position: relative;
    text-align: center;
    white-space: nowrap;
    width: fit-content;
  }

  & .arrow-right-3 {
    height: 20px;
    position: relative;
    width: 20px;
  }
`;

export const View = () => {
  return (
    <StyledView>
      <div className="div-19">
        <div className="element-logo-DC-et-HO-wrapper">
          <img
            className="element-logo-DC-et-HO"
            alt="Element logo DC et HO"
            src="/img/2021-logo-dc-et-ho-72-05-1.png"
          />
        </div>
        <div className="div-20">
          <p className="p">
            Doudou et Compagnie are specialists in French designed luxury soft toys and nursery accessories.
          </p>
          <p className="text-wrapper-16">
            Beautifully made from the highest quality and softest materials, little people will treasure these adorable
            soft toys, dolls and gifts.
          </p>
          <p className="text-wrapper-16">
            Brand is offering collections of infinite&nbsp;&nbsp;softness, tenderness and&nbsp;&nbsp;kindness for babies
          </p>
        </div>
      </div>
      <div className="div-21">
        <div className="div-22">
          <Component1016 className="component-1016-instance" prop="one" />
          <Component1016 className="component-1016-instance" prop="four" />
          <div className="div-23">
            <img className="image" alt="Image" src="/img/3.png" />
            <div className="text-wrapper-17">RABBITS</div>
          </div>
          <div className="div-23">
            <img className="image-2" alt="Image" src="/img/13-2x.png" />
            <div className="text-wrapper-17">HIPPOS</div>
          </div>
        </div>
        <div className="div-22">
          <div className="div-23">
            <img className="image-3" alt="Image" src="/img/1-2x.png" />
            <div className="text-wrapper-17">MOUSE</div>
          </div>
          <div className="div-23">
            <img className="image-4" alt="Image" src="/img/2x.png" />
            <div className="text-wrapper-17">UNICORN</div>
          </div>
          <div className="div-23">
            <img className="image-5" alt="Image" src="/img/2x-4.png" />
            <div className="text-wrapper-17">CAT</div>
          </div>
          <div className="div-23">
            <img className="image-6" alt="Image" src="/img/2.png" />
            <div className="text-wrapper-17">ELEPHANT</div>
          </div>
        </div>
        <div className="div-21">
          <div className="div-24">
            <div className="see-all-animals-toys">SEE ALL&nbsp;&nbsp;ANIMALS TOYS</div>
            <img className="arrow-right-2" alt="Arrow right" src="/img/arrow-right-8.svg" />
          </div>
          <div className="div-25">
            <div className="see-other-categories">SEE OTHER CATEGORIES</div>
            <img className="arrow-right-3" alt="Arrow right" src="/img/arrow-right-9.svg" />
          </div>
        </div>
      </div>
    </StyledView>
  );
};

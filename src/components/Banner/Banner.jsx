import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { SERVER_URL } from "../../const";

const StyledComponent1046 = styled.div`
  align-items: center;
  background-color: #d58795;
  border-radius: 24px;
  display: flex;
  gap: 40px;
  height: 302px;
  overflow: hidden;
  position: relative;
  @media (max-width: 900px) {
    height: fit-content;
    padding: 40px 0;
  }

  & .coming-soon {
    font-size: 24px;

    font-family: Onest;

    font-weight: 600;
  }

  & .div-wrapper-4 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 0px 0px 36px;
    position: relative;
    width: 800px;
  }

  & .div-25 {
    align-items: center;
    align-self: stretch;
    display: flex;
    flex: 1;
    flex-grow: 1;
    gap: 16px;
    position: relative;
    width: 100%;
    @media (max-width: 900px) {
      flex-direction: column;
    }
  }

  & .element-logo-DC-et-HO-wrapper {
    align-items: center;
    border: 1px solid;
    border-color: #ffffff66;
    border-radius: 24px;
    display: flex;
    gap: 10px;
    height: 232px;
    justify-content: center;
    margin-left: -1px;
    overflow: hidden;
    position: relative;
    width: 232px;
    @media (max-width: 900px) {
      width: 180px;
      height: 180px;
    }
  }

  & .element-logo-DC-et-HO {
    height: 230px;
    object-fit: cover;
    position: relative;
    width: 230px;
    @media (max-width: 900px) {
      width: 180px;
      height: 180px;
    }
  }

  & .div-26 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-grow: 1;
    gap: 20px;
    justify-content: center;
    padding: 16px;
    position: relative;
  }

  & .doudou-et-compagnie {
    align-self: stretch;
    font-family: "Onest", Helvetica;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: -0.5px;
    line-height: 24px;
    position: relative;
  }

  & .beautifully-made {
    align-self: stretch;
    opacity: 70%;
    font-family: "Onest", Helvetica;
    font-size: 20px;
    font-weight: 300;
    letter-spacing: -0.5px;
    line-height: 24px;
    position: relative;
  }

  & .div-27 {
    align-self: stretch;
    background-image: url(/img/shop_page/1.png);
    background-position: 50% 50%;
    background-size: cover;
    flex: 1;
    flex-grow: 1;
    position: relative;
  }
`;

export const Banner = (props) => {
  //console.log(props);
  return (
    <StyledComponent1046
      className={`component-1046 ${props.className}`}
      style={{
        ...props.style,
        backgroundColor: props.attributes.color,
        color: props.attributes.text_color_black ? "#000" : "#fff",
      }}
    >
      <div className="div-wrapper-4">
        <div className="div-25">
          <div
            style={{
              borderColor: props.attributes.text_color_black
                ? "#000"
                : "#ffffff66",
            }}
            className="element-logo-DC-et-HO-wrapper"
          >
            <img
              className="element-logo-DC-et-HO"
              alt="Element logo DC et HO"
              src={`${SERVER_URL}${props.attributes.logo.data.attributes.formats.medium.url}`}
            />
          </div>
          <div className="div-26">
            {props.attributes.coming_soon && (
              <p className="coming-soon">Coming soon!</p>
            )}
            <p className="doudou-et-compagnie">
              {props.attributes.description_short}
            </p>
            <p className="beautifully-made">
              {props.attributes.description_long}
            </p>
          </div>
        </div>
      </div>
      <div
        className="div-27"
        style={{
          backgroundImage: `url(${
            SERVER_URL +
            props.attributes.banner_page_image.data.attributes.formats.medium
              .url
          })`,
        }}
      />
    </StyledComponent1046>
  );
};

Banner.propTypes = {
  prop: PropTypes.oneOf(["one"]),
};

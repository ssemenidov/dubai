import React, { useRef } from "react";
import { DivWrapper } from "../../../../components/DivWrapper";
import styled from "styled-components";
import fon from "./real_bear.png";
import { slide as Menu } from "react-burger-menu";
import { useState, useEffect } from "react";
import axios from "axios";
import { SERVER_URL } from "../../../../const";
import { Context } from "../../../../const";
import { useContext } from "react";

const StyledNamecandidateNameViewScore10001 = styled.div`
  align-items: flex-start;
  display: inline-flex;
  gap: 10px;
  padding: 10px 0px 50px;
  width: calc(100%);

  max-width: 1420px;

  margin: auto;
  position: relative;
  @media (max-width: 1440px) {
    margin: 0 10px;
    width: calc(100% - 20px);
  }

  & .burger {
    display: none;

    @media (max-width: 1020px) {
      display: block;
    }
  }
  @media (max-width: 1020px) {
    padding-bottom: 0;
  }
`;

const StyledView32 = styled.div`
  align-items: flex-start;
  background-color: #a2ac87;
  border-radius: 60px;
  display: flex;
  flex-direction: column;
  height: 780px;
  justify-content: space-between;
  /* overflow: hidden; */
  padding: 40px 30px 40px 40px;
  position: relative;
  width: 610px;
  min-width: 610px;
  @media (max-width: 1120px) {
    width: 100%;
  }
  @media (max-width: 600px) {
    min-width: 0;
    height: 670px;
    border-radius: 24px;
  }
  @media (max-width: 600px) {
    min-width: 0;

    height: 528px;
    padding: 20px;
    margin-bottom: 24px;
  }
`;

const StyledView33 = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 60px;
  position: relative;
  width: 100%;

  @media (max-width: 600px) {
    gap: 36px;
  }
`;

const StyledView34 = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  gap: 32px;
  height: 32px;
  position: relative;
  width: 100%;
`;

const StyledImage7 = styled.img`
  height: 27px;
  position: relative;
  width: 200px;
`;

const StyledView35 = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  gap: 24px;
  position: relative;
  width: 271px;
  @media (max-width: 1120px) {
    width: 100%;
  }
`;

const StyledTextWrapper27 = styled.a`
  color: #ffffff;
  font-family: "Onest", Helvetica;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: -0.16px;
  line-height: 18.4px;
  position: relative;
  white-space: nowrap;
  padding: 6px 10px 6px 10px;

  border-radius: 8px;
  @media (max-width: 600px) {
    display: none;
  }
  transition: all 0.5s;
  &:hover {
    background-color: #ffffff33;
  }
`;

const StyledView36 = styled.div`
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 4px;
  justify-content: center;
  padding: 10px 10px 10px 10px;
  position: relative;
  cursor: pointer;
  & img {
    transition: all 200ms ease 0s;
  }

  transition: all 0.5s;
  &:not(:has(#child-main:hover)):hover {
    align-items: center;
    align-self: stretch;
    background-color: #ffffff33;
    border-radius: 8px;
    display: flex;
    font-weight: 700;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

const StyledTextWrapper28 = styled.div`
  color: #ffffff;
  font-family: "Onest", Helvetica;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: -0.16px;
  line-height: 18.4px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
`;

const StyledChevronDown = styled.img`
  height: 16px;
  position: relative;
  width: 16px;
`;

const StyledView37 = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 32px;
  position: relative;
  width: 100%;
`;

const StyledView38 = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  position: relative;
`;

const StyledTextWrapper29 = styled.div`
  color: #ffffff;
  font-family: Comic Helvetic;
  font-size: 48px;

  font-weight: 900;
  letter-spacing: -1.2px;
  line-height: 48px;
  margin-top: -1px;
  position: relative;
  /* white-space: nowrap; */
  width: fit-content;
  @media (max-width: 600px) {
    font-size: 28px;
    color: #fff;

    font-family: Comic Helvetic;
    font-size: 28px;
    font-style: normal;
    font-weight: 900;
    line-height: 100%; /* 28px */
    letter-spacing: -0.7px;
  }
`;

const StyledOverlapWrapper = styled.div`
  height: 176px;
  position: relative;
  width: 226px;
  @media (max-width: 600px) {
    height: 90px;
  }
`;

const StyledOverlap = styled.div`
  height: 166px;
  position: relative;
  top: 9px;
  width: 227px;
`;

const StyledOverlapGroup = styled.div`
  height: 166px;
  left: 0;
  position: absolute;
  top: 0;
  width: 327px;
`;

const StyledTextWrapper30 = styled.div`
  color: #ffffff;
  font-family: Comic Helvetic;
  font-size: 86px;
  font-weight: 400;
  left: 0;
  font-weight: 900;
  letter-spacing: -2.15px;
  line-height: 86px;
  position: absolute;
  top: 0;
  white-space: nowrap;
  @media (max-width: 600px) {
    line-height: normal;
    font-size: 48px;

    font-weight: 900;
    letter-spacing: -1.2px;
  }
`;

const StyledTextWrapper31 = styled.div`
  color: #ffffff;
  font-family: Comic Helvetic;
  font-size: 86px;
  font-weight: 400;
  left: 0;
  letter-spacing: -2.15px;
  line-height: 86px;
  position: absolute;
  top: 80px;
  white-space: nowrap;
  @media (max-width: 600px) {
    line-height: normal;
    color: #fff;

    font-family: Comic Helvetic;
    font-size: 48px;
    font-style: normal;
    font-weight: 900;
    line-height: 100%; /* 48px */
    letter-spacing: -1.2px;
    top: 44px;

    margin-top: 5px;
  }
`;

const StyledTextWrapper32 = styled.div`
  color: #ffffff;
  font-family: Comic Helvetic;
  font-size: 40px;
  font-weight: 400;
  left: 179px;
  letter-spacing: -1px;
  line-height: 40px;
  position: absolute;
  top: 35px;
  white-space: nowrap;
  @media (max-width: 600px) {
    left: 74px;
    font-size: 24px;
    line-height: normal;
    left: 101px;

    font-weight: 900;
    top: 18px;
  }
`;

const StyledWeAreOfficial = styled.p`
  align-self: stretch;
  color: #ffffff;
  font-family: "Onest", Helvetica;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: -0.24px;
  line-height: 27.6px;
  position: relative;

  @media (max-width: 600px) {
    font-size: 16px;

    line-height: 20.6px;
  }
`;

const StyledDiv26 = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  gap: 11px;
  position: relative;
  width: 535px;

  @media (max-width: 1020px) {
    /* flex-grow: 2; */
    width: 100%;
  }
`;

const StyledDiv27 = styled.div`
  align-items: center;
  background-color: #ffffff;
  border-radius: 20px;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  gap: 10px;
  height: 190px;
  justify-content: center;
  overflow: hidden;
  padding: 8px 8px 12px;
  position: relative;
  transition: all 0.3s;
  min-width: 180px;
  &:hover {
    transform: scale(1.03);
  }
  @media (max-width: 1020px) {
    /* width: 220px; */
    flex: 1;
    flex-grow: 1.3;
  }
  @media (max-width: 600px) {
    flex-grow: 2;
  }
`;

const StyledRectangle4 = styled.img`
  align-self: stretch;
  flex: 1;
  flex-grow: 1;
  object-fit: cover;
  position: relative;
  width: 100%;
  border-radius: 10px;
`;

const StyledView39 = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 4px;
  position: relative;
  width: 100%;
`;

const StyledElementToys = styled.div`
  align-self: stretch;
  color: #6d7d43;
  font-family: Comic Helvetic;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: -0.6px;
  line-height: 24px;
  margin-top: -1px;
  position: relative;
  text-align: center;
`;

const StyledTextWrapper33 = styled.p`
  align-self: stretch;
  color: #6d7d43;
  font-family: "Onest", Helvetica;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.13px;
  line-height: 14.9px;
  position: relative;
  text-align: center;
`;

const StyledViewWrapper2 = styled.div`
  align-items: center;
  border: 2px solid;
  border-color: #ffffff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 190px;
  justify-content: center;
  overflow: hidden;
  padding: 8px 8px 12px;
  position: relative;
  width: 130px;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.03);
  }
  @media (max-width: 1020px) {
    flex-grow: 1;
  }
  &:last-child {
    @media (max-width: 600px) {
      display: none;
    }
  }
`;

const StyledView40 = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 4px;
  position: relative;
  width: 100%;
`;

const StyledTextWrapper34 = styled.div`
  color: #ffffff;
  font-family: Comic Helvetic;
  font-size: 40px;
  font-weight: 400;
  letter-spacing: -1px;
  line-height: 40px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
`;

const StyledTextWrapper35 = styled.p`
  align-self: stretch;
  color: #ffffff;
  font-family: "Onest", Helvetica;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.13px;
  line-height: 14.9px;
  position: relative;
  text-align: center;
`;

const StyledView41 = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 74px;
  position: relative;
  width: 100%;

  @media (max-width: 600px) {
    padding-top: 7px;
  }
`;

const StyledImage8 = styled.img`
  /* clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 100px),
    calc(100% - 350px) calc(100% - 100px),
    calc(100% - 350px) 100%,
    0 100%
  ); */
  border-radius: 60px;
  width: 100%;
  object-fit: cover;
  height: 100%;
  position: relative;

  /* clip-path: polygon(0 0, 100% 0, 100% 69%, 62% 69%, 62% 100%, 0 100%); */
`;

const StyledComponent1012Wrapper = styled.a`
  align-items: center;
  display: flex;
  gap: 10px;
  height: 100px;
  justify-content: center;
  padding: 8px 8px 0px;
  position: absolute;
  top: 656px;
  right: 40px;
  width: 310px;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.02);
  }
  @media (max-width: 1120px) {
    display: none;
  }
`;

const BrandList = styled.div`
  flex-direction: column;
  left: -50%;
  z-index: 10;
  position: absolute;
  display: flex;
  border-radius: 16px;
  border: 1px solid rgba(35, 28, 30, 0.1);
  width: max-content;
  overflow: hidden;
  opacity: 0;
  max-width: 300px;
  top: 30px;
  left: -60px;

  /* background-color: #ffffff33; */
  background: #fff;

  backdrop-filter: blur(6px);
  transition: all 0.5s;
  /* &:hover {
    align-items: center;
    align-self: stretch;
    border-radius: 8px;
    display: flex;
    font-weight: 700;
  } */

  & a {
    padding: 15px 16px;
    border-bottom: 1px solid rgba(35, 28, 30, 0.2);
    color: #231c1e;

    font-family: Onest;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 115%; /* 18.4px */
    letter-spacing: -0.16px;

    transition: all 0.5s;
    &:hover {
      /* padding: 15px 14px 15px 13px; */
      align-items: center;
      align-self: stretch;
      background-color: rgba(35, 28, 30, 0.05);
      /* border-radius: 16px; */
      display: flex;
      /* font-weight: 700; */
    }
  }

  & a:last-child {
    border-bottom: none;
  }
`;
const StyledComponent1012 = styled(DivWrapper)`
  align-self: stretch !important;
  flex: 1 !important;
  flex-grow: 1 !important;
  height: unset !important;
  width: unset !important;
`;

const BannerCut = styled.div`
  position: relative;
  flex-grow: 1;
  height: 780px;
  border-radius: 64px;
  /* overflow: hidden; */
  @media (max-width: 1020px) {
    display: none;
  }
`;
var styles = {
  bmBurgerButton: {
    position: "absolute",
    fill: "#fff",
    width: "36px",
    right: "3px",
    top: "0px",
    height: "30px",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
    top: "0px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    top: 0,
  },
  bmMenu: {
    background: "#fff0",
    // padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0 0 0 0",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0)",
  },
};

const TopBar = styled.div`
  z-index: 2;
  display: flex;
  position: absolute;
  gap: 16px;
  right: 40px;

  text-align: center;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: 114.972%; /* 18.395px */
  letter-spacing: -0.16px;
  text-transform: uppercase;
  top: 42px;

  & > a {
    display: flex;
    gap: 8px;
    cursor: pointer;
    padding: 16px 16px 10px;
    transition: all 0.3s;

    border-radius: 8px;
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0.4) 100%
      ),
      rgba(0, 0, 0, 0.05);

    background-blend-mode: hard-light, normal;
    backdrop-filter: blur(12px);
  }

  & a:hover {
    transform: scale(1.07);
  }
`;
import arrow_down from "../../../../icons/arrow-down.svg";
import { Header } from "../../../../components/header";
import Slider from "react-slick";
import { Search } from "../../../../icons/Search";
import { Bag } from "../../../../icons/Bag";
export const NamecandidateNameViewScore10001 = () => {
  let [showBrands, useShowBrands] = React.useState(false);
  let { Cart, isBtb } = React.useContext(Context);
  const [Brands, setBrands] = useState([]);
  const [SampleItems, setSampleItems] = useState(null);
  const [BannerMain, setBannerMain] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  let bannerRef = useRef();

  let items_count = [{ cart_quntity: 0 }]
    .concat(Cart)
    .reduce((prev, next) => prev + next.cart_quntity, 0);

  useEffect(() => {
    axios
      .get(
        `${SERVER_URL}/api/banner-main?populate=image,small_banner,small_banner.image`
      )
      .then((response) => {
        let image = response.data.data.attributes;
        setBannerMain(image);
        // setBrands(response.data.data);
      })
      .catch((err) => {
        //console.log(err);
      });

    axios
      .get(`${SERVER_URL}/api/brands`)
      .then((response) => {
        setBrands(response.data.data);
      })
      .catch((err) => {
        //console.log(err);
      });
  }, []);
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    autoplay: true,
    slide: "a",
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1190,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    beforeChange: (_, current) => setActiveSlide(current),
  };
  return (
    <StyledNamecandidateNameViewScore10001>
      <StyledView32>
        <StyledView33>
          <StyledView34>
            <StyledImage7 alt="Image" src="/img/8-2x.png" />
            <StyledView35>
              <StyledTextWrapper27 href="/catalog">Catalog</StyledTextWrapper27>
              <StyledView36 onClick={() => useShowBrands(!showBrands)}>
                <StyledTextWrapper28>Brands</StyledTextWrapper28>
                {/* <StyledChevronDown
                  alt="Chevron down"
                  src="/img/chevron-down.svg"
                /> */}
                <img
                  src={arrow_down}
                  style={{
                    filter:
                      "invert(100%) sepia(0%) saturate(0%) hue-rotate(38deg) brightness(106%) contrast(108%)",
                    transform: showBrands ? "rotate(180deg)" : "",
                  }}
                />
                {true && (
                  <BrandList
                    id="child-main"
                    style={{
                      opacity: showBrands ? 1 : 0,
                      visibility: showBrands ? "visible" : "hidden",
                    }}
                  >
                    {Brands.map((b) => (
                      <a key={b.id} href={`/catalog/all?brand=${b.id}`}>
                        {b.attributes.name}
                      </a>
                    ))}
                  </BrandList>
                )}
              </StyledView36>
              <div style={{ flexGrow: 1 }} />
              <Menu
                styles={styles}
                customBurgerIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M3 12H21M3 6H21M9 18H21"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                }
                right
                width="100%"
                burgerButtonClassName={"burger"}
              >
                {/* <a id="home" className="menu-item" href="/">
                  Home
                </a>
                <a id="about" className="menu-item" href="/about">
                  About
                </a>
                <a id="contact" className="menu-item" href="/contact">
                  Contact
                </a> */}
                <Header />
              </Menu>
            </StyledView35>
          </StyledView34>
          <StyledView37>
            <StyledView38>
              <StyledTextWrapper29>Toys created with</StyledTextWrapper29>
              <StyledOverlapWrapper>
                <StyledOverlap>
                  <StyledOverlapGroup>
                    <StyledTextWrapper30>love</StyledTextWrapper30>
                    <StyledTextWrapper31>inspiration</StyledTextWrapper31>
                  </StyledOverlapGroup>
                  <StyledTextWrapper32>and</StyledTextWrapper32>
                </StyledOverlap>
              </StyledOverlapWrapper>
            </StyledView38>
            <StyledWeAreOfficial>
              We are official distributors of premium
              <br />
              brands of toys in the UAE
            </StyledWeAreOfficial>
          </StyledView37>
        </StyledView33>
        <StyledDiv26>
          <StyledDiv27>
            <StyledRectangle4 alt="Rectangle" src="/img/rectangle-20.png" />
            <StyledView39>
              <StyledElementToys>&gt;600 toys</StyledElementToys>
              <StyledTextWrapper33>
                and other products for children
              </StyledTextWrapper33>
            </StyledView39>
          </StyledDiv27>
          <StyledViewWrapper2>
            <StyledView40>
              <StyledTextWrapper34>100%</StyledTextWrapper34>
              <StyledTextWrapper35>
                warranty on toys and delivery
              </StyledTextWrapper35>
            </StyledView40>
          </StyledViewWrapper2>
          <StyledViewWrapper2>
            <StyledView41>
              <StyledTextWrapper34>5</StyledTextWrapper34>
              <StyledTextWrapper35>brands in stock</StyledTextWrapper35>
            </StyledView41>
          </StyledViewWrapper2>
        </StyledDiv26>
      </StyledView32>
      {/* <div class="box_parent"> */}
      <BannerCut>
        <TopBar>
          <a style={{ padding: "13px 16px" }} href="/search">
            <Search />
          </a>
          <a href="/cart" style={{ paddingTop: "11px" }}>
            <div
              style={{ fontSize: "20px", color: "#231C1E", paddingTop: "6px" }}
            >
              {items_count}
            </div>
            <Bag color="black" />
          </a>

          {isBtb ? (
            <a
              style={{ background: "white", color: "#000" }}
              onClick={() => {
                window.localStorage.removeItem("Btb");
                window.localStorage.removeItem("User");
                window.location.reload();
              }}
            >
              LOG Out
            </a>
          ) : (
            <>
              {/* <a style={{ background: "white", color: "#000" }} href="/login">
              </a> */}
              <a
                href="/become_partner"
                style={{ background: "#231C1E", color: "white" }}
              >
                B2b access
              </a>
            </>
          )}
        </TopBar>
        {BannerMain && (
          <StyledImage8
            alt="Image"
            src={
              SERVER_URL + BannerMain.image.data.attributes.formats.large.url
            }
          />
        )}
        <SmallSlider>
          {BannerMain != null && (
            <>
              <Slider
                className={"carousel-banner"}
                {...settings}
                ref={(c) => {
                  bannerRef = c;
                }}
              >
                {BannerMain.small_banner.map((b) => (
                  <a href={b.link}>
                    <img
                      srcSet={`${SERVER_URL}${b.image.data.attributes.formats.thumbnail.url}`}
                    />
                  </a>
                ))}
              </Slider>
              <Dots>
                <div>
                  {BannerMain.small_banner.map((_, i) => (
                    <p
                      className={activeSlide == i ? "selected" : "l"}
                      onClick={function () {
                        bannerRef.slickGoTo(i);
                      }}
                    />
                  ))}
                </div>
              </Dots>
            </>
          )}
        </SmallSlider>
      </BannerCut>
      <StyledComponent1012Wrapper href="/catalog">
        <StyledComponent1012 img="/img/9.svg" prop="one" />
      </StyledComponent1012Wrapper>
    </StyledNamecandidateNameViewScore10001>
  );
};

const SmallSlider = styled.div`
  position: absolute;
  width: calc(100% - 400px);
  bottom: 44px;
  left: 30px;
  & img {
    width: 60px;
    height: 60px;
    border-radius: 12px;
    border: 1px solid #ffffff66;
    box-shadow: 0px 4px 12px 0px #00000026;
    transition: all 0.5s;
  }
  & img:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
  @media (max-width: 1120px) {
    display: none;
  }
`;

const Dots = styled.div`
  left: 0;
  bottom: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: absolute;
  bottom: -93px;
  left: -300px;
  width: 600px;
  z-index: 100;

  @media (max-width: 1120px) {
    display: none;
  }
  & div {
    display: flex;
    gap: 24px;
  }
  & p {
    width: 8px;
    border-radius: 50%;
    height: 8px;
    background: #231c1e33;

    transition: all 0.5s;
    cursor: pointer;
  }

  & .selected {
    width: 62px;
    height: 8px;
    border-radius: 26px;
    background: #a2ac87;
  }
`;

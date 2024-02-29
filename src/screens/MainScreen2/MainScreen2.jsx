import React, { useContext, useRef } from "react";
import Flickity from "react-flickity-component";
import styled from "styled-components";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer/footer";
import { Shelf } from "../../components/Shelf/Shelf";
import image from "./item_pic.png";
import { PlusMinus } from "../../components/PlusMinus";
import sqare_image from "./sqare_image.jpeg";
import banner from "./banner.png";
import sale_img from "./new.jpeg";
import Helmet from "react-helmet";
import new_img from "./sale.jpeg";
import { Context, SERVER_URL } from "../../const";
import { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ArrowRightSolid } from "../../icons/arrowRightSolid";

const StyledScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  & .component-1046-instance {
    left: 50px !important;
    position: absolute !important;
    top: 232px !important;
  }
`;

const ArrowLeftIcon = styled.div`
  color: white;
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(38deg) brightness(106%)
    contrast(108%);
  width: 40px;
  height: 40px;
  background: no-repeat url("/img/icon/box-and-arrow.svg");
  @media (max-width: 600px) {
    display: none;
  }
`;

const ArrowRightIcon = styled.div`
  width: 40px;
  height: 40px;
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(38deg) brightness(106%)
    contrast(108%);
  transform: rotateZ(180deg);
  background: no-repeat url("/img/icon/box-and-arrow.svg");
  @media (max-width: 600px) {
    display: none;
  }
`;
const Div44 = styled.div`
  max-width: 1340px;
  min-width: 1340px;

  margin: auto;
  position: relative;
  @media (max-width: 1340px) {
    padding: 0 8px 0 8px;
    margin: 0 0 20px 0;
    width: 100%;
    min-width: 0;
  }
`;

const BigHeader = styled.div`
  margin: 40px 0 24px 0;
  color: #231c1e;

  font-family: Comic Helvetic;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 114.972%; /* 36.791px */
  letter-spacing: -0.32px;
`;

const CartItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 15fr 5fr 2fr 5fr 1fr;
  border-bottom: 1px solid rgba(35, 28, 30, 0.2);

  padding: 16px;
  gap: 32px;
  align-items: center;

  & div {
    text-align: center;
  }

  &:last-child {
    grid-template-columns: 1fr 15000000000000fr 5fr 2fr;
    border: none;
  }
`;

const GrayText = styled.div`
  color: rgba(35, 28, 30, 0.5);

  font-family: Onest;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 114.972%; /* 18.395px */
  letter-spacing: -0.16px;
`;
const DivSlider = styled.div`
  border-radius: 32px;
  background: #fff;
  padding: 20px 20px 0 20px;
`;

const Button = styled.button`
  background: none;
  border: 1px solid white;
  width: 70%;
  margin: 0;
  padding: 0;
  border-radius: 8px;
  backdrop-filter: blur(10px);
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
  }
  display: flex;
  /* width: 310px; */
  height: 50px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: right;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 114.972%;
  letter-spacing: -0.16px;
`;

const BoldText = styled.div`
  color: #231c1e;

  font-family: Onest;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 114.972%; /* 18.395px */
  letter-spacing: -0.16px;
  text-transform: uppercase;
`;

const VeryBald = styled.div`
  color: #6e7e44;

  text-align: center;
  font-family: Onest;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 24px */
  letter-spacing: -0.24px;
  text-transform: uppercase;
`;

const Section = styled.div`
  display: grid;
  width: 100%;
  padding: 40px;
  border-radius: 32px;
  background: #fff;

  gap: 20px;
  grid-template-columns: 2fr 1fr;
  margin-top: 20px;

  & div {
    color: #231c1e;
    margin-bottom: 8px;

    font-family: Onest;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 115%; /* 18.4px */
    letter-spacing: -0.16px;
  }

  & div > div {
    display: flex;
  }
`;

const FirstGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(200px, 1fr));
  gap: 20px;
  grid-auto-rows: 190px;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fill, 180px);
  }
  & > div {
    grid-column: span 2;
  }
`;

const ThirdGrid = styled.div`
  margin: 50px 0 60px 0;
  display: grid;
  grid-template-areas: "a a ." "a a .";
  grid-template-columns: 1fr 1fr 1fr;
  aspect-ratio: 3/2;
  /* grid-template-rows: repeat(auto-fill, 400px); */
  /* grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); */
  gap: 20px;
  @media (max-width: 1020px) {
    grid-template-areas: "a" "." " .";
    grid-template-columns: 1fr;
    grid-template-rows: 300px 300px 300px;
  }
`;

const GridButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: none;
  border-radius: 8px;
  border: 2px solid #fff;
  font-size: 24px;
  width: 200px;
  height: 56px;

  padding: 12px 16px 12px 20px;
  @media (max-width: 1000px) {
    font-size: 16px;
    border-radius: 6px;
    border: 0.816px solid #fff;
    gap: 6px;
    padding: 6px 6px 6px 8px;
    width: 140px;
    height: 40px;
  }

  @media (max-width: 450px) {
    font-size: 12px;
    border-radius: 4px;
    border: 0.816px solid #fff;
    gap: 6px;
    padding: 6px 6px 6px 8px;
    width: 95px;
    height: 26px;
    font-size: 10px;
  }

  & svg {
    height: 26px;
    width: 36px;

    @media (max-width: 450px) {
      width: 14px !important;
      height: 14px !important;
    }
    @media (max-width: 600px) {
      width: 20px;
      height: 20px;
    }
  }

  text-align: center;
  font-family: Manrope;
  font-style: normal;
  font-weight: 800;
  line-height: 114.972%; /* 13.797px */
  letter-spacing: -0.12px;
  text-transform: uppercase;
  transition: all 0.5s;
  &:hover {
    transform: scale(1.03);
  }
`;

const SecondGrid = styled.div`
  display: grid;
  grid-template-areas: "a a b b" ". . . .";
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 200px 200px 200px;
  /* grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); */
  gap: 20px;
  @media (max-width: 600px) {
    grid-template-areas: "a a" "b b" ". ." ". ." ". ." ". ." ". .";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, 150px) !important;
  }

  @media (max-width: 1200px) {
    grid-template-rows: 200px;
  }
  & .small-item-grid {
    @media (max-width: 1020px) {
      flex-direction: column-reverse;
    }
  }
  & .small-item-grid > div > div:first-child {
    @media (max-width: 1020px) {
      margin: 0;
    }
  }

  & .small-item-grid img {
    width: 90%;
  }
`;
const BrightGridCell = styled.a`
  display: flex;
  grid-area: a;
  background: #fd8558;
  border-radius: 16px;
  gap: 24px;
  align-items: center;
  color: #fff;
  overflow: hidden;
  transition: transform 0.3s;

  font-family: Onest;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 114.972%; /* 18.395px */
  letter-spacing: -0.16px;

  @media (max-width: 600px) {
    overflow: hidden;
    font-size: 12px;
  }

  & .arrow {
    margin-left: 12px;
    @media (max-width: 600px) {
      margin-left: 4px;
    }
  }

  & img {
    border-radius: 0 16px 16px 0;
    margin-left: auto;
    object-fit: cover;
    max-width: 600px;
    height: 100%;
    width: 100%;
    display: block;
    background-position: 50% 50%;
    transition: all 0.5s;
  }

  &:hover img {
    /* width: 70%; */
    padding-left: 10%;
  }

  &:hover {
    /* gap: 40px; */
  }
`;
const WhiteItem = styled.a`
  justify-content: space-between;

  display: flex;
  gap: 10px;
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
  padding-left: 10px;
  width: 100%;

  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 900px) {
    /* width: inherit;
    height: initial; */
  }

  & div {
    margin-bottom: 8px;

    color: #231c1e;

    font-family: Onest;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 114.972%; /* 18.395px */
    letter-spacing: -0.16px;
  }

  & > div > div:first-child {
    margin: 43px 0 24px 0;
  }

  & img {
    /* width: fit-content; */
    aspect-ratio: 1/1;
    height: 100%;
  }

  &.small-item-grid img {
    width: 174px;
    height: 174px;
    @media (max-width: 1200px) {
      width: 120px;
      height: 120px;
    }
  }

  &.small-item-grid {
    align-items: center;
    padding: 16px 3px 16px 24px;

    @media (max-width: 1020px) {
      padding: 12px;
    }
  }
  &.small-item-grid > div > div:first-child {
    margin-top: 0;
  }
`;

const CaruselContainer = styled.div`
  position: relative;
  margin-top: 20px;
  aspect-ratio: 4/1;

  @media (max-width: 1020px) {
    aspect-ratio: 12/5;
  }

  @media (max-width: 500px) {
    aspect-ratio: 3/2;
  }

  & > div {
    position: absolute;
  }

  & > div:first-child {
    top: calc(50% - 10px);
    z-index: 1;
    left: 1%;
  }
  & > div:last-child {
    top: calc(50% - 10px);
    z-index: 1;
    right: 1%;
  }

  & .carousel-banner {
    width: 100%;
    height: 100%;
    /* overflow: hidden; */
    outline: none;
  }

  & .carusel-item-banner {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: left;

    border-radius: 32px;
    overflow: hidden;
    aspect-ratio: 4/1;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0) 44.37%
      ),
      linear-gradient(
        0deg,
        rgba(35, 28, 30, 0.1) 0%,
        rgba(35, 28, 30, 0.1) 100%
      );
    @media (max-width: 500px) {
      aspect-ratio: 3/2 !important;
      border-radius: 16px !important;
    }
    @media (max-width: 1020px) {
      aspect-ratio: 12/5;
      border-radius: 20px;
    }
  }

  & .carusel-item-banner div {
    padding-top: 1%;
    z-index: 1;
    padding-left: 7%;

    color: #fff;

    font-family: Comic Helvetic;
    font-size: 20px;
    font-style: normal;
    font-weight: 900;
    line-height: 100%; /* 40px */
    letter-spacing: -1px;
    z-index: 2;
    @media (max-width: 500px) {
      /* font-size: 15px; */
      padding-top: 16px !important;
      font-size: 16px !important;
    }
    @media (max-width: 1020px) {
      font-size: 18px;
    }
  }

  & .carusel-item-banner .title {
    font-size: 40px;
    padding-top: 2%;
    z-index: 2;
    @media (max-width: 500px) {
      /* font-size: 20px; */
      padding-top: 16px;
      font-size: 24px;
      font-weight: 900;
    }
    @media (max-width: 1020px) {
      font-size: 30px;
    }
  }

  & .carusel-item-banner img {
    outline: none;
    position: absolute;
    z-index: -1;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const flickityOptions = {
  wrapAround: true,
  cellSelector: ".carusel-item-banner",
  initialIndex: 0,
  pageDots: false,
  prevNextButtons: false,
  draggable: true,
  autoPlay: true,
  autoPlay: 3000,
};

const Grid = styled.div`
  display: grid;
  grid-template-areas: "a a b" "a a .";
  gap: 15px;
  /* aspect-ratio: 1/1; */
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin: 40px 0 20px;
  @media (max-width: 1340px) {
    /* margin: 0 15px; */
  }
  @media (max-width: 800px) {
    grid-template-areas: "c c" "a a" "a a" "b .";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: none;
  }
`;

const LitItem = styled.div`
  background-size: cover;
  border-radius: 20px;
  padding: 20px;
  gap: 32px;
  background-clip: content-box;
  background-position: 50% 50%;
  aspect-ratio: 1/1;
  display: flex;
  flex-direction: column-reverse;
  overflow: hidden;

  @media (max-width: 1000px) {
    padding-right: 20px;
    font-size: 24px;
    gap: 12px;
  }

  @media (max-width: 800px) {
    aspect-ratio: 1/1;
  }
  @media (max-width: 600px) {
    border-radius: 10px;
    padding: 8px;
    gap: 12px;
    font-size: 20px;
  }
  @media (max-width: 450px) {
    font-size: 14px;
  }
  &:nth-child(1) {
    @media (max-width: 800px) {
      aspect-ratio: 3/2;
    }
  }
  &:nth-last-child(5) {
    display: none;
    @media (max-width: 800px) {
      display: flex;
    }
  }
  &:last-child {
    display: none;
    @media (max-width: 800px) {
    }
  }

  & > a {
  }
  color: #fff;

  font-family: Comic Helvetic;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 115%; /* 36.8px */
  letter-spacing: -0.32px;
`;

function onlyUnique(value, index, array) {
  return array.indexOf(value) === index;
}

export const MainScreen2 = () => {
  let bannerRef = useRef();
  const [banner_1, setBanner_1] = useState([]);
  const [StaticImg, setStaticImg] = useState(null);
  const [categories, setCategories] = useState([]);
  const [UniqCategoris, setUniqCategoris] = useState([]);
  const [GridCategory, setGridCategory] = useState([]);
  const { isBtb, setCart, Cart } = useContext(Context);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    axios
      .get(
        `${SERVER_URL}/api/grid-category?populate=image_1.image,image_2.image,image_3.image,image_4.image`
      )
      .then((response) => {
        let image = response.data.data.attributes;
        //console.log(image);
        setGridCategory([
          image.image_1,
          image.image_2,
          image.image_3,
          image.image_4,
        ]);
      })
      .catch((err) => {
        //console.log(err);
      });

    axios
      .get(`${SERVER_URL}/api/category-satatic-img?populate=New,Sale`)
      .then((response) => {
        setStaticImg(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(
        `${SERVER_URL}/api/banner-category-1?populate[0]=banners&populate[1]=banners.image`
      )
      .then((response) => {
        setBanner_1(response.data.data.attributes.banners);
      })
      .catch((err) => {
        //console.log(err);
      });
    axios
      .get(
        `${SERVER_URL}/api/categories?populate=image,items&pagination[pageSize]=8&random=true`
      )
      .then((response) => {
        if (categories.length == 0) {
          setCategories(response.data.data);
        }
      })
      .catch((err) => {
        //console.log(err);
      });

    // let filter = "";
    // for (let i = 0; i < uniqCategory.length; i++) {
    //   const element = uniqCategory[i];
    //   filter += `&filters[id][$in][${i}]=${element}`;
    // }
    axios
      .get(`${SERVER_URL}/api/brands?populate=item_example,categories,items`)
      .then((response) => {
        // setCategories(response.data.data);
        setUniqCategoris(response.data.data);
      })
      .catch((err) => {
        //console.log(err);
      });
  }, []);

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
    autoplay: true,
    beforeChange: (_, current) => setActiveSlide(current),
  };
  return (
    <StyledScreen>
      <Helmet>
        <title>Toy boutique</title>
        <meta name="description" content="Best premium toys from " />
      </Helmet>
      <Header />
      <Div44>
        <CaruselContainer>
          {banner_1.length != 0 ? (
            <>
              <ArrowLeftIcon onClick={() => bannerRef.slickPrev()} />
              <Slider
                className={"carousel-banner"}
                {...settings}
                ref={(c) => {
                  bannerRef = c;
                }}
              >
                {banner_1.map((b) => (
                  <a className="carusel-item-banner" key={b.id} href={b.link}>
                    <div className="title">{b.headline}</div>
                    <div style={{ fontFamily: "Onest" }}>{b.description}</div>
                    <img
                      src={`${SERVER_URL}${b.image.data.attributes.formats.xlarge.url}`}
                    />
                  </a>
                ))}
              </Slider>
              <Dots>
                <div>
                  {banner_1.map((_, i) => (
                    <p
                      className={activeSlide == i ? "selected" : "l"}
                      onClick={function () {
                        bannerRef.slickGoTo(i);
                      }}
                    />
                  ))}
                </div>
              </Dots>
              <ArrowRightIcon
                onClick={() => {
                  console.log(bannerRef);
                  bannerRef.slickNext();
                }}
              />
            </>
          ) : (
            <Skeleton height="100%" style={{ borderRadius: "16px" }} />
          )}
        </CaruselContainer>
        <BigHeader>Catalog</BigHeader>
        <FirstGrid>
          {UniqCategoris.filter((x) => x.attributes.coming_soon != true).map(
            (c) => (
              <WhiteItem href={`/catalog/all?brand=${c.id}`} key={c.id}>
                <div>
                  <div style={{ fontSize: "1.2rem" }}>{c.attributes.name}</div>
                  {/* <div>{c.attributes.categories.data.length} Categories</div> */}
                  <br />
                  <div style={{ color: "rgba(35, 28, 30, 0.50)" }}>
                    {c.attributes.items.data.length} products
                  </div>
                </div>
                <img
                  src={`${SERVER_URL}${c.attributes.item_example.data.attributes.formats.small.url}`}
                />
              </WhiteItem>
            )
          )}
          {UniqCategoris.length == 0 && (
            <>
              <Skeleton height="100%" style={{ borderRadius: "16px" }} />
              <Skeleton height="100%" style={{ borderRadius: "16px" }} />
              <Skeleton height="100%" style={{ borderRadius: "16px" }} />
            </>
          )}
        </FirstGrid>
        <BigHeader>Categories</BigHeader>
        <SecondGrid>
          <BrightGridCell href="/catalog/all?new=true">
            <div style={{ paddingLeft: "32px", minWidth: "200px" }}>
              <div
                style={{
                  fontFamily: "Comic Helvetic",
                  fontSize: "1.7rem",
                  marginBottom: "24px",
                }}
              >
                New <ArrowRightSolid className="arrow" />
              </div>
              <div style={{ textWrap: "nowrap" }}>
                New arrivals <br />
                and new products!
              </div>
            </div>
            {StaticImg != null && (
              <img
                src={`${SERVER_URL}${StaticImg.attributes.New.data.attributes.formats.small.url}`}
              />
            )}
          </BrightGridCell>
          <BrightGridCell
            style={{ gridArea: "b", backgroundColor: "#FF8DB6" }}
            href="/catalog/all?sale=true"
          >
            <div style={{ paddingLeft: "32px", minWidth: "200px" }}>
              <div
                style={{
                  fontFamily: "Comic Helvetic",
                  fontSize: "1.7rem",
                  marginBottom: "24px",
                }}
              >
                Sale <ArrowRightSolid className="arrow" />
              </div>
              <div style={{ textWrap: "nowrap" }}>
                Good discounts <br /> for buying gifts!
              </div>
            </div>
            {StaticImg != null && (
              <img
                src={`${SERVER_URL}${StaticImg.attributes.Sale.data.attributes.formats.small.url}`}
              />
            )}
          </BrightGridCell>
          {categories.map((c) => (
            <WhiteItem
              className="small-item-grid"
              href={`/catalog/all?category=${c.id}`}
              key={c.id}
            >
              <div>
                <div style={{ fontSize: "1.2rem" }}>{c.attributes.name}</div>
                <div
                  style={{ color: "rgba(35, 28, 30, 0.50)", fontSize: "14px" }}
                >
                  {c.attributes.items.data.length} products
                </div>
              </div>
              <img
                width="174px"
                height="174px"
                src={`${SERVER_URL}${c.attributes.image.data.attributes.url}`}
              />
            </WhiteItem>
          ))}

          {categories.length == 0 && (
            <>
              <Skeleton height="100%" style={{ borderRadius: "16px" }} />
              <Skeleton height="100%" style={{ borderRadius: "16px" }} />
              <Skeleton height="100%" style={{ borderRadius: "16px" }} />
              <Skeleton height="100%" style={{ borderRadius: "16px" }} />
              <Skeleton height="100%" style={{ borderRadius: "16px" }} />
              <Skeleton height="100%" style={{ borderRadius: "16px" }} />
              <Skeleton height="100%" style={{ borderRadius: "16px" }} />
              <Skeleton height="100%" style={{ borderRadius: "16px" }} />
            </>
          )}
        </SecondGrid>
        {GridCategory.length == 4 && (
          <Grid>
            <LitItem
              style={{
                background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 85.25%, rgba(0, 0, 0, 0.20) 100%),
                 url(
                  ${
                    SERVER_URL +
                    GridCategory[3].image.data.attributes.formats.medium.url
                  }
                 ) center center/cover no-repeat`,
                gridArea: "c",
              }}
            >
              <GridButton href={GridCategory[3].link}>
                SEE MORE{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M2.91663 7.00008H11.0833M11.0833 7.00008L6.99996 2.91675M11.0833 7.00008L6.99996 11.0834"
                    stroke="white"
                    stroke-width="1.22333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </GridButton>
              <div>{GridCategory[3].text}</div>
            </LitItem>
            <LitItem
              style={{
                background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 15.25%, rgba(0, 0, 0, 0.20) 100%),
                 url(
                  ${
                    SERVER_URL +
                    GridCategory[0].image.data.attributes.formats.medium.url
                  }
                  )
                  center center/cover no-repeat`,
                gridArea: "a",
              }}
            >
              <GridButton href={GridCategory[0].link}>
                SEE MORE{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M2.91663 7.00008H11.0833M11.0833 7.00008L6.99996 2.91675M11.0833 7.00008L6.99996 11.0834"
                    stroke="white"
                    stroke-width="1.22333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </GridButton>
              <div>{GridCategory[0].text}</div>
            </LitItem>
            <LitItem
              style={{
                background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 85.25%, rgba(0, 0, 0, 0.20) 100%),
                 url(

                  ${
                    SERVER_URL +
                    GridCategory[1].image.data.attributes.formats.medium.url
                  }
                 ) center center/cover no-repeat`,
                gridArea: "b",
              }}
            >
              <GridButton href={GridCategory[1].link}>
                SEE MORE{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M2.91663 7.00008H11.0833M11.0833 7.00008L6.99996 2.91675M11.0833 7.00008L6.99996 11.0834"
                    stroke="white"
                    stroke-width="1.22333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </GridButton>
              <div>{GridCategory[1].text}</div>
            </LitItem>
            <LitItem
              style={{
                background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 85.25%, rgba(0, 0, 0, 0.20) 100%),
                 url(
                  ${
                    SERVER_URL +
                    GridCategory[2].image.data.attributes.formats.medium.url
                  }
                 ) center center/cover no-repeat`,
              }}
            >
              <GridButton href={GridCategory[2].link}>
                SEE MORE{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M2.91663 7.00008H11.0833M11.0833 7.00008L6.99996 2.91675M11.0833 7.00008L6.99996 11.0834"
                    stroke="white"
                    stroke-width="1.22333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </GridButton>
              <div>{GridCategory[2].text}</div>
            </LitItem>
            <LitItem
              style={{
                background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 85.25%, rgba(0, 0, 0, 0.20) 100%),
                 url(
                  ${
                    SERVER_URL +
                    GridCategory[3].image.data.attributes.formats.medium.url
                  }
                 ) center center/cover no-repeat`,
              }}
            >
              <GridButton href={GridCategory[3].link}>
                SEE MORE{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M2.91663 7.00008H11.0833M11.0833 7.00008L6.99996 2.91675M11.0833 7.00008L6.99996 11.0834"
                    stroke="white"
                    stroke-width="1.22333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </GridButton>
              <div>{GridCategory[3].text}</div>
            </LitItem>
          </Grid>
        )}

        <Shelf />
      </Div44>
      <Footer />
    </StyledScreen>
  );
};

const Dots = styled.div`
  left: 0;
  bottom: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  & div {
    display: flex;
    gap: 24px;
  }
  & p {
    width: 8px;
    border-radius: 50%;
    height: 8px;
    background: #ffffff99;
    transition: all 0.5s;
    cursor: pointer;
  }

  & .selected {
    width: 62px;
    height: 8px;
    border-radius: 26px;
    background: #ffffff;
  }
`;

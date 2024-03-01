import brand from "../ShelfBrands/2021-logo-dc-et-ho-72-05-1.png";
import React, { useRef } from "react";
import styled from "styled-components";
import { SmallItemCard } from "../../../../components/Element";
import { SERVER_URL } from "../../../../const";
import { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import { Shelf } from "../../../../components/Shelf/Shelf";

export function Brands(brand) {
  const [items, setItems] = useState([]);
  let ref = useRef();
  useEffect(() => {
    axios
      .get(
        `${SERVER_URL}/api/items?populate=*,categories.image,brand,image,main_image&filters[brand][id][$eq]=${brand.id}`
      )
      .then((response) => {
        setItems(response.data.data);
      })
      .catch((err) => {
        //console.log(err);
      });
  }, []);
  // let gridTemplate = ' "a a b" ". . b" ". . b" ". . b"';
  // let ids = brand.attributes.categories.data.map((i) => i.id);
  // let hash = {};

  // if (brand.attributes.categories.data.length == 1) {
  //   hash[ids[0]] = "c";
  //   gridTemplate = ` "a a b" "c c b" "c c b" ". . b"`;
  // }
  // if (brand.attributes.categories.data.length == 2) {
  //   hash[ids[0]] = "c";
  //   hash[ids[1]] = "d";
  //   gridTemplate = ` "a a b" "c d b" "c d b" ". . b"`;
  // }
  // if (brand.attributes.categories.data.length == 3) {
  //   hash[ids[0]] = "c";
  //   hash[ids[2]] = "e";
  //   hash[ids[1]] = "d";
  //   gridTemplate = ` "a a b" "c d b" "e e b" ". . b"`;
  // }
  var settings = {
    dots: false,
    infinite: true,
    // centerMode: true,
    // centerPadding: "50%",
    slidesToShow: 1,
    speed: 500,
    pauseOnHover: true,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    vertical: true,
    verticalSwiping: true,
  };
  return (
    <Container
      style={
        {
          // gridTemplateAreas: gridTemplate,
        }
      }
    >
      <div className="top-text">
        <img
          src={`${SERVER_URL}${brand.attributes.logo.data.attributes.formats.small.url}`}
        />
        <div>
          <div style={{ whiteSpace: "pre-wrap" }}>
            {brand.attributes.description_short}
          </div>
          <br />
          {brand.attributes.description_long != null && (
            <div style={{ whiteSpace: "pre-wrap" }}>
              {brand.attributes.description_long}
            </div>
          )}
        </div>
      </div>
      {brand.attributes.banner.map((i) => (
        <Categry
          key={i.id}
          href={i.link}
          className={"class" + brand.attributes.banner.length.toString()}
          style={{
            // gridArea: hash[i.id],
            background: `
            linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), 



            url(${
              SERVER_URL + i.image.data.attributes.formats.small.url
            }) center center/cover no-repeat`,
          }}
        >
          <p>{i.text}</p>
        </Categry>
      ))}
      {/* <div style={{ fontSize: "24px", color: "#6E7E44" }}>SEE MORE</div> */}
      <VerticalSliderContainer className="testing">
        <div style={{ fontSize: "24px", color: "#A2AC87" }}>BEST PRODUCT:</div>
        <Shelf className="shelf" text="" brand={brand.id} />
        <Slider
          className={"slider"}
          {...settings}
          ref={(c) => {
            bannerRef = c;
          }}
        >
          {items.map((i) => (
            <div className="insideShelfBrandsVertical" key={i.id}>
              <SmallItemCard {...i} />
            </div>
          ))}
        </Slider>
      </VerticalSliderContainer>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-areas: "a a b" ". . b" ". . b" ". . b";
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto 200px 200px auto;
  padding: 40px 0 20px 0;
  border-bottom: 1px solid rgba(162, 172, 135, 0.5);
  gap: 20px;
  @media (max-width: 1340px) {
    /* margin: 0 15px; */
  }

  @media (max-width: 1000px) {
    grid-template-areas: "a a" "a a" ". ." ". ." "b b" !important;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    grid-template-rows: auto auto 220px 220px;
  }

  color: #fff;

  font-family: Comic Helvetic;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 115%; /* 27.6px */
  letter-spacing: -0.24px;

  &:nth-child(even) {
    grid-template-areas: "b a a" "b . ." "b . ." "b . .";
  }

  &:nth-child(odd) .testing {
    /* margin-left: 40px; */

    justify-self: end;
  }
  &:nth-child(even) .top-text {
    flex-direction: row-reverse;
  }

  & .top-text {
    grid-area: a;
    display: flex;
    gap: 30px;
    margin-bottom: 60px;
    color: #2d2326;

    @media (max-width: 1000px) {
      flex-direction: column !important;
      align-items: center;
      text-align: center;
      font-size: 20px;

      margin-bottom: 10px;
      gap: 8px;
    }

    @media (max-width: 600px) {
      font-size: 16px;

      margin-bottom: 20px;
      gap: 16px;
    }
    font-family: Onest;
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: 114.972%; /* 27.593px */
    letter-spacing: -0.24px;

    & img {
      height: 160px;
      width: 160px;
      border-radius: 20px;

      @media (max-width: 1000px) {
        border-radius: 15px;
        width: 120px;
        height: 120px;
        margin-bottom: 4px;
      }
    }
  }
`;
const Flickity = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  height: 623px;
  overflow: auto;
  justify-self: end;
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  & > div {
    margin-top: 40px;
  }
`;

const Categry = styled.a`
  color: white;
  border-radius: 32px;
  text-align: center;
  justify-content: center;
  display: flex;
  align-items: center;
  object-fit: fill;
  transition: all 500ms;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 1000px) {
    border-radius: 12px;
  }

  &.class3:nth-child(4) {
    grid-column: span 2;
  }

  &.class2:nth-child(3) {
    grid-row: span 2;
  }
  &.class2:nth-child(2) {
    grid-row: span 2;
  }
`;

const VerticalSliderContainer = styled.div`
  grid-area: b;
  justify-self: center;
  width: 333px;
  justify-self: baseline;

  @media (max-width: 1000px) {
    margin-top: 22px;
    width: 100%;
  }

  & > .shelf {
    display: none;
    width: 100%;
    @media (max-width: 1000px) {
      display: flex;
    }
  }
  & > .slider {
    margin: 0 -20px;
    @media (max-width: 1000px) {
      display: none;
    }
  }

  & .slider {
    /* width: 100%; */
    overflow: hidden;
    outline: none;
    height: fill;
  }

  & .insideShelfBrandsVertical {
    // margin-left: 42px;
    /* width: 30%; */
    outline: none;
    padding: 30px 10px 30px 10px;
    /* width: 350px; */
    /* display: flex;
    justify-content: center; */
    /* margin-top: 5px; */
    /* transform: translateY(200px); */
  }

  & > div:first-child {
    @media (max-width: 600px) {
      padding-left: 16px;
    }
  }
`;

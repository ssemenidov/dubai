import PropTypes from "prop-types";
import React, { useContext, useRef } from "react";
import { useReducer } from "react";
import styled from "styled-components";
import { One } from "../../icons/One";
import { Component1013 } from "../Component1013";
import { ElementWrapper } from "../ElementWrapper/ElementWrapper";
import ItemImage from "./item_pic.png";
import { SmallItemCard } from "../Element";
import Flickity from "react-flickity-component";
import axios from "axios";
import { useState, useEffect } from "react";
import { Context, SERVER_URL } from "../../const";
import Slider from "react-slick";
import { SmallItemCardSkeleton } from "../Element/Element";
// import "flickity";

const flickityOptions = {
  wrapAround: true,
  cellAlign: "left",
  cellSelector: ".insideShelf",
  initialIndex: 0,
  speed: 100,
  pageDots: false,
  prevNextButtons: false,
};

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export function Shelf({
  text = "You May Also Like",
  className,
  style,
  history,
  brand,
  neww,
}) {
  let ref = useRef(null);
  const { Visited } = useContext(Context);
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${SERVER_URL}/api/items?populate=brand,image,main_image,*,categories.image?random=true&${
          brand != null ? `filters[brand][id][$eq]=${brand}` : ""
        }&${neww != null ? "filters[New]=true" : ""}`
      )
      .then((response) => {
        if (history == true) {
          //console.log(response.data.data);
          setItems([...Visited, ...shuffle(response.data.data)]);
        } else {
          setItems(shuffle(response.data.data));
        }
      })
      .catch((err) => {
        //console.log(err);
      });
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  //console.log(items);
  return (
    <Container className={className} style={style}>
      {text != "" && <TopName>{text}</TopName>}
      <Flex>
        <ArrowLeftIcon onClick={() => ref.slickPrev()} />
        {/* <Flickity
          className={"carousel-shelf"}
          options={flickityOptions}
          reloadOnUpdate
          static // default false
          flickityRef={(c) => (ref = c)}
        > */}
        <SlickWrapper>
          <Slider
            {...settings}
            className="carousel-shelf"
            ref={(c) => (ref = c)}
          >
            {items.map((x) => (
              <div className="insideShelf">
                <SmallItemCard {...x} style={{ margin: "auto" }} />
              </div>
            ))}
            {items.length == 0 &&
              [0, 0, 0, 0, 0].map(() => (
                <div className="insideShelf">
                  <SmallItemCardSkeleton />
                </div>
              ))}
          </Slider>
        </SlickWrapper>
        <ArrowRightIcon onClick={() => ref.slickNext()} />
      </Flex>
      <style jsx="true">
        {`
          .carousel-shelf {
            width: 100%;
            // padding: 5px 0;
            // overflow: hidden;
          }

          .insideShelf {
            padding: 10px 8px 30px;
            // width: 30%;
            outline: none;
            @media (max-width: 991px) {
              // width: 45%;
            }
            @media (max-width: 600px) {
              // width: 100%;
            }
          }
        `}
      </style>
    </Container>
  );
}

const SlickWrapper = styled.div`
  width: calc(100% + 30px); //we need more width for the shadows on the edges
  @media (max-width: 600px) {
    width: 100%;
  }
  /* padding: 0 5px; //space for the shadows */
  margin-left: -5px; //put the div in its original position
  overflow: hidden; //hide the overflow
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 40px 20px;
  @media (max-width: 600px) {
    padding: 0;
  }

  & .insideShelf {
    @media (max-width: 600px) {
      padding: 10px;
    }
  }

  & .slick-list {
    /* padding: 10px; */
    overflow: visible;
  }

  & .slick-track {
    /* margin: 0 10px; */
  }

  & .slick-slide:not(.slick-active) {
    /* padding: 0 0px; */
    /* margin: 0 20px; */
  }
`;

const Flex = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr 40px;
  gap: 40px;
  align-items: center;
  @media (max-width: 600px) {
    gap: 20px;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ArrowLeftIcon = styled.div`
  width: 40px;
  height: 40px;
  background: no-repeat url("/img/icon/box-and-arrow.svg");
  cursor: pointer;
  opacity: 20%;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

const ArrowRightIcon = styled.div`
  width: 40px;
  height: 40px;
  opacity: 20%;
  transform: rotateZ(180deg);
  background: no-repeat url("/img/icon/box-and-arrow.svg");
  cursor: pointer;

  &:hover {
    transform: rotateZ(180deg) scale(1.1);
  }

  @media (max-width: 600px) {
    display: none;
  }
  transition: all 0.2s;
`;
const TopName = styled.div`
  margin: 0 auto 40px auto;
  color: #231c1e;

  font-family: Comic Helvetic;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 114.972%; /* 36.791px */
  letter-spacing: -0.32px;

  @media (max-width: 450px) {
    margin: 0 auto 20px auto;
    font-size: 24px;
  }
`;

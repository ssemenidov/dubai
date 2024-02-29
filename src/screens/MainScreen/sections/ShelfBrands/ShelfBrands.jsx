import Flickity from "react-flickity-component";
import brand from "./2021-logo-dc-et-ho-72-05-1.png";
import { useState, useEffect } from "react";
import axios from "axios";
import { SERVER_URL } from "../../../../const";

import Slider from "react-slick";
import styled from "styled-components";

const flickityOptions = {
  wrapAround: true,
  cellAlign: "left",
  cellSelector: ".insideShelfBrands",
  initialIndex: 0,
  pageDots: false,
  prevNextButtons: false,
  autoPlay: true,
};
var settings = {
  dots: false,
  infinite: true,
  // centerMode: true,
  // centerPadding: "50%",
  slide: "a",
  slidesToShow: 3,
  speed: 500,
  pauseOnHover: true,
  slidesToScroll: 1,
  swipeToSlide: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 750,
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
export function ShelfBrands() {
  const [Brands, setBrands] = useState([]);
  useEffect(() => {
    axios
      .get(`${SERVER_URL}/api/brands?populate=logo`)
      .then((response) => {
        //console.log(response);
        setBrands(response.data.data);
      })
      .catch((err) => {
        //console.log(err);
      });
  }, []);
  return (
    <Container>
      <Slider className={"carousel-brands"} {...settings}>
        {Brands.concat(Brands)
          .concat(Brands)
          .map((b) => (
            <InsideShelf href={`/catalog/all?brand=${b.id}`}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={`${SERVER_URL}${b.attributes.logo.data.attributes.formats.small.url}`}
              />
            </InsideShelf>
          ))}
      </Slider>

      <BrandsMobile>
        {Brands.map((b) => (
          <InsideShelf href={`/catalog/all?brand=${b.id}`}>
            <img
              style={{ width: "100%", height: "100%" }}
              src={`${SERVER_URL}${b.attributes.logo.data.attributes.formats.small.url}`}
            />
          </InsideShelf>
        ))}
      </BrandsMobile>
      <style jsx="true">{``}</style>
    </Container>
  );
}

const Container = styled.div`
  & .carousel-brands {
    outline: none;
    // overflow: hidden;
    margin: 85px 18%;
    @media (max-width: 820px) {
      margin: 35px 10%;
    }
    @media (max-width: 600px) {
      display: none;
    }
  }

  & .insideShelfBrands {
  }
`;
const BrandsMobile = styled.div`
  display: none;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  margin: 40px 0;
  & a {
    height: 180px;
    width: 180px;
    border-radius: 24px;
  }
  @media (max-width: 600px) {
    display: flex;
  }
`;

const InsideShelf = styled.a`
  padding: 0 27px;

  & img {
    aspect-ratio: 1/1;
    border-radius: 32px;
    @media (max-width: 600px) {
      border-radius: 16px;
    }
  }

  @media (max-width: 600px) {
    border-radius: 16px;
    padding: 0px;
  }
`;

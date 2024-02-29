import React from "react";
import styled from "styled-components";
import { Component1017Wrapper } from "./sections/Component1017Wrapper/Component1017Wrapper";
import { NamecandidateNameViewScore10001 } from "./sections/NamecandidateNameViewScore10001";
import { NamecandidateNameViewScore10002 } from "./sections/NamecandidateNameViewScore10002";
import { NamecandidateNameViewScore10003 } from "./sections/NamecandidateNameViewScore10003";
import { NamecandidateNameViewScore10004 } from "./sections/NamecandidateNameViewScore10004";
import { NamecandidateNameViewScore10005 } from "./sections/NamecandidateNameViewScore10005";
import { NamecandidateNameViewScore10006 } from "./sections/NamecandidateNameViewScore10006";
import { NamecandidateNameViewScore10007 } from "./sections/NamecandidateNameViewScore10007";
import { NamecandidateNameViewScore10008 } from "./sections/NamecandidateNameViewScore10008";
import { NamecandidateNameViewScore10009 } from "./sections/NamecandidateNameViewScore10009";
import { Footer } from "../../components/footer/footer";
import { Shelf } from "../../components/Shelf/Shelf";
import { ShelfBrands } from "./sections/ShelfBrands/ShelfBrands";
import sqare_image from "../MainScreen2/sqare_image.jpeg";
import { Brands } from "./sections/Brand/Brand";
import Helmet from "react-helmet";

import { useState, useEffect } from "react";
import axios from "axios";
import { Context, SERVER_URL } from "../../const";

const StyledScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-color: #fff;
`;

const Div44 = styled.div`
  max-width: 1340px;

  margin: auto;
  position: relative;
  @media (max-width: 1440px) {
    margin: 0 50px;
    width: calc(100% - 100px);
  }

  @media (max-width: 600px) {
    margin: 0 8px;
    width: calc(100% - 16px);
  }
`;

const Grid = styled.div`
  /* margin: 30px auto 0 auto;
  max-width: 1420px;
  width: 100%; */
  margin-top: 30px;

  display: grid;
  grid-template-areas: ". a a" "b b c" "b b c";
  gap: 15px;
  aspect-ratio: 1/1;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  @media (max-width: 1340px) {
    /* margin: 30px 15px 0 15px;
    width: calc(100% - 30px); */
  }
  @media (max-width: 800px) {
    /* margin: 0px 15px 0 15px; */
    margin-top: 10px;
    margin-bottom: 20px;
    grid-template-areas: "a a" "b b" "b b" ". c";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: none;
  }
`;

const SeeAll = styled.div`
  height: 160px;
  width: 100%;
  padding: 0 40px;
  background: rgba(162, 172, 135, 0.1);

  display: flex;
  text-align: center;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  width: calc(100vw - 10px);
  margin: 0 calc(670px - 50vw);
  padding: 0 calc(50vw - 670px + 120px);

  @media (max-width: 1440px) {
    width: calc(100vw - 16px);
    margin: 0 -50px;
    padding: 16px 165px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    margin: 40px -50px 0;
    gap: 16px;
    height: auto;
    text-align: center;
  }

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 16px 40px;
    margin: 40px -8px 0;
    width: calc(100% + 16px);
  }
  color: #2d2326;

  font-family: Onest;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 115%; /* 23px */
  letter-spacing: -0.2px;

  & a {
    /* flex-grow: 1; */
    /* margin-left: auto; */
    min-width: 171px;
    @media (max-width: 600px) {
      gap: 8px;
    }
    @media (max-width: 1000px) {
      min-width: 0;
    }
  }

  & svg {
    @media (max-width: 600px) {
      height: 16px;
      width: 16px;
    }
  }
`;

const GridButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: none;
  width: 200px;
  height: 56px;
  border-radius: 8px;
  border: 2px solid #fff;
  font-size: 24px;

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

export function MainSreen() {
  const [BrandsList, setBrands] = useState([]);
  const [GridMain, setGridMain] = useState([]);
  let { Cart, isBtb } = React.useContext(Context);

  useEffect(() => {
    axios
      .get(
        `${SERVER_URL}/api/grid-main?populate=image_1.image,image_2.image,image_3.image,image_4.image,image_5.image`
      )
      .then((response) => {
        //console.log(response);
        let image = response.data.data.attributes;
        setGridMain([
          image.image_1,
          image.image_2,
          image.image_3,
          image.image_4,
          image.image_5,
        ]);
        // setBrands(response.data.data);
      })
      .catch((err) => {
        //console.log(err);
      });

    axios
      .get(
        `${SERVER_URL}/api/brands?populate=logo,categories,banner,banner.image,categories.image`
      )
      .then((response) => {
        setBrands(response.data.data);
      })
      .catch((err) => {
        //console.log(err);
      });
  }, []);

  return (
    <StyledScreen>
      <Helmet>
        <title>Toy boutique</title>
        <meta
          name="description"
          content="Best site for premium class toys for children between 0-7 years."
        />
      </Helmet>
      <NamecandidateNameViewScore10001 />

      <Div44>
        {GridMain.length == 5 && (
          <Grid>
            <LitItem
              href={GridMain[0].link}
              style={{
                background: `
 
                linear-gradient(180deg, rgba(0, 0, 0, 0.00) 85.25%, rgba(0, 0, 0, 0.20) 100%),
                linear-gradient(180deg, rgba(0, 0, 0, 0.00) 25.25%, rgba(0, 0, 0, 0.30) 100%),
                 url(
${SERVER_URL + GridMain[0].image.data.attributes.formats.large.url}
                 ) center center/cover no-repeat
                 
                 `,
              }}
            >
              <GridButton href={GridMain[0].link}>
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
              <div>{GridMain[0].text}</div>
            </LitItem>
            <LitItem
              href={GridMain[1].link}
              style={{
                background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 15.25%, rgba(0, 0, 0, 0.20) 100%),
                linear-gradient(180deg, rgba(0, 0, 0, 0.00) 25.25%, rgba(0, 0, 0, 0.30) 100%),
                 url(
${SERVER_URL + GridMain[1].image.data.attributes.formats.large.url}
                  )
                  center center/cover no-repeat`,
                gridArea: "a",
              }}
            >
              <GridButton>
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
              <div>{GridMain[1].text}</div>
            </LitItem>
            <LitItem
              href={GridMain[2].link}
              style={{
                background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 85.25%, rgba(0, 0, 0, 0.20) 100%),
                linear-gradient(180deg, rgba(0, 0, 0, 0.00) 75.25%, rgba(0, 0, 0, 0.20) 100%),
                 url(

${SERVER_URL + GridMain[2].image.data.attributes.formats.large.url}
                 ) center center/cover no-repeat`,
                gridArea: "b",
              }}
            >
              <GridButton href={GridMain[2].link}>
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
              <div>{GridMain[2].text}</div>
            </LitItem>
            <LitItem
              href={GridMain[3].link}
              style={{
                background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 85.25%, rgba(0, 0, 0, 0.20) 100%),
                linear-gradient(180deg, rgba(0, 0, 0, 0.00) 25.25%, rgba(0, 0, 0, 0.30) 100%),
                 url(
${SERVER_URL + GridMain[3].image.data.attributes.formats.large.url}
                 ) center center/cover no-repeat`,
                gridArea: "c",
                aspectRatio: "auto",
              }}
            >
              <GridButton href={GridMain[3].link}>
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
              <div>{GridMain[3].text}</div>
            </LitItem>
            {/* <LitItem href={GridMain[1].link}
              style={{
                background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 85.25%, rgba(0, 0, 0, 0.20) 100%),
                linear-gradient(180deg, rgba(0, 0, 0, 0.00) 25.25%, rgba(0, 0, 0, 0.30) 100%),
                 url(
${SERVER_URL + GridMain[4].image.data.attributes.formats.large.url}
                 ) center center/cover no-repeat`,
              }}
            >
              <GridButton href={GridMain[4].link}>
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
              <div>{GridMain[4].text}</div>
            </LitItem> */}
          </Grid>
        )}
        <Shelf text="New Products" neww={true} />
        {/* <SeeAll>
          <div>
            We regularly update the available products for you, take a look at
            the new shipments!
          </div>
          <a
            style={{
              display: "flex",
              gap: "16px",

              alignItems: "center",
              fontWeight: "600",
              color: "#6E7E44",
              cursor: "pointer",
            }}
            href="/catalog/all?new=true"
          >
            <div>SEE ALL NEW</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M1.66699 11.0001H20.3337M20.3337 11.0001L11.0003 1.66675M20.3337 11.0001L11.0003 20.3334"
                stroke="#6E7E44"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </SeeAll> */}
        <ShelfBrands />

        {BrandsList.filter((x) => x.attributes.coming_soon != true).map((b) => {
          console.log(b);
          return <Brands {...b} />;
        })}
      </Div44>
      <BigImage>
        <div>Catalog</div>
        <div>
          {`For a complete overview of all available products, go to our catalog.
          
Here you can dive deeper into the offered assortment and learn more about any product.`}
        </div>
        <Button className="button-image" href="/catalog">
          GO TO CATALOG
        </Button>
      </BigImage>
      {!isBtb && (
        <LastEl>
          <div>
            <div style={{ fontWeight: 600 }}>
              We are open to wholesale cooperation.
            </div>
            <div style={{ maxWidth: "600px" }}>
              If you are interested in cooperation, then leave your contact
              information and we will contact you!
            </div>
          </div>
          <Button href="/become_partner">BECOME A PARTNER</Button>
        </LastEl>
      )}
      <Footer />
    </StyledScreen>
  );
}

const BigImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 780px;
  /* background: url(https://s3-alpha-sig.figma.com/img/cf3c/b93c/fe474b124fc83462852a7e217f7a355f?Expires=1704067200&Signature=fLqxjzruRyn4Z86siO~5NC3QKifkwVaoGIewduFiLRDBYh2LIVccxkqK8kHx99MewOuX3EjNNvoIUrLruAdfB7qemF1iw5~DHHrrIOie0pKSor9-nvLbFCk6oM4XZgJ96YiKGrgkw8yUq-9ef4q4lQjdxxusWfTlsn6crnYPc5roP~GG9hUCA2t1Lsjd-dbVyMZa~jk6G8G8ljtlItAg1rbwYI8bw9fuByY1AQu~vhclCQ6WuA4OJIJDSsoQRWkDf0zhfRgmzyVL45jaBFYsmSfWx5Ztp~ByWTGuOPzGi1vvMd3iRkBqMBfCesFhZ2AudPU9l~~iahTbpY35HR3ung__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)
    center center/cover no-repeat; */

  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    url(/img/fe474b124fc83462852a7e217f7a355f.jpeg) 20% 30% / cover no-repeat,
    lightgray 50% / cover no-repeat;

  color: #fff;

  text-align: center;
  font-family: Onest;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 115%; /* 27.6px */
  letter-spacing: -0.24px;
  padding: 40px 16px;

  @media (max-width: 600px) {
    font-size: 16px;
    height: auto;

    background-position: 70%;
    @media (max-width: 600px) {
      /* padding: 0; */
    }

    justify-content: space-evenly;
  }

  & > div {
    padding: 16px;
    max-width: 950px;
    @media (max-width: 600px) {
      padding: 0;
      white-space: pre-wrap;
      text-align: center;
    }
  }

  & > div:first-child {
    font-size: 64px;
    font-family: Comic Helvetic;
    margin-bottom: 8px;

    @media (max-width: 800px) {
      font-size: 40px;
      margin-bottom: 170px;
      margin-top: 170px;
    }
  }

  & .button-image {
    margin-top: 80px;
    border-radius: 20px;
    height: 68px;

    font-weight: 800;
    border-width: 2px;

    @media (max-width: 800px) {
      width: 180px;
      border-radius: 14px;
      height: 48px;
      margin-top: 32px;
      font-size: 14px;
    }
  }
`;

const LastEl = styled.div`
  display: flex;
  padding: 120px 50px;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 100px 20px 60px 20px;
    gap: 32px;
  }

  & > a {
    border: none;
    border-radius: 8px;
    background: #231c1e;
    min-width: max-content;
    width: fit-content;
    padding: 16px;

    color: #fff;

    text-align: center;
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: 114.972%; /* 18.395px */
    letter-spacing: -0.16px;
    text-transform: uppercase;
  }

  & > div:first-child {
    @media (max-width: 800px) {
      font-size: 20px;
    }
  }
  & > div {
    display: flex;
    flex-direction: column;
    @media (max-width: 800px) {
      justify-content: center;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 16px;

      font-size: 16px;
    }
    color: #2d2326;
    gap: 8px;
    font-family: Onest;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 115%; /* 27.6px */
    letter-spacing: -0.24px;
  }
`;

const LitItem = styled.a`
  cursor: pointer;
  background-size: cover;
  border-radius: 20px;
  padding: 20px;
  padding-right: 80px;
  gap: 32px;
  background-clip: content-box;
  background-position: 50% 50%;
  display: flex;
  flex-direction: column-reverse;

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
  &:nth-child(2) {
    aspect-ratio: 2/1;
    @media (max-width: 800px) {
      aspect-ratio: 2/1;
    }
  }
  &:last-child {
    /* @media (max-width: 800px) {
      display: none;
    } */
  }

  color: #fff;

  font-family: Comic Helvetic;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 115%; /* 36.8px */
  letter-spacing: -0.32px;
`;

const Button = styled.a`
  background: none;
  border: 1px solid white;
  width: 120px;
  margin: 0;
  padding: 0;
  border-radius: 8px;
  backdrop-filter: blur(10px);
  cursor: pointer;
  display: flex;
  width: 310px;
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

  transition: all 0.3s;
  &:hover {
    transform: scale(1.02);
  }
`;

import * as React from "react";
import styled from "styled-components";
import arrow_down from "../icons/arrow-down.svg";
import axios from "axios";
import { useState, useEffect } from "react";
import { Context, SERVER_URL } from "../const";
import { Logo } from "../icons/Logo";
import { Search } from "../icons/Search";
import { Bag } from "../icons/Bag";
import { useLocation } from "react-router-dom";

export function Header(props) {
  let [showBrands, useShowBrands] = React.useState(false);
  let { Cart, isBtb } = React.useContext(Context);
  const location = useLocation();
  console.log(location);

  const [Brands, setBrands] = useState([]);
  useEffect(() => {
    axios
      .get(`${SERVER_URL}/api/brands`)
      .then((response) => {
        setBrands(response.data.data);
      })
      .catch((err) => {
        //console.log(err);
      });
  }, []);

  let items_count = [{ cart_quntity: 0 }]
    .concat(Cart)
    .reduce((prev, next) => prev + next.cart_quntity, 0);

  return (
    <Div>
      <Div2>
        <a href="/">
          <Logo className="header-logo" />
        </a>
        <Div3>
          {/* <Div4 href="/">Main</Div4> */}
          <Div5
            href="/catalog"
            style={{
              color: location.pathname == "/catalog" ? "#6E7E44" : "inherit",
              textDecoration:
                location.pathname == "/catalog" ? "underline" : "none",
            }}
          >
            Catalog
          </Div5>
          <Div5
            onClick={(e) => useShowBrands(!showBrands)}
            className="noselect"
          >
            <p
              style={{
                color: location.search.includes("brand")
                  ? "#6E7E44"
                  : "inherit",
                textDecoration: location.search.includes("brand")
                  ? "underline"
                  : "none",
              }}
            >
              Brands
            </p>
            <img
              src={arrow_down}
              style={{
                transform: showBrands ? "rotate(180deg)" : "",
                height: "100%",
              }}
            />
            {true && (
              <BrandList
                id="child"
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
          </Div5>
        </Div3>
      </Div2>
      <Div8>
        <Div9>
          <Div10 href="/search">
            <Search />
          </Div10>
          <Div11 href="/cart">
            <Div12>{items_count}</Div12>
            <Bag color="black" />
          </Div11>
        </Div9>
        {isBtb ? (
          <Div13>
            <Div14
              onClick={() => {
                window.localStorage.removeItem("Btb");
                window.localStorage.removeItem("User");
                window.location.reload();
              }}
            >
              Log Out
            </Div14>
          </Div13>
        ) : (
          <Div13>
            {location.pathname === "/become_partner" ? (
              <Div14 href="/login">Log In</Div14>
            ) : (
              <Div15 href="/become_partner">B2b access</Div15>
            )}
          </Div13>
        )}
      </Div8>
      <TopMobile>
        <a href="/">
          <Logo className="header-logo" />
        </a>
        {isBtb ? (
          <Div13>
            <Div14
              onClick={() => {
                window.localStorage.removeItem("Btb");
                window.localStorage.removeItem("User");
                window.location.reload();
              }}
            >
              Log Out
            </Div14>
          </Div13>
        ) : (
          <Div13>
            {location.pathname === "/become_partner" ? (
              <Div14 href="/login">Log In</Div14>
            ) : (
              <Div15 href="/become_partner">B2b access</Div15>
            )}
          </Div13>
        )}
      </TopMobile>
      <BottomMobile>
        <Div3>
          {/* <Div4 href="/">Main</Div4> */}
          <Div5
            href="/catalog"
            style={{
              color: location.pathname == "/catalog" ? "#6E7E44" : "",
              textDecoration:
                location.pathname == "/catalog" ? "underline" : "none",
            }}
          >
            Catalog
          </Div5>
          <Div5
            onClick={(e) => useShowBrands(!showBrands)}
            className="noselect"
          >
            <p
              style={{
                color: location.search.includes("brand")
                  ? "#6E7E44"
                  : "inherit",
                textDecoration: location.search.includes("brand")
                  ? "underline"
                  : "none",
              }}
            >
              Brands
            </p>
            <img
              src={arrow_down}
              style={{
                transform: showBrands ? "rotate(180deg)" : "",
                height: "100%",
              }}
            />
            {true && (
              <BrandList
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
          </Div5>
        </Div3>

        <Div9>
          <Div10 href="/search">
            <Search />
          </Div10>
          <Div11 href="/cart">
            <Div12>{items_count}</Div12>
            <Bag color={"black"} />
          </Div11>
        </Div9>
      </BottomMobile>
    </Div>
  );
}

const Div = styled.div`
  justify-content: space-between;
  border-bottom: 1px solid rgba(35, 28, 30, 0.2);
  background-color: #fff;
  display: flex;
  gap: 20px;
  padding: 20px 50px;
  @media (max-width: 1112px) {
    flex-direction: column;
    padding: 20px 20px;
  }
`;

const TopMobile = styled.div`
  display: none;
  gap: 8px;
  @media (max-width: 1112px) {
    display: flex;
  }

  & a {
    display: grid;
    justify-content: center;
    align-items: center;
  }
  & a:hover {
    transform: scale(1.03);
  }

  & .header-logo {
    width: 120px;
  }
`;

const BottomMobile = styled.div`
  display: none;
  @media (max-width: 1112px) {
    display: flex;
  }
`;

const Div2 = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 1112px) {
    max-width: 100%;
    flex-wrap: wrap;
    display: none;
  }
`;

const Img = styled.img`
  aspect-ratio: 7.31;
  object-fit: contain;
  object-position: center;
  width: 190px;
  overflow: hidden;
  max-width: 100%;
  margin: auto 0;

  @media (max-width: 600px) {
    width: 118px;
  }
`;

const Div3 = styled.div`
  align-self: stretch;
  display: flex;
  padding-right: 80px;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 1112px) {
    padding-right: 20px;
  }
`;

const Div4 = styled.a`
  color: #231c1e;
  letter-spacing: -0.16px;
  align-self: center;
  white-space: nowrap;
  margin: auto 0;
  font: 300 16px/115% Onest, sans-serif;
  @media (max-width: 1112px) {
    white-space: initial;
  }
`;

const Div5 = styled.a`
  display: flex;
  gap: 3px;
  color: #231c1e;
  letter-spacing: -0.16px;
  align-self: center;
  margin: auto 0;
  position: relative;
  font: 300 16px/115% Onest, sans-serif;
  align-items: center;
  transition: all 0.5s;

  width: 73px;
  cursor: pointer;

  & p {
    font-weight: 600;
  }
  & img {
    transition: all 200ms ease 0s;
    height: 100%;
  }

  &:not(:has(#child:hover)):hover {
    align-items: center;
    align-self: stretch;
    background-color: #ffffff33;
    border-radius: 8px;
    display: flex;
    /* font-weight: 700; */
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
  max-width: 300px;
  top: 30px;
  left: -60px;
  /*background-color: #ffffff33;*/
  background: #fff;

  transition: opacity 0.5s;

  opacity: 0;
  backdrop-filter: blur(6px);

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
      background: rgba(35, 28, 30, 0.05);

      /* border-radius: 16px; */
      display: flex;
      /* font-weight: 700; */
    }
  }

  & a:last-child {
    border-bottom: none;
  }
`;

const Div6 = styled.div`
  justify-content: space-between;
  border-radius: 8px;
  display: flex;
  gap: 4px;
  padding: 19px 8px;
`;

const Div7 = styled.div`
  color: #6e7e44;
  letter-spacing: -0.16px;
  text-decoration-line: underline;
  flex-grow: 1;
  white-space: nowrap;
  font: 600 16px/115% Onest, sans-serif;
  @media (max-width: 1112px) {
    white-space: initial;
  }
`;

const Img2 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 16px;
  overflow: hidden;
  align-self: start;
  max-width: 100%;
`;

const Div8 = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding-left: 80px;
  gap: 16px;
  @media (max-width: 1112px) {
    max-width: 100%;
    flex-wrap: wrap;
    padding-left: 20px;
    display: none;
  }
`;

const Div9 = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin: auto 0;
  @media (max-width: 1112px) {
    margin-left: auto;
  }
`;

const Div10 = styled.a`
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0.4) 100%
    ),
    rgba(0, 0, 0, 0.05);
  background-blend-mode: hard-light, normal;
  backdrop-filter: blur(12px);
  display: flex;
  aspect-ratio: 1.12;
  flex-direction: column;
  padding: 13px 16px;
  & svg {
    @media (max-width: 600px) {
      width: 13.44px;
      height: 13.44px;
    }
  }
  @media (max-width: 600px) {
    padding: 10px;

    height: min-content;
    border-radius: 4px;
  }
  transition: all 0.5s;
  &:hover {
    box-shadow: 11px 7px 20px 3px rgba(34, 60, 80, 0.1);
  }
`;

const Img3 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
  overflow: hidden;
`;

const Div11 = styled.a`
  justify-content: space-between;
  align-items: start;
  border-radius: 8px;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0.4) 100%
    ),
    rgba(0, 0, 0, 0.05);
  background-blend-mode: hard-light, normal;
  backdrop-filter: blur(12px);
  display: flex;
  gap: 8px;
  padding: 13px 16px;
  transition: all 0.5s;
  &:hover {
    box-shadow: 11px 7px 20px 3px rgba(34, 60, 80, 0.1);
  }

  @media (max-width: 600px) {
    padding: 8.96px;
    gap: 5px;
  }

  & svg {
    @media (max-width: 600px) {
      width: 13.44px;
      height: 13.44px;
    }
  }
`;

const Div12 = styled.div`
  color: #231c1e;
  text-align: right;
  letter-spacing: -0.2px;
  text-transform: uppercase;
  font: 600 20px/115% Manrope, sans-serif;
  @media (max-width: 600px) {
    font-size: 11.2px;
  }
`;

const Img4 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
  overflow: hidden;
  align-self: stretch;
  max-width: 100%;
`;

const Div13 = styled.div`
  justify-content: space-between;
  align-self: stretch;
  display: flex;
  gap: 16px;
  padding: 3px 0;
  @media (max-width: 1112px) {
    margin-left: auto;
  }
`;

const Div14 = styled.a`
  color: #231c1e;
  text-align: center;
  letter-spacing: -0.16px;
  text-transform: uppercase;
  white-space: nowrap;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid rgba(35, 28, 30, 0.1);
  padding: 16px;
  font: 800 16px/115% Manrope, sans-serif;
  transition: all 0.5s;
  @media (max-width: 1112px) {
    white-space: initial;
  }
  @media (max-width: 600px) {
    /* display: none; */
    border-radius: 4px;
    padding: 8px;
    font-size: 8px;
  }
  &:hover {
    transform: scale(1.03);
    box-shadow: 11px 7px 20px 3px rgba(34, 60, 80, 0.1);
  }
`;

const Div15 = styled.a`
  color: #fff;
  text-align: center;
  letter-spacing: -0.16px;
  text-transform: uppercase;
  white-space: nowrap;
  justify-content: center;
  border-radius: 8px;
  background-color: #231c1e;
  flex-grow: 1;
  padding: 16px 18px;
  font: 800 16px/115% Manrope, sans-serif;
  @media (max-width: 1112px) {
    white-space: initial;
  }

  @media (max-width: 600px) {
    font-size: 8px;

    border-radius: 4px;
    padding: 8px;
  }
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
    box-shadow: 11px 7px 20px 3px rgba(34, 60, 80, 0.1);
  }
`;

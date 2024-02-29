import * as React from "react";
import styled from "styled-components";
import { PlusMinus } from "../../../components/PlusMinus";
import { CURRENCY, Context, SERVER_URL } from "../../../const";
import { useState, useContext } from "react";
import "react-slick";
import Slider from "react-slick";
import { Plus } from "../../../icons/plusItemCard";
import { Bag } from "../../../icons/Bag";
import Helmet from "react-helmet";

export function TopPart(props) {
  const [Input, setInput] = useState(1);
  // let ref1 = React.useRef();
  // let ref2 = React.useRef();
  const [ref1, setNav1] = useState({});
  const [ref2, setNav2] = useState({});
  const { isBtb, setCart, Cart, setVisited } = useContext(Context);
  React.useEffect(() => {
    setVisited({ id: props.id, attributes: props });
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    // verticalSwiping: true,

    centerMode: true,
    asNavFor: ref2,
    focusOnSelect: true,
  };

  //console.log(props);
  return (
    <div>
      <Helmet>
        <title>Toy boutique</title>
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.search_term}></meta>
      </Helmet>
      <Div>
        <SliderWrapper>
          <div onClick={() => ref1.slickPrev()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
            >
              <path
                d="M16.4993 25.3333L16.4993 6.66659M16.4993 6.66659L7.16602 15.9999M16.4993 6.66659L25.8327 15.9999"
                stroke="#A2AC87"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <Slider
            className="Slider2"
            {...settings}
            ref={(c) => {
              setNav1(c);
            }}
          >
            {[props.main_image.data].concat(props.image.data).map((i) => (
              <MyImage
                srcSet={`${SERVER_URL}${i.attributes.formats.small.url}`}
              />
            ))}
          </Slider>
          <div onClick={() => ref1.slickNext()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
            >
              <path
                d="M16.5007 6.66675L16.5007 25.3334M16.5007 25.3334L25.834 16.0001M16.5007 25.3334L7.16732 16.0001"
                stroke="#A2AC87"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </SliderWrapper>
        <Column>
          <Div2>
            <Div3>
              <Slider
                slidesToShow={1}
                className="Slider"
                ref={(c) => {
                  setNav2(c);
                }}
                asNavFor={ref1}
                infinite={true}
              >
                {[props.main_image.data]
                  .concat(props.image.data)
                  // .concat(props.image.data)
                  .map((i) => (
                    <MyImageContainer>
                      <Img
                        loading="lazy"
                        srcSet={`${SERVER_URL}${i.attributes.formats.large.url}`}
                      />
                    </MyImageContainer>
                  ))}
              </Slider>
              {!isBtb && (
                <Div4>
                  {props.New && <Div5>New</Div5>}
                  {props.price_discount && <Div6>Sale</Div6>}
                </Div4>
              )}
            </Div3>
          </Div2>
        </Column>
        <Column2>
          <Div7>
            <Div8>{props.name}</Div8>
            <Div9>{props.brand.data.attributes.name}</Div9>
            {isBtb ? (
              <div
                style={{
                  display: "flex",
                  margin: "24px 0 0 0",
                  width: "100%",
                  gap: "24px",
                }}
              >
                <BtbPrice
                  style={{
                    background: "rgba(110, 126, 68, 0.05)",
                  }}
                >
                  <Div14 style={{ margin: "0" }}>For partners:</Div14>
                  <Div13 style={{}}>
                    {props.price_b2b}
                    {CURRENCY}
                  </Div13>
                </BtbPrice>
                <BtbPrice>
                  <Div14 style={{ margin: "0" }}>For clients:</Div14>
                  <Div13 style={{}}>
                    {props.price_b2c}
                    {CURRENCY}
                  </Div13>
                </BtbPrice>
              </div>
            ) : (
              <>
                {props.price_discount && (
                  <Div10>
                    <Div11>
                      {props.price_b2c}
                      {CURRENCY}
                    </Div11>
                    <Div12>
                      {Math.floor(
                        (1 - props.price_discount / props.price_b2c) * 100
                      )}
                      % discount
                    </Div12>
                  </Div10>
                )}
                <Div13>
                  {props.price_discount
                    ? props.price_discount
                    : props.price_b2c}
                  {CURRENCY}
                </Div13>
              </>
            )}
            <Div14>Product description</Div14>
            <Div15>{props.description}</Div15>

            {isBtb ? (
              <BtbInput>
                <div style={{ width: "100%" }}>
                  <ContainerClick
                    onClick={() => setInput(Math.max(Input - 10, 1))}
                    className="noselect"
                  >
                    - 10
                  </ContainerClick>
                  <ContainerClick
                    onClick={() => setInput(Math.max(Input - 1, 1))}
                    className="noselect"
                  >
                    -
                  </ContainerClick>
                  <NumberInput
                    value={Input}
                    onChange={(c) => {
                      if (c.target.value == "") {
                        c.target.value = 1;
                      }
                      setInput(
                        c.target.value
                          .replace(/[^0-9.]/g, "")
                          .replace(/(\..*)\./g, "$1")
                      );
                    }}
                  />
                  <ContainerClick
                    onClick={() => setInput(Input - 1 + 2)}
                    className="noselect"
                  >
                    +
                  </ContainerClick>
                  <ContainerClick
                    onClick={() => setInput(Input - 10 + 20)}
                    className="noselect"
                  >
                    + 10
                  </ContainerClick>
                </div>
                <Div30
                  onClick={() => {
                    let j = Cart.find((c) => c.id === props.upc_code);
                    if (j !== undefined) {
                      j.cart_quntity += Input;
                      setCart(Cart);
                    } else {
                      j = {
                        el: props,
                        cart_quntity: Input,
                        real_id: props.id,
                        id: props.upc_code,
                      };
                      setCart(Cart.concat([j]));
                    }
                  }}
                >
                  <Div31>
                    <Div32>
                      <Plus />
                      <Div33 className="noselect">Add to Bag</Div33>
                    </Div32>
                    <Bag />
                  </Div31>
                </Div30>
              </BtbInput>
            ) : (
              <Div26>
                <PlusMinus
                  style={{ height: "auto", width: "100px" }}
                  input={Input}
                  setInput={setInput}
                />
                <Div30
                  onClick={() => {
                    let j = Cart.find((c) => c.id === props.upc_code);
                    if (j !== undefined) {
                      j.cart_quntity += Input;
                      setCart(Cart);
                    } else {
                      j = {
                        el: props,
                        cart_quntity: Input,
                        id: props.upc_code,
                      };
                      setCart(Cart.concat([j]));
                    }
                  }}
                >
                  <Div31>
                    <Div32>
                      <Plus />
                      <Div33 className="noselect">Add to Bag</Div33>
                    </Div32>
                    <Bag />
                  </Div31>
                </Div30>
              </Div26>
            )}
          </Div7>
        </Column2>
      </Div>
    </div>
  );
}

const BtbPrice = styled.div`
  border-radius: 8px;
  padding: 8px 16px;
  flex-direction: column;
  display: flex;
  justify-content: left;
  align-items: flex-start;
  width: 100%;

  & > div:last-child {
    font-size: 36px;
  }
  @media (max-width: 600px) {
    & {
      padding: 4px 8px;
    }
    & > div:last-child {
      font-size: 20px;
    }
    & > div:first-child {
      font-size: 14px;
    }
  }
`;

const Div = styled.div`
  gap: 20px;
  display: flex;
  background-color: white;
  border-radius: 32px;
  margin-bottom: 20px;
  overflow: hidden;
  width: 100%;
  @media (max-width: 991px) {
    margin-bottom: 4px;
    flex-direction: column;
    margin-bottom: 12px;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 36%;
  /* flex-grow: 1; */
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div2 = styled.div`
  justify-content: center;
  background-color: #fff;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  padding: 16px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div3 = styled.div`
  /* disply: flex; */
  flex-direction: column;
  overflow: hidden;
  position: relative;
  display: flex;
  min-height: 668px;
  width: 100%;
  align-items: start;
  /* padding: 20px 60px 50px 20px; */
  @media (max-width: 991px) {
    max-width: 100%;
    min-height: 0;
    padding-right: 20px;
  }

  & .Slider {
    height: 100%;
    width: 100%;
    display: flex;
    padding: 0;

    @media (max-width: 1000px) {
      width: 100%;
      aspect-ratio: 1/1;
    }
  }
  & .slick-list {
    width: 100%;
  }
  & .Slider .slick-slide {
    display: grid;
    place-items: center;
    height: 700px;

    @media (max-width: 600px) {
      height: 258px;
    }
  }
`;

const Img = styled.img`
  /* position: absolute; */
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const Div4 = styled.div`
  position: relative;
  position: absolute;
  justify-content: center;
  display: flex;
  margin-bottom: 436px;
  gap: 8px;
  @media (max-width: 991px) {
    margin-bottom: 40px;
  }
`;

const Div5 = styled.div`
  color: #fff;
  text-align: left;
  letter-spacing: -0.16px;
  text-transform: uppercase;
  white-space: nowrap;
  justify-content: center;
  border-radius: 8px;
  background-color: #fd8558;
  aspect-ratio: 1.825;
  padding: 12px 16px;
  font: 700 16px/115% Onest, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div6 = styled.div`
  color: #fff;
  text-align: left;
  letter-spacing: -0.16px;
  text-transform: uppercase;
  white-space: nowrap;
  justify-content: center;
  border-radius: 8px;
  background-color: #ff8db6;
  aspect-ratio: 1.825;
  padding: 12px 16px;
  font: 700 16px/115% Onest, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 500px;
  margin-left: auto;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div7 = styled.div`
  align-items: flex-start;
  border-radius: 0px 32px 32px 0px;
  background-color: #fff;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  padding: 24px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 17px 20px 17px;
  }
`;

const Div8 = styled.div`
  color: #231c1e;
  letter-spacing: -0.24px;
  font: 500 24px/115% Comic Helvetic, -apple-system, Roboto, Helvetica,
    sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div9 = styled.div`
  color: rgba(35, 28, 30, 0.5);
  letter-spacing: -0.2px;
  margin-top: 8px;
  font: 300 20px/115% Onest, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div10 = styled.div`
  display: flex;
  margin-top: 24px;
  justify-content: space-between;
  gap: 8px;
  padding: 8px 0;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Div11 = styled.div`
  color: rgba(35, 28, 30, 0.5);
  text-align: left;
  letter-spacing: -0.24px;
  text-decoration-line: line-through;
  text-transform: uppercase;
  font: 400 24px/100% Onest, sans-serif;
`;

const Div12 = styled.div`
  color: #ff8db6;
  text-align: left;
  letter-spacing: -0.16px;
  align-self: start;
  flex-grow: 1;
  flex-basis: auto;
  font: 400 16px/100% Onest, sans-serif;
`;

const Div13 = styled.div`
  color: #6e7e44;
  text-align: left;
  letter-spacing: -0.36px;
  text-transform: uppercase;
  margin-top: 8px;
  font: 600 36px/100% Onest, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div14 = styled.div`
  color: rgba(35, 28, 30, 0.5);
  text-align: left;
  letter-spacing: -0.2px;
  margin-top: 40px;
  font: 300 20px/100% Onest, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div15 = styled.div`
  color: #231c1e;
  letter-spacing: -0.16px;
  margin-top: 8px;
  font: 300 16px/18px Onest, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div16 = styled.div`
  color: rgba(35, 28, 30, 0.5);
  text-align: left;
  letter-spacing: -0.2px;
  margin-top: 40px;
  font: 300 20px/100% Onest, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div17 = styled.div`
  color: rgba(35, 28, 30, 0.8);
  text-align: left;
  letter-spacing: -0.16px;
  margin-top: 20px;
  font: 300 16px/100% Onest, sans-serif;
`;

const Div18 = styled.div`
  align-self: start;
  display: flex;
  margin-top: 8px;
  gap: 16px;
  @media (max-width: 991px) {
    justify-content: center;
  }
`;

const Div19 = styled.div`
  color: rgba(35, 28, 30, 0.5);
  letter-spacing: -0.2px;
  flex-grow: 1;
  white-space: nowrap;
  font: 300 20px/115% Onest, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div20 = styled.div`
  color: #6e7e44;
  letter-spacing: -0.2px;
  white-space: nowrap;
  justify-content: center;
  aspect-ratio: 2.4782608695652173;
  font: 600 20px/115% Onest, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div21 = styled.div`
  color: rgba(35, 28, 30, 0.5);
  letter-spacing: -0.2px;
  flex-grow: 1;
  white-space: nowrap;
  font: 300 20px/115% Onest, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div22 = styled.div`
  color: rgba(35, 28, 30, 0.8);
  text-align: left;
  letter-spacing: -0.16px;
  margin-top: 20px;
  font: 300 16px/100% Onest, sans-serif;
`;

const Div23 = styled.div`
  align-self: start;
  display: flex;
  margin-top: 8px;
  width: 203px;
  max-width: 100%;
  padding-right: 51px;
  gap: 16px;
  @media (max-width: 991px) {
    padding-right: 20px;
  }
`;

const Img2 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
  flex: 1;
`;

const Div24 = styled.div`
  border-radius: 6px;
  background-color: #8eddff;
  display: flex;
  height: 40px;
  flex-direction: column;
  flex: 1;
`;

const Div25 = styled.div`
  border-radius: 6px;
  background-color: #99704a;
  display: flex;
  height: 40px;
  flex-direction: column;
  flex: 1;
`;

const Div26 = styled.div`
  justify-content: space-between;
  align-self: stretch;
  display: flex;
  margin-top: auto;
  gap: 9px;
  min-height: 50px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Div27 = styled.div`
  justify-content: center;
  border-radius: 8px;
  border: 1px solid rgba(35, 28, 30, 0.2);
  backdrop-filter: blur(10px);
  display: flex;
  flex-basis: 0%;
  flex-direction: column;
  padding: 16px 14px;
`;

const Div28 = styled.div`
  justify-content: space-between;
  align-items: start;
  display: flex;
  padding-right: 16px;
  gap: 0px;
`;

const Img3 = styled.img`
  aspect-ratio: 1.06;
  object-fit: contain;
  object-position: center;
  width: 17px;
  overflow: hidden;
  max-width: 100%;
`;

const Div29 = styled.div`
  color: #231c1e;
  text-align: left;
  letter-spacing: -0.16px;
  align-self: stretch;
  flex-grow: 1;
  white-space: nowrap;
  font: 400 16px/115% Onest, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div30 = styled.div`
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  backdrop-filter: blur(10px);
  background-color: #a2ac87;
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  padding: 13px 60px;
  @media (max-width: 991px) {
    padding: 0 20px;
    min-height: 40px;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    transform: scale(1.03);
  }
`;

const Div31 = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media (max-width: 400px) {
    gap: 0px;
  }
`;

const Div32 = styled.div`
  justify-content: center;
  align-items: start;
  display: flex;
  gap: 8px;
  margin: auto 0;
  @media (max-width: 400px) {
    gap: 0px;
  }
`;

const Img4 = styled.img`
  aspect-ratio: 1.06;
  object-fit: contain;
  object-position: center;
  width: 17px;
  overflow: hidden;
  max-width: 100%;
`;

const Div33 = styled.div`
  color: #fff;
  text-align: right;
  letter-spacing: -0.16px;
  align-self: stretch;
  flex-grow: 1;
  white-space: nowrap;
  font: 700 16px/115% Manrope, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Img5 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
  overflow: hidden;
  align-self: stretch;
  max-width: 100%;
`;

const BtbInput = styled.div`
  display: flex;
  margin-top: auto;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  gap: 9px;
  min-height: 50px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }

  & > div:first-child {
    display: flex;
    gap: 8px;
    justify-content: center;
    width: 100%;
  }
`;
const ContainerClick = styled.a`
  border-radius: 8px;
  border: 1px solid rgba(35, 28, 30, 0.2);
  display: flex;
  padding: 12px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  backdrop-filter: blur(10px);

  color: rgba(35, 28, 30, 0.5);

  text-align: left;
  font-family: Onest;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 114.972%; /* 18.395px */
  letter-spacing: -0.16px;

  transition: all 0.5s;
  cursor: pointer;

  @media (max-width: 600px) {
    padding: 8px 10px;
    width: 100%;
    font-size: 16px;
  }
  &:hover {
    transform: scale(1.05);
  }
`;

const NumberInput = styled.input`
  border-radius: 8px;
  border: 1px solid rgba(35, 28, 30, 0.2);

  backdrop-filter: blur(10px);
  width: 120px;
  padding: 12px 8px;
  text-align: center;

  @media (max-width: 600px) {
    width: 60px;
  }
`;
const SliderWrapper = styled.div`
  width: 150px;
  height: 700px;
  gap: 16px;
  margin: 16px 0 16px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & .Slider2 {
    /* height: 300px; */
    height: 100%;
    overflow: hidden;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;
const MyImage = styled.img``;
const MyImageContainer = styled.div`
  width: 100%;
  padding: 0 20px 0 0;
  /* min-height: 323px; */
  display: flex;
`;

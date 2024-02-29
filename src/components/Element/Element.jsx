import React from "react";
import styled from "styled-components";
import { CURRENCY, Context, SERVER_URL } from "../../const";
import { Plus } from "../../icons/plusItemCard";
import { Bag } from "../../icons/Bag";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const SmallItemCard = (props) => {
  let { Cart, isBtb, setCart } = React.useContext(Context);
  //console.log(props);
  return (
    <Card href={`/catalog/item/${props.id}`} style={props.style}>
      <ImageContainer>
        <Image
          loading="lazy"
          srcSet={`${SERVER_URL}${props.attributes.main_image.data.attributes.formats.small.url}`}
        />
        {!isBtb && (
          <BadgeContainer>
            {props.attributes.New && <Badge type="sale">New</Badge>}
            {props.attributes.price_discount && <Badge>Sale</Badge>}
          </BadgeContainer>
        )}
      </ImageContainer>
      {!isBtb && (
        <PriceContainer>
          <CurrentPrice
            style={!props.attributes.price_discount ? { color: "#6E7E44" } : {}}
          >
            {!props.attributes.price_discount
              ? props.attributes.price_b2c
              : props.attributes.price_discount}
            {CURRENCY}
          </CurrentPrice>
          {props.attributes.price_discount && (
            <OriginalPrice>
              {props.attributes.price_b2c}
              {CURRENCY}
            </OriginalPrice>
          )}
        </PriceContainer>
      )}

      {isBtb && (
        <BtbPrice>
          <div>
            <p style={{ fontFamily: "Onest" }}>For partners:</p>
            <NotDiscountPrice>
              {props.attributes.price_b2b}
              {CURRENCY}
            </NotDiscountPrice>
          </div>
          <div>
            <p style={{ fontFamily: "Onest" }}>For clients:</p>

            <NotDiscountPrice>
              {props.attributes.price_b2c}
              {CURRENCY}
            </NotDiscountPrice>
          </div>
        </BtbPrice>
      )}
      <ProductName>{props.attributes.name}</ProductName>
      <DetailsContainer>
        {/* <Size>22 cm</Size> */}
        <Brand>{props.attributes.brand.data.attributes.name}</Brand>
      </DetailsContainer>
      {isBtb ? (
        <ActionContainer>
          <AddToCart
            style={{
              border: "1px solid #A2AC87",
              background: "none",

              color: "#A2AC87",
            }}
          >
            See More Details
          </AddToCart>
        </ActionContainer>
      ) : (
        <ActionContainer
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            e.nativeEvent.stopImmediatePropagation();
            let j = Cart.find((c) => c.id === props.attributes.upc_code);
            if (j !== undefined) {
              j.cart_quntity += 1;
              setCart(Cart);
            } else {
              j = {
                el: props.attributes,
                cart_quntity: 1,
                real_id: props.id,
                id: props.attributes.upc_code,
              };
              setCart(Cart.concat([j]));
            }
          }}
        >
          <AddToCart>
            <Plus mobile={true} />
            Add to Bag
            <Bag mobile={true} />
          </AddToCart>
        </ActionContainer>
      )}
    </Card>
  );
};

export const SmallItemCardSkeleton = () => {
  return (
    <>
      <Skeleton className="skeleton-element" />
      <style jsx={true}>
        {`
          .skeleton-element {
            height: 508px;
            border-radius: 20px;

            @media (max-width: 1000px) {
              border-radius: 12px;
              height: 255px;
            }
          }
        `}
      </style>
    </>
  );
};

const Card = styled.a`
  align-self: stretch;
  border-radius: 20px;
  border: 1px solid rgba(35, 28, 30, 0.1);
  background-color: #fff;
  display: flex;
  max-width: 342px;
  height: fit-content;
  flex-direction: column;
  padding: 16px;
  /* min-height: 310px; */

  transition: box-shadow 700ms;
  &:hover {
    /* transform: scale(1.02); */
    box-shadow: 0px 4px 24px 0px rgba(35, 28, 30, 0.15);
    /* box-shadow: 6px 5px 11px 4px rgb(35 28 30 / 13%); */
  }
  @media (max-width: 1000px) {
    padding: 8px;
    border-radius: 12px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  display: flex;
  aspect-ratio: 1.0130718954248366;
  width: 100%;
  padding: 8px 0 50px;
`;

const Image = styled.img`
  outline: none;
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const BadgeContainer = styled.div`
  display: flex;
  gap: 16px;
  width: fit-content;
`;

const Badge = styled.div`
  z-index: 1;
  color: #fff;
  text-align: center;
  letter-spacing: -0.14px;
  text-transform: uppercase;
  justify-content: center;
  border-radius: 8px;
  width: 55px;

  background-color: ${({ type }) => (type === "sale" ? "#fd8558" : "#ff8db6")};
  flex-grow: 1;
  padding: 8px;
  font: 700 14px/115% Onest, sans-serif;

  @media (max-width: 1000px) {
    border-radius: 4px;
    padding: 4px;
    font-size: 10px;
    width: fit-content;
    line-height: 100%;
  }
`;

const PriceContainer = styled.div`
  border-radius: 12px;
  display: flex;
  margin-top: 16px;
  gap: 8px;
  @media (max-width: 1000px) {
    margin-top: 8px;
  }
`;

const NotDiscountPrice = styled.div`
  color: #6e7e44;
  text-align: center;
  letter-spacing: -0.24px;
  text-transform: uppercase;
  font: 600 24px/100% Onest, sans-serif;
  @media (max-width: 1000px) {
    font: 600 14px/100% Onest, sans-serif;
  }
`;
const CurrentPrice = styled.div`
  color: #ff5d98;
  text-align: center;
  letter-spacing: -0.24px;
  text-transform: uppercase;
  font: 600 24px/100% Onest, sans-serif;
  @media (max-width: 1000px) {
    font: 600 16px/100% Onest, sans-serif;
  }
`;

const OriginalPrice = styled.div`
  color: rgba(35, 28, 30, 0.5);
  text-align: center;
  letter-spacing: -0.16px;
  text-decoration-line: strikethrough;
  text-decoration: line-through;
  text-transform: uppercase;
  margin: auto 0;
  font: 400 16px/100% Onest, sans-serif;
`;

const ProductName = styled.div`
  color: #231c1e;
  letter-spacing: -0.16px;
  text-transform: uppercase;
  margin-top: 16px;
  font: 600 16px/115% Onest, sans-serif;
  @media (max-width: 1000px) {
    font-size: 10px;
    margin-top: 8px;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  margin-top: 6px;
  gap: 12px;
  margin-bottom: 34px;
  @media (max-width: 1000px) {
    margin-bottom: 10px;
  }
`;

const Size = styled.div`
  color: rgba(35, 28, 30, 0.5);
  letter-spacing: -0.16px;
  white-space: nowrap;
  font: 300 16px/115% Onest, sans-serif;
`;

const Brand = styled.div`
  color: rgba(35, 28, 30, 0.5);
  letter-spacing: -0.16px;
  font: 300 16px/115% Onest, sans-serif;
  @media (max-width: 1000px) {
    font-size: 10px;
  }
`;

const ActionContainer = styled.div`
  align-items: center;
  border-radius: 8px;
  backdrop-filter: blur(10px);
  display: flex;
  margin-top: auto;
  justify-content: space-between;
  gap: 16px;
  @media (max-width: 1000px) {
    height: 26px;
    border-radius: 4px;
    margin-top: auto;
  }
`;

const SmallImage = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 40px;
  overflow: hidden;
  max-width: 100%;
`;

const Overlay = styled.div`
  border-radius: 6px;
  background-color: #8eddff;
  display: flex;
  width: 40px;
  height: 40px;
  flex-direction: column;
`;

const AddToCart = styled.div`
  color: #fff;
  text-align: right;
  letter-spacing: -0.16px;
  align-self: center;
  margin: auto 0;
  font: 700 16px/115% Manrope, sans-serif;
  transition: all 500ms;

  &:hover {
    transform: scale(1.02);
    box-shadow: 7px 6px 24px 7px rgb(35 28 30 / 12%);
  }
  background: #a2ac87;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  & img {
    height: 10px;
    margin: 0 4px;
  }
  @media (max-width: 1000px) {
    height: 100%;
    border-radius: 4px;
    color: #fff;

    text-align: right;
    font-family: Manrope;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: 114.972%; /* 11.497px */
    letter-spacing: -0.1px;
  }
`;

const BtbPrice = styled.div`
  display: flex;
  color: rgba(35, 28, 30, 0.5);
  justify-content: space-around;
  padding-top: 13px;

  & p {
    padding-bottom: 8px;
    @media (max-width: 1000px) {
      font-size: 10px;
    }
  }
`;

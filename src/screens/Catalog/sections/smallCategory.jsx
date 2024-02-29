import React from "react";
import styled from "styled-components";
import { SERVER_URL } from "../../../const";

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Container = styled.a`
  width: 342px;
  justify-content: space-between;
  border-radius: 16px;
  background-color: #fff;
  display: flex;
  gap: 0px;
  padding: 0 10px 0 24px;
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
  }
`;

const Title = styled.div`
  color: #231c1e;
  letter-spacing: -0.2px;
  white-space: nowrap;
  font: 500 20px/115% Onest, sans-serif;
`;

const ProductCount = styled.div`
  color: rgba(35, 28, 30, 0.5);
  letter-spacing: -0.14px;
  margin-top: 8px;
  white-space: nowrap;
  font: 400 14px/115% Onest, sans-serif;
`;

const Image = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 120px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  align-self: center;
  max-width: 100%;
  margin: auto 0;
  padding: 10px;
`;
export default function SmallCategory(props) {
  //console.log(props);
  return (
    <Container href={`/catalog/all?category=${props.id}`}>
      <LeftContainer>
        <Title>{props.attributes.name}</Title>
        {/* <ProductCount>1789 products</ProductCount> */}
      </LeftContainer>
      <Image
        loading="lazy"
        srcSet={`${SERVER_URL}${props.attributes.image.data.attributes.url}`}
      />
    </Container>
  );
}

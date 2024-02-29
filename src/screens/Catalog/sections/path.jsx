import React from "react";
import styled from "styled-components";

function PathComponent({
  no_name,
  ProductCountt,
  text,
  brand,
  category,
  new_item,
  sale,
  style,
  collection,
}) {
  let name = "";
  let link = "";
  if (text != null) {
    name = text;
  } else if (brand) {
    name = brand.attributes.name;
    link = "/catalog/all?brand=" + brand.id;
  } else if (category != null) {
    name = category.data.attributes.name;
    link = "/catalog/all?category=" + category.data.id;
  } else if (new_item != null) {
    name = "New";
    link = "/catalog/all?new=true";
  } else if (sale != null) {
    name = "Sale";
    link = "/catalog/all?sale=true";
  } else if (collection != null) {
    console.log(collection);
    name = collection.attributes.Name;
    link = "/catalog/all?collection=" + collection.id;
  }
  //console.log(text, category, sale);
  return (
    <Container style={{ ...style }}>
      <Header>
        <Title href="catalog">Catalog</Title>
        <Image
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/67de30b06c567de2c64449add9c1927db510ce3ca1e41a128e2102e4d28dabc3?apiKey=edb17ceee00945b7af64d5297daca579&"
        />
        <Subtitle href={link}>{name}</Subtitle>
      </Header>
      {no_name != true && (
        <Info>
          <SubtitleBig>{name}</SubtitleBig>
          <ProductCount>{ProductCountt} products</ProductCount>
        </Info>
      )}
    </Container>
  );
}

const Container = styled.div`
  margin: 32px 0 24px 0px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 991px) {
    justify-content: center;
  }
`;

const Title = styled.a`
  color: rgba(35, 28, 30, 0.5);
  letter-spacing: -0.2px;
  align-self: stretch;
  white-space: nowrap;
  font: 300 20px/115% Comic Helvetic, -apple-system, Roboto, Helvetica,
    sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
  }

  transition: all 0.5s;
  &:hover {
    cursor: pointer;
    color: #a2ac87;
  }
`;

const Image = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 20px;
  overflow: hidden;
  max-width: 100%;
  margin: auto 0;
`;

const SubtitleBig = styled.div`
  color: #231c1e;

  font-family: Comic Helvetic;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 114.972%; /* 36.791px */
  letter-spacing: -0.32px;
`;
const Subtitle = styled.a`
  color: rgba(35, 28, 30, 0.5);
  letter-spacing: -0.2px;
  flex-grow: 1;
  white-space: nowrap;
  font: 300 20px/100% Comic Helvetic, -apple-system, Roboto, Helvetica,
    sans-serif;
  transition: all 0.5s;

  &:hover {
    cursor: pointer;
    color: #a2ac87;
  }
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Info = styled.div`
  display: flex;
  align-self: stretch;
  margin-top: 20px;
  justify-content: space-between;
  gap: 10px;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const ProductCount = styled.div`
  color: rgba(35, 28, 30, 0.3);
  letter-spacing: -0.32px;
  flex-grow: 1;
  white-space: nowrap;
  font: 300 32px/115% Comic Helvetic, -apple-system, Roboto, Helvetica,
    sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export default PathComponent;

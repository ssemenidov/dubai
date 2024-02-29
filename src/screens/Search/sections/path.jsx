import React from "react";
import styled from "styled-components";

function PathComponent(props) {
  return (
    <Container style={{ ...props.style }}>
      <Header>
        <Title>Catalog</Title>
        <Image
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/67de30b06c567de2c64449add9c1927db510ce3ca1e41a128e2102e4d28dabc3?apiKey=edb17ceee00945b7af64d5297daca579&"
        />
        <Subtitle>Doudou et Compagnie</Subtitle>
      </Header>
      {props.no_name != true && (
        <Info>
          <SubtitleBig>Doudou et Compagnie</SubtitleBig>
          <ProductCount>1789 products</ProductCount>
        </Info>
      )}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 20px;

  @media (max-width: 991px) {
    justify-content: center;
  }
`;

const Title = styled.div`
  color: rgba(35, 28, 30, 0.5);
  letter-spacing: -0.2px;
  align-self: stretch;
  white-space: nowrap;
  font: 300 20px/115% Comic Helvetic, -apple-system, Roboto, Helvetica,
    sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
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
const Subtitle = styled.div`
  color: rgba(35, 28, 30, 0.5);
  letter-spacing: -0.2px;
  align-self: stretch;
  flex-grow: 1;
  white-space: nowrap;
  font: 300 20px/115% Comic Helvetic, -apple-system, Roboto, Helvetica,
    sans-serif;

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
  padding: 0 20px;

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

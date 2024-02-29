import * as React from "react";
import styled from "styled-components";
import BearImage from "../../../static/img/8b.jpeg";

function ToyComponent(props) {
  return (
    <Container>
      <ImageContainer></ImageContainer>
      <Title>Toys created with</Title>
      <Subtitle>
        <FirstWord>love</FirstWord> and <FirstWord>inspiration</FirstWord>
      </Subtitle>
      <Text>
        We are official distributors of premium brands of French toys in the UAE
      </Text>
      <InfoContainer>
        <Info>
          <Image2 loading="lazy" srcSet={BearImage} />
          <InfoText>&gt;600 toys</InfoText>
          <InfoText>and other products for children</InfoText>
        </Info>
        <Info>
          <InfoText>100%</InfoText>
          <InfoText>warranty on toys and delivery</InfoText>
        </Info>
        <Info>
          <InfoText>5</InfoText>
          <InfoText>brands in stock</InfoText>
        </Info>
      </InfoContainer>
    </Container>
  );
}

const Container = styled.div`
  justify-content: space-between;
  border-radius: 24px;
  background-color: #a2ac87;
  display: flex;
  max-width: 360px;
  flex-direction: column;
  padding: 24px 20px;
`;

const ImageContainer = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  aspect-ratio: 7.38;
  object-fit: contain;
  object-position: center;
  width: 118px;
  overflow: hidden;
  max-width: 100%;
  margin: auto 0;
`;

const Title = styled.div`
  color: #fff;
  letter-spacing: -0.7px;
  margin-top: 35px;
  font: 900 28px/100% Comic Helvetic, -apple-system, Roboto, Helvetica,
    sans-serif;
`;

const Subtitle = styled.div`
  display: flex;
  margin-top: 6px;
  justify-content: space-between;
  gap: 17px;
`;

const FirstWord = styled.div`
  color: #fff;
  letter-spacing: -1.2px;
  font: 900 48px/100% Comic Helvetic, -apple-system, Roboto, Helvetica,
    sans-serif;
`;

const Text = styled.div`
  color: #fff;
  letter-spacing: -0.6px;
  align-self: start;
  margin-top: 19px;
  font: 900 24px/100% Comic Helvetic, -apple-system, Roboto, Helvetica,
    sans-serif;
`;

const InfoContainer = styled.div`
  display: flex;
  margin-top: 49px;
  gap: 8px;
`;

const Info = styled.div`
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 1.18px solid #fff;
  background-color: #fff;
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  padding: 4px 0;
`;

const Image2 = styled.img`
  aspect-ratio: 2.24;
  object-fit: contain;
  object-position: center;
  width: 152px;
  overflow: hidden;
`;

const InfoText = styled.div`
  align-self: stretch;
  color: #6e7e44;
  text-align: center;
  letter-spacing: -0.35px;
  margin-top: 6px;
  white-space: nowrap;
  font: 900 14px/100% Comic Helvetic, -apple-system, Roboto, Helvetica,
    sans-serif;
`;

export default ToyComponent;

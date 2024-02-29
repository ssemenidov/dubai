import styled from "styled-components";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header";
import card_1 from "./icons/card_1.svg";
import card_2 from "./icons/card_2.svg";
import card_3 from "./icons/card_3.svg";
import card_4 from "./icons/card_4.svg";
import card2_1 from "./icons/card2_1.svg";
import card2_2 from "./icons/card2_2.svg";
import card2_3 from "./icons/card2_3.svg";
import card2_4 from "./icons/card2_4.svg";
import card3_1 from "./icons/card3_1.svg";
import card3_2 from "./icons/card3_2.svg";
import card3_3 from "./icons/card3_3.svg";
import { Map } from "./section/map";
import { Form } from "./section/form";
import axios from "axios";

export function LogIn() {
  return (
    <Container>
      <Header />
      <Div44>
        <Form />
      </Div44>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  color: #231c1e;

  font-family: Onest;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 20px */
  letter-spacing: -0.2px;
  height: 100vh;
  display: flex;
  flex-direction: column;

  & p {
    color: #231c1e;
    font-family: Onest;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 115%; /* 18.4px */
    letter-spacing: -0.16px;
  }
`;

const Div44 = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  height: 100%;
  flex-grow: 1;
  min-height: 600px;
`;

const Contacts = styled.div`
  width: 100%;
  gap: 24px;
  display: grid;
  grid-template-areas: "a a" "b b";

  & > a {
    color: #fff;
    text-align: center;
    text-align: right;
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 114.972%; /* 18.395px */
    letter-spacing: -0.16px;
    border-radius: 8px;
    background: rgba(162, 172, 135, 0.5);

    backdrop-filter: blur(10px);
    width: 100%;
    padding: 8px 0;

    text-align: center;
    @media (max-width: 900px) {
      grid-column: 1/3;
    }
    transition: all 0.5s;
    cursor: pointer;
    &:hover {
      transform: scale(1.03);
    }
  }
`;
const WhiteContainer = styled.div`
  border-radius: 32px;
  background: #fff;
  display: flex;
  padding: 40px;
  flex-direction: row;
  margin-top: 20px;
  @media (max-width: 900px) {
    gap: 16px;
    flex-direction: column;
  }
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 24px;
  max-width: 610px;
  width: 100%;
  height: 295px;
  padding: 16px 24px;
  overflow: hidden;

  justify-content: flex-end;
  gap: 16px;
  & img {
    width: 160px;
    height: 160px;
    padding: 53px;
    border-radius: 80px;
    background: #a2ac87;
    position: absolute;

    right: -40px;
    top: -47px;
  }
`;
const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: space-around;
`;
const FlexHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const GreenHeader = styled.div`
  color: #a2ac87;

  font-family: Comic Helvetic;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 114.972%; /* 36.791px */
  letter-spacing: -0.32px;
`;
const GreyText = styled.div`
  color: #231c1e;

  font-family: Onest;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 115%; /* 18.4px */
  letter-spacing: -0.16px;
`;
const OurShopName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }

  & img {
    @media (max-width: 900px) {
      width: 100%;
      height: auto;
    }
  }
  & > p {
    max-width: 700px;
  }
`;

const Input = styled.input`
  border: none;
  border-radius: 8px;
  background: #f6f6f6;
  height: 60px;
  padding: 0px 20px;
  width: 100%;
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
  &:target,
  &:focus-visible {
    outline: none;
    border: 2px solid rgba(35, 28, 30, 0.4);
  }
`;

const RedStar = styled.div`
  content: "*";
  color: red;
`;

const Bottom = styled.div`
  display: flex;
  padding: 40px 0 20px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 900px) {
    text-align: center;
    gap: 24px;
    flex-direction: column;
  }
  & > div {
    max-width: 829px;
  }

  & > a {
    padding: 10px 15px;
    border-radius: 8px;
    background: #231c1e;

    color: #fff;

    text-align: center;
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: 114.972%; /* 18.395px */
    letter-spacing: -0.16px;
    text-transform: uppercase;
    transition: all 0.5s;
    cursor: pointer;
    &:hover {
      transform: scale(1.03);
    }
  }
`;

const ImgCard3 = styled.img`
  padding: 117.793px 89px 118.207px 89px;
  @media (max-width: 600px) {
    padding: 0;
  }
`;

import React from "react";
import styled from "styled-components";
import bag from "./bag.svg";
import { Context } from "../../../const";

const UpdatedComponent = (props) => {
  return (
    <Container>
      <Logo src={bag} />
      <Message>Your application is accepted!</Message>
      <Email>We will respond to you at the email address you provided:</Email>
      <Address>{props.email}</Address>
      <ThankYou>Thank you for choosing us!</ThankYou>
    </Container>
  );
};

const Container = styled.div`
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 32px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 50px 20px;
`;

const Logo = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 80px;
  overflow: hidden;
  margin-top: 12px;
  max-width: 100%;
`;

const Message = styled.div`
  color: #231c1e;
  text-align: center;
  letter-spacing: -0.32px;
  margin-top: 20px;
  font: 500 32px/115% Comic Helvetic, -apple-system, Roboto, Helvetica,
    sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Email = styled.div`
  align-self: stretch;
  color: #231c1e;
  text-align: center;
  letter-spacing: -0.24px;
  margin-top: 20px;
  font: 300 24px/115% Onest, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Address = styled.div`
  align-self: stretch;
  color: #6e7e44;
  text-align: center;
  letter-spacing: -0.24px;
  text-decoration-line: underline;
  margin-top: 20px;
  font: 300 24px/115% Onest, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ThankYou = styled.div`
  align-self: stretch;
  color: rgba(35, 28, 30, 0.5);
  text-align: center;
  letter-spacing: -0.2px;
  margin: 20px 0 12px;
  font: 300 20px/115% Onest, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export default UpdatedComponent;

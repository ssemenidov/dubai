import * as React from "react";
import styled from "styled-components";

export function Form2(props) {
  return (
    <Div>
      <Div2>Delivery Information:</Div2>
      <Div3>
        <Div4>
          <Column>
            <Div5>
              <Div6>
                <Div7>Country</Div7>
                <Div8>*</Div8>
              </Div6>
              <Div9>Your Country</Div9>
              <Div10>
                <Div11>City</Div11>
                <Div12>*</Div12>
              </Div10>
              <Div13>Your City</Div13>
              <Div14>Street</Div14>
              <Div15>Your Street</Div15>
              <Div16>District</Div16>
              <Div17>Your District</Div17>
              <Div18>
                <Div19>
                  <Div20>
                    <Div21>Building</Div21>
                    <Div22>*</Div22>
                  </Div20>
                  <Div23>Your Building</Div23>
                </Div19>
                <Div24>
                  <Div25>Floor</Div25>
                  <Div26>Your Floor</Div26>
                </Div24>
                <Div27>
                  <Div28>Apartment</Div28>
                  <Div29>Your Apartment</Div29>
                </Div27>
                <Div30>
                  <Div31>Zip Code</Div31>
                  <Div32>Your Zip Code</Div32>
                </Div30>
              </Div18>
            </Div5>
          </Column>
          <Column2>
            <Div33>
              <Div34>
                Carefully fill out your personal information, we transfer this
                data to the company to deliver your order!
              </Div34>
              <Div35>
                Fields marked{" "}
                <span style="font-weight: 600; color: rgba(245,58,111,1);">
                  *
                </span>
              </Div35>
              <Div36>Add delivery instructions:</Div36>
              <Div37>Your comment</Div37>
            </Div33>
          </Column2>
        </Div4>
      </Div3>
    </Div>
  );
}

const Div = styled.div`
  justify-content: center;
  align-self: stretch;
  border-radius: 32px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 40px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Div2 = styled.div`
  color: #231c1e;
  text-align: center;
  letter-spacing: -0.16px;
  font: 600 16px/100% Onest, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div3 = styled.div`
  margin-top: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div4 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 66%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div5 = styled.div`
  align-items: flex-start;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Div6 = styled.div`
  align-self: start;
  display: flex;
  gap: 0px;
`;

const Div7 = styled.div`
  color: #231c1e;
  letter-spacing: -0.16px;
  flex-grow: 1;
  white-space: nowrap;
  font: 400 16px/115% Onest, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div8 = styled.div`
  color: #e12373;
  letter-spacing: -0.16px;
  white-space: nowrap;
  font: 500 16px/115% Onest, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div9 = styled.div`
  color: rgba(35, 28, 30, 0.5);
  letter-spacing: -0.2px;
  white-space: nowrap;
  align-items: start;
  align-self: stretch;
  border-radius: 8px;
  background-color: #f6f6f6;
  margin-top: 8px;
  justify-content: center;
  padding: 19px 60px 19px 20px;
  font: 300 20px/115% Onest, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    max-width: 100%;
    padding-right: 20px;
  }
`;

const Div10 = styled.div`
  align-self: start;
  display: flex;
  margin-top: 24px;
  gap: 0px;
`;

const Div11 = styled.div`
  color: #231c1e;
  letter-spacing: -0.16px;
  flex-grow: 1;
  white-space: nowrap;
  font: 400 16px/115% Onest, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div12 = styled.div`
  color: #e12373;
  letter-spacing: -0.16px;
  white-space: nowrap;
  font: 500 16px/115% Onest, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div13 = styled.div`
  color: rgba(35, 28, 30, 0.5);
  letter-spacing: -0.2px;
  white-space: nowrap;
  align-items: start;
  align-self: stretch;
  border-radius: 8px;
  background-color: #f6f6f6;
  margin-top: 8px;
  justify-content: center;
  padding: 19px 60px 19px 20px;
  font: 300 20px/115% Onest, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    max-width: 100%;
    padding-right: 20px;
  }
`;

const Div14 = styled.div`
  color: #231c1e;
  letter-spacing: -0.16px;
  align-self: stretch;
  margin-top: 24px;
  font: 400 16px/115% Onest, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div15 = styled.div`
  color: rgba(35, 28, 30, 0.5);
  letter-spacing: -0.2px;
  white-space: nowrap;
  align-items: start;
  align-self: stretch;
  border-radius: 8px;
  background-color: #f6f6f6;
  margin-top: 8px;
  justify-content: center;
  padding: 19px 60px 19px 20px;
  font: 300 20px/115% Onest, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    max-width: 100%;
    padding-right: 20px;
  }
`;

const Div16 = styled.div`
  color: #231c1e;
  letter-spacing: -0.16px;
  align-self: stretch;
  margin-top: 24px;
  font: 400 16px/115% Onest, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div17 = styled.div`
  color: rgba(35, 28, 30, 0.5);
  letter-spacing: -0.2px;
  white-space: nowrap;
  align-items: start;
  align-self: stretch;
  border-radius: 8px;
  background-color: #f6f6f6;
  margin-top: 8px;
  justify-content: center;
  padding: 19px 60px 19px 20px;
  font: 300 20px/115% Onest, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    max-width: 100%;
    padding-right: 20px;
  }
`;

const Div18 = styled.div`
  align-self: stretch;
  display: flex;
  margin-top: 24px;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Div19 = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
`;

const Div20 = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0px;
`;

const Div21 = styled.div`
  color: #231c1e;
  letter-spacing: -0.16px;
  font: 400 16px/115% Onest, sans-serif;
`;

const Div22 = styled.div`
  color: #e12373;
  letter-spacing: -0.16px;
  white-space: nowrap;
  font: 500 16px/115% Onest, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div23 = styled.div`
  color: rgba(35, 28, 30, 0.5);
  letter-spacing: -0.2px;
  white-space: nowrap;
  border-radius: 8px;
  background-color: #f6f6f6;
  margin-top: 8px;
  justify-content: center;
  padding: 19px 44px 19px 20px;
  font: 300 20px/115% Onest, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding-right: 20px;
  }
`;

const Div24 = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
`;

const Div25 = styled.div`
  color: #231c1e;
  letter-spacing: -0.16px;
  font: 400 16px/115% Onest, sans-serif;
`;

const Div26 = styled.div`
  color: rgba(35, 28, 30, 0.5);
  letter-spacing: -0.2px;
  white-space: nowrap;
  align-items: start;
  border-radius: 8px;
  background-color: #f6f6f6;
  margin-top: 8px;
  justify-content: center;
  padding: 19px 60px 19px 20px;
  font: 300 20px/115% Onest, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding-right: 20px;
  }
`;

const Div27 = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
`;

const Div28 = styled.div`
  color: #231c1e;
  letter-spacing: -0.16px;
  font: 400 16px/115% Onest, sans-serif;
`;

const Div29 = styled.div`
  color: rgba(35, 28, 30, 0.5);
  letter-spacing: -0.2px;
  white-space: nowrap;
  border-radius: 8px;
  background-color: #f6f6f6;
  margin-top: 8px;
  justify-content: center;
  padding: 19px;
  font: 300 20px/115% Onest, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div30 = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
`;

const Div31 = styled.div`
  color: #231c1e;
  letter-spacing: -0.16px;
  font: 400 16px/115% Onest, sans-serif;
`;

const Div32 = styled.div`
  color: rgba(35, 28, 30, 0.5);
  letter-spacing: -0.2px;
  white-space: nowrap;
  border-radius: 8px;
  background-color: #f6f6f6;
  margin-top: 8px;
  justify-content: center;
  padding: 19px 34px 19px 20px;
  font: 300 20px/115% Onest, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding-right: 20px;
  }
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 34%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div33 = styled.div`
  justify-content: space-between;
  align-self: stretch;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div34 = styled.div`
  color: #000;
  letter-spacing: -0.2px;
  font: 300 20px/23px Onest, sans-serif;
`;

const Div35 = styled.div`
  color: #f53a6f;
  letter-spacing: -0.2px;
  margin-top: 20px;
  font: 300 20px/115% Onest, sans-serif;
`;

const Div36 = styled.div`
  color: #231c1e;
  letter-spacing: -0.16px;
  margin-top: 218px;
  font: 400 16px/115% Onest, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div37 = styled.div`
  color: rgba(35, 28, 30, 0.5);
  letter-spacing: -0.16px;
  white-space: nowrap;
  align-items: start;
  border-radius: 8px;
  background-color: #f6f6f6;
  margin-top: 8px;
  padding: 20px 60px 106px 20px;
  font: 300 16px/115% Onest, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px 40px 0;
  }
`;



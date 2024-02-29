import * as React from "react";
import styled from "styled-components";
import MapSvg from "../icons/map.svg";

export function Map(props) {
  return (
    <Div>
      <Div2></Div2>
      <Div5>
        <Div6>
          <Column>
            <Div3>For our retailers</Div3>
            <Div7>
              <Div8>
                We assist in selecting best selling products for our partners.
              </Div8>
              <Div9>Staff trainings</Div9>
              <Div10>We do staff training for our key partners:</Div10>
              <Div11>
                <Div12 />
                <Div13>2 times per year</Div13>
              </Div11>
              <Div14>
                <Div15 />
                <Div16>every new collectiones</Div16>
              </Div14>
            </Div7>
          </Column>
          <Column2>
            <Div4>
              Located in Dubai, with our warehouse in Al Quozwe provide fast
              deliveries and flexible minimum order quantities.
            </Div4>
            <Img loading="lazy" src={MapSvg} />
          </Column2>
        </Div6>
      </Div5>
    </Div>
  );
}

const Div = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const Div2 = styled.div`
  justify-content: space-between;
  align-items: start;
  display: flex;
  gap: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Div3 = styled.div`
  color: #a2ac87;
  letter-spacing: -1px;
  text-transform: uppercase;
  flex-grow: 1;
  flex-basis: auto;
  font: 900 40px/100% Comic Helvetic, -apple-system, Roboto, Helvetica,
    sans-serif;
`;

const Div4 = styled.div`
  max-width: 650px;
  color: #2d2326;
  letter-spacing: -0.24px;
  align-self: stretch;
  flex-grow: 1;
  flex-basis: auto;
  font: 400 24px/28px Onest, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 30px;
  }
`;

const Div5 = styled.div`
  margin-top: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div6 = styled.div`
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
  width: 50%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div7 = styled.div`
  justify-content: space-between;
  align-self: stretch;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 24px 0;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 15px;
  }
`;

const Div8 = styled.div`
  color: #6e7e44;
  letter-spacing: -0.36px;
  font: 500 36px/41px Comic Helvetic, -apple-system, Roboto, Helvetica,
    sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 25px;
    line-height: 25px;
    margin-top: -20px;
  }
`;

const Div9 = styled.div`
  color: #a2ac87;
  letter-spacing: -0.6px;
  text-transform: uppercase;
  margin-top: 217px;
  font: 900 24px/100% Comic Helvetic, -apple-system, Roboto, Helvetica,
    sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Div10 = styled.div`
  color: #2d2326;
  letter-spacing: -0.2px;
  margin-top: 8px;
  font: 400 20px/115% Onest, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div11 = styled.div`
  align-items: center;
  display: flex;
  margin-top: 24px;
  justify-content: space-between;
  gap: 16px;
  padding: 0 16px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    padding-right: 20px;
  }
`;

const Div12 = styled.div`
  background-color: #a2ac87;
  border-radius: 50%;
  display: flex;
  width: 12px;
  height: 12px;
  flex-direction: column;
  margin: auto 0;
`;

const Div13 = styled.div`
  color: #2d2326;
  letter-spacing: -0.6px;
  align-self: stretch;
  flex-grow: 1;
  white-space: nowrap;
  font: 400 24px/100% Onest, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div14 = styled.div`
  align-items: center;
  display: flex;
  margin-top: 16px;
  justify-content: space-between;
  gap: 16px;
  padding: 0 16px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding-right: 20px;
  }
`;

const Div15 = styled.div`
  background-color: #a2ac87;
  border-radius: 50%;
  border-radius: 50%;
  display: flex;
  width: 12px;
  height: 12px;
  flex-direction: column;
  margin: auto 0;
`;

const Div16 = styled.div`
  color: #2d2326;
  letter-spacing: -0.6px;
  align-self: stretch;
  flex-grow: 1;
  white-space: nowrap;
  font: 400 24px/100% Onest, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 20px;
  gap: 20px;
  @media (max-width: 991px) {
    gap: 0px;
    width: 100%;
    margin-left: 0;
  }
`;

const Img = styled.img`
  aspect-ratio: 1.35;
  object-fit: contain;
  object-position: center;
  width: 100%;
  align-self: stretch;
  overflow: hidden;
  margin: auto 0;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

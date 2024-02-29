import React from "react";
import styled from "styled-components";

const StyledNamecandidateNameViewScore10009 = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  left: 50px;
  padding: 60px 0px;
  position: absolute;
  top: 6600px;
  width: 1340px;

  & .view-104 {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 10px;
    position: relative;
  }

  & .text-wrapper-50 {
    color: #231c1e;
    font-family: "Onest", Helvetica;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.24px;
    line-height: 24px;
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .if-you-are {
    color: #2d2326;
    font-family: "Onest", Helvetica;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: -0.24px;
    line-height: 27.6px;
    position: relative;
    width: 829px;
  }

  & .become-a-partner-wrapper {
    align-items: center;
    background-color: #231c1e;
    border-radius: 8px;
    display: flex;
    gap: 16px;
    justify-content: center;
    overflow: hidden;
    padding: 16px;
    position: relative;
    width: 190px;
  }

  & .become-a-partner {
    color: #ffffff;
    font-family: "Manrope", Helvetica;
    font-size: 16px;
    font-weight: 800;
    letter-spacing: -0.16px;
    line-height: 18.4px;
    margin-top: -3px;
    position: relative;
    text-align: center;
    white-space: nowrap;
    width: fit-content;
  }
`;

export const NamecandidateNameViewScore10009 = () => {
  return (
    <StyledNamecandidateNameViewScore10009>
      <div className="view-104">
        <p className="text-wrapper-50">We are open to wholesale cooperation.</p>
        <p className="if-you-are">
          If you are interested in cooperation, then leave your contact
          <br />
          information and we will contact you!
        </p>
      </div>
      <div className="become-a-partner-wrapper">
        <div className="become-a-partner">BECOME A PARTNER</div>
      </div>
    </StyledNamecandidateNameViewScore10009>
  );
};

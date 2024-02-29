import React from "react";
import styled from "styled-components";

export function PageSelection({ page, onChange, pageCount }) {
  console.log(page);
  //console.log(pageCount);
  return (
    <Container>
      <Button
        onClick={() => {
          if (page > 1) {
            onChange(page - 1);
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M15.833 10L4.16634 10M4.16634 10L9.99967 4.16669M4.16634 10L9.99967 15.8334"
            stroke="#231C1E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>
      <div style={{ display: "flex", gap: "20px", padding: "0 40px 0 40px" }}>
        {Array.from(Array(pageCount).keys())
          .filter((x) => Math.abs(x - page + 1) < 3)
          .map((i) => (
            <div
              style={{ color: page == i + 1 ? "#A2AC87" : "" }}
              className="number"
              onClick={function () {
                onChange(i + 1);
              }}
            >
              {i + 1}
            </div>
          ))}
      </div>
      <Button
        onClick={() => {
          if (page < pageCount) {
            onChange(page + 1);
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M4.16699 10L15.8337 10M15.8337 10L10.0003 4.16669M15.8337 10L10.0003 15.8334"
            stroke="#231C1E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 30px;
  margin: 30px 0 20px 0;

  color: #231c1e;

  text-align: center;
  font-family: Onest;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 114.972%; /* 27.593px */
  letter-spacing: -0.24px;
  text-transform: uppercase;

  & .number:hover {
    cursor: pointer;
  }
`;
const Button = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
`;

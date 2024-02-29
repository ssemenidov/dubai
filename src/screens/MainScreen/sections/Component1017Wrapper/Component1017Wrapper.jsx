import React from "react";
import { Footer } from "../../../../components/footer/footer";
import styled from "styled-components";

const StyledComponent1017Wrapper = styled.div`
  left: 0 !important;
  position: absolute !important;
  top: 6870px !important;
`;

export const Component1017Wrapper = () => {
  return (
    <StyledComponent1017Wrapper className="component-1017-instance">
      <Footer
        img="/img/14-2x.png"
        phoneCall="/img/phone-call-01-1.svg"
        subtract="/img/subtract-15.svg"
        subtract1="/img/subtract-16.svg"
      />
    </StyledComponent1017Wrapper>
  );
};

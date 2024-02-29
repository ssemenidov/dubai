import React from "react";
import { View } from "./sections/View";
import { ViewWrapper } from "./sections/ViewWrapper";
import styled from "styled-components";

const StyledNamecandidateNameViewScore10005 = styled.div`
  align-items: flex-start;
  display: flex;
  height: 800px;
  justify-content: space-between;
  left: 50px;
  overflow: hidden;
  padding: 40px 0px 0px;
  position: absolute;
  top: 3280px;
  width: 1340px;
`;

export const NamecandidateNameViewScore10005 = () => {
  return (
    <StyledNamecandidateNameViewScore10005>
      <View />
      <ViewWrapper />
    </StyledNamecandidateNameViewScore10005>
  );
};

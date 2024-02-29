import React from "react";
import styled from "styled-components";

const Container = styled.div`
  align-items: flex-start;
  border-radius: 0px 16px 16px 0px;
  background-color: #fff;
  display: flex;
  width: 240px;
  flex-direction: column;
  height: min-content;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const FilterTitle = styled.div`
  color: #231c1e;
  letter-spacing: -0.24px;
  align-self: start;
  white-space: nowrap;
  padding: 20px 20px 20px 50px;
  font: 500 24px/115% Onest, sans-serif;
`;

const Image = styled.img`
  aspect-ratio: 240;
  object-fit: contain;
  object-position: center;
  width: 100%;
  align-self: stretch;
  stroke-width: 1px;
  stroke: rgba(35, 28, 30, 0.2);
  overflow: hidden;
  margin-top: 20px;
`;

const FilterSection = styled.div`
  justify-content: space-between;
  align-self: center;
  display: flex;
  padding: 20px 20px 20px 50px;
  width: 240px;
  border-top: 1px solid grey;
`;

const FilterSubtitle = styled.div`
  color: #231c1e;
  letter-spacing: -0.2px;
  font: 400 20px/115% Onest, sans-serif;
`;

const Image2 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 20px;
  overflow: hidden;
  align-self: center;
  max-width: 100%;
  margin: auto 0;
`;

const Image4 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 20px;
  overflow: hidden;
  align-self: center;
  max-width: 100%;
  margin: auto 0;
`;

const Image6 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
  flex: 1;
  margin: auto 0;
`;

const Image8 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 20px;
  overflow: hidden;
  align-self: center;
  max-width: 100%;
  margin: auto 0;
`;

function ProductFilter(props) {
  return (
    <Container>
      <FilterTitle>Filtr:</FilterTitle>
      <FilterSection>
        <FilterSubtitle>Price</FilterSubtitle>
        <Image2
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/968a5580497a31c1751e51561759e250ba17399db9afd9fe5c252edae4a5847b?apiKey=edb17ceee00945b7af64d5297daca579&"
        />
      </FilterSection>
      <FilterSection>
        <FilterSubtitle>Color</FilterSubtitle>
        <Image2
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/968a5580497a31c1751e51561759e250ba17399db9afd9fe5c252edae4a5847b?apiKey=edb17ceee00945b7af64d5297daca579&"
        />
      </FilterSection>
      <FilterSection>
        <FilterSubtitle>Size</FilterSubtitle>
        <Image2
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/968a5580497a31c1751e51561759e250ba17399db9afd9fe5c252edae4a5847b?apiKey=edb17ceee00945b7af64d5297daca579&"
        />
      </FilterSection>
      <FilterSection>
        <FilterSubtitle>Type</FilterSubtitle>
        <Image2
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/968a5580497a31c1751e51561759e250ba17399db9afd9fe5c252edae4a5847b?apiKey=edb17ceee00945b7af64d5297daca579&"
        />
      </FilterSection>
    </Container>
  );
}
export default ProductFilter;

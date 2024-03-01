import React, { useEffect, useState } from "react";
import styled from "styled-components";
import like from "./like.svg";
import { CURRENCY } from "../../../const";
import axios from "axios";
import b_arrow from "./bottom-arrow.svg";
import { useSearchParams } from "react-router-dom";
import { Context, SERVER_URL } from "../../../const";
import { Slider, RangeSlider, Row, Col, InputGroup, InputNumber } from "rsuite";
import "rsuite/Slider/styles/index.css";
import "rsuite/RangeSlider/styles/index.css";
import "rsuite/InputNumber/styles/index.css";

function Example2({ value, setValue, maxPrice }) {
  return (
    <Row>
      <Col md={10} style={{ marginBottom: "20px", padding: "0 20px" }}>
        <RangeSlider
          progress
          tooltip={false}
          style={{ marginTop: 16 }}
          max={maxPrice}
          value={value}
          onChange={(value) => {
            setValue(value);
          }}
        />
      </Col>
      <Col md={8}>
        <InputGroup>
          <InputNumber
            min={0}
            max={maxPrice}
            value={value[0]}
            step={10}
            onChange={(nextValue) => {
              const [start, end] = value;
              if (+nextValue > +end) {
                return;
              }
              setValue([+nextValue, +end]);
            }}
          />
          <InputGroup.Addon>to</InputGroup.Addon>
          <InputNumber
            min={0}
            max={maxPrice}
            value={value[1]}
            step={10}
            onChange={(nextValue) => {
              const [start, end] = value;
              console.log("input2 ", start, nextValue);
              if (+start > +nextValue) {
                return;
              }
              setValue([+start, +nextValue]);
            }}
          />
        </InputGroup>
      </Col>
    </Row>
  );
}

const Container = styled.div`
  align-items: flex-start;
  border-radius: 0px 16px 16px 0px;
  background-color: #fff;
  display: flex;
  width: 263px;
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
  width: 263px;
  border-top: 1px solid grey;
  flex-direction: column;
`;

const FilterSubtitle = styled.div`
  color: #231c1e;
  display: flex;
  align-items: center;
  gap: 4px;
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
  transition: all 0.5s;
  .selected & {
    transform: rotate(180deg);
  }
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
  const [Selected, setSelected] = useState({});
  const [Data, setData] = useState([]);
  const [Colors, setColors] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const brand = searchParams.get("brand");
  const category = searchParams.get("category");
  const collection = searchParams.get("collection");
  const new_items = searchParams.get("new");
  const sale = searchParams.get("sale");

  let maxPrice = 0;
  if (Data.length != 0) {
    maxPrice = Data.map((x) => x.attributes.price_b2c);
    maxPrice = maxPrice.reduce((a, c) => Math.max(a, c));
  }
  console.log(maxPrice);
  // Our States
  const [value, setValue] = React.useState(
    props.Price.length != 0
      ? [props.Price[0].min, props.Price[0].max]
      : [0, maxPrice]
  );

  // Changing State when volume increases/decreases
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    //console.log(newValue);
  };

  useEffect(() => {
    axios
      .get(
        `${SERVER_URL}/api/items?populate=collections,categories&${
          brand ? `filters[brand][id][$eq]=${brand}` : ""
        }&${
          category ? `filters[$or][0][categories][id][$in]=${category}` : ""
        }&${
          category
            ? `filters[$or][1][categories][parent][id][$in]=${category}`
            : ""
        }&${
          category
            ? `filters[$or][2][categories][parent][parent][id][$in]=${category}`
            : ""
        }&${
          category
            ? `filters[$or][3][categories][parent][parent][id][$in]=${category}`
            : ""
        }&${new_items ? "filters[New]=true" : ""}&${
          sale ? "filters[price_discount][$notNull]=true" : ""
        }&${
          collection ? `filters[collections][id][$eq]=${collection}` : ""
        }&pagination[pageSize]=200&
        `
      )
      .then((response) => {
        setData(response.data.data);
        if (response.data.data.length != 0 && value[0] == 0 && value[1] == 0) {
          maxPrice = response.data.data
            .map((x) => x.attributes.price_b2c)
            .reduce((a, c) => Math.max(a, c));
          setValue([0, maxPrice]);
          console.log("price", maxPrice);
        }
      })
      .catch((err) => {
        //console.log(err);
      });

    axios
      .get(`${SERVER_URL}/api/filter-color?populate=colors`)
      .then((response) => {
        console.log(response.data.data.attributes.colors);
        setColors(response.data.data.attributes.colors);
      })
      .catch((err) => {
        //console.log(err);
      });
  }, []);

  return (
    <Container>
      <FilterTitle>Filtr:</FilterTitle>
      <FilterSection>
        <FilterSelect
          onClick={() => {
            setSelected({ ...Selected, Price: !Selected.Price });
          }}
          className={Selected.Price ? "selected" : "lol"}
        >
          <FilterSubtitle>
            Price
            {props.Price.length != 0 && <FilterCount>1 filtr</FilterCount>}
          </FilterSubtitle>
          <Image2 loading="lazy" src={b_arrow} />
        </FilterSelect>
        <FilterChoice
          style={{
            gridTemplateRows: `repeat(1,${Selected.Price ? "1fr" : "0fr"}`,
            gap: Selected.Price ? "8px" : "0",
            paddingTop: Selected.Price ? "24px" : "0",
            margin: "0 -12px",
          }}
        >
          {/* {[
            {
              color: "#9E673F",
              name: `0 - 100`,
              min: 0,
              max: 100,
            },
            {
              color: "#DEBCA3",
              name: `100 - 150`,
              min: 100,
              max: 150,
            },
            {
              color: "#fff",
              name: `150 +`,
              min: 150,
              max: 10000000,
            },
          ].map((x) => (
            <FilterItem>
              <Checkbox
                className={
                  props.Price.findIndex((c) => c.name === x.name) != -1
                    ? "checkbox-selected"
                    : "lol"
                }
                onClick={function () {
                  if (props.Price.findIndex((c) => c.name === x.name) === -1) {
                    props.setPrice([...props.Price, x]);
                  } else {
                    props.setPrice(props.Price.filter((c) => c.name != x.name));
                  }
                }}
              />
              <GreyText>{x.name}</GreyText>
            </FilterItem>
          ))} */}
          {Data.length != 0 && (
            <Example2
              style={{ margin: "0 -8px" }}
              value={value}
              setValue={(c) => {
                setValue(c);
                console.log("change", c);
                props.setPrice([
                  {
                    min: c[0],
                    max: c[1],
                  },
                ]);
                if (c[1] == maxPrice && c[0] == 0) {
                  props.setPrice([]);
                }
              }}
              maxPrice={Data.map((x) => x.attributes.price_b2c).reduce((a, c) =>
                Math.max(a, c)
              )}
            />
          )}
        </FilterChoice>
      </FilterSection>

      <FilterSection>
        <FilterSelect
          onClick={() => {
            setSelected({ ...Selected, Color: !Selected.Color });
          }}
          className={Selected.Color ? "selected" : "lol"}
        >
          <FilterSubtitle>
            Color
            {props.Colors.length != 0 && (
              <FilterCount>{props.Colors.length} filtr</FilterCount>
            )}
          </FilterSubtitle>
          <Image2 loading="lazy" src={b_arrow} />
        </FilterSelect>
        <FilterChoice
          style={{
            gridTemplateRows: `repeat(${
              [...new Set(Data.map((item) => item.attributes.color))].length
            },${Selected.Color ? "1fr" : "0fr"}`,
            gap: Selected.Color ? "8px" : "0",
            paddingTop: Selected.Color ? "12px" : "0",
          }}
        >
          {[...new Set(Data.map((item) => item.attributes.color))]
            .filter((x) => x != null)

            .map((x) => {
              return Colors.find(
                (z) => z.name === x.charAt(0).toUpperCase() + x.slice(1)
              );
            })
            .filter((x) => x != null)
            .map((x) => (
              <FilterItem>
                <Checkbox
                  className={
                    props.Colors.findIndex((c) => c === x.name) != -1
                      ? "checkbox-selected"
                      : "lol"
                  }
                  onClick={function () {
                    if (props.Colors.findIndex((c) => c === x.name) === -1) {
                      props.setColors([...props.Colors, x.name]);
                    } else {
                      props.setColors(props.Colors.filter((c) => c != x.name));
                    }
                  }}
                />
                <ColorCircle
                  color={x.color}
                  style={{
                    border: x.border != null ? `1px solid ${x.border}` : "none",
                  }}
                />
                <GreyText>{x.name}</GreyText>
              </FilterItem>
            ))}
        </FilterChoice>
      </FilterSection>
      <FilterSection>
        <FilterSelect
          onClick={() => {
            setSelected({ ...Selected, Size: !Selected.Size });
          }}
          className={Selected.Size ? "selected" : "lol"}
        >
          <FilterSubtitle>
            Size
            {props.Sizes.length != 0 && (
              <FilterCount>{props.Sizes.length} filtr</FilterCount>
            )}
          </FilterSubtitle>
          <Image2 loading="lazy" src={b_arrow} />
        </FilterSelect>

        <FilterChoice
          style={{
            gridTemplateRows: `repeat(${
              [...new Set(Data.map((item) => item.attributes.size))].filter(
                (x) => x != null
              ).length
            },${Selected.Size ? "1fr" : "0fr"}`,
            gap: Selected.Size ? "8px" : "0",
            paddingTop: Selected.Size ? "12px" : "0",
          }}
        >
          {[...new Set(Data.map((item) => item.attributes.size))]
            .sort()
            .filter((x) => x != null)
            .map((x) => (
              <FilterItem>
                <Checkbox
                  className={
                    props.Sizes.findIndex((c) => c === x) != -1
                      ? "checkbox-selected"
                      : "lol"
                  }
                  onClick={function () {
                    if (props.Sizes.findIndex((c) => c === x) === -1) {
                      props.setSizes([...props.Sizes, x]);
                    } else {
                      props.setSizes(props.Sizes.filter((c) => c != x));
                    }
                  }}
                />
                <GreyText>{x}</GreyText>
              </FilterItem>
            ))}
        </FilterChoice>
      </FilterSection>
      <FilterSection>
        <FilterSelect
          onClick={() => {
            setSelected({ ...Selected, Type: !Selected.Type });
          }}
          className={Selected.Type ? "selected" : "lol"}
        >
          <FilterSubtitle>
            Categories
            {props.Type.length != 0 && (
              <FilterCount>{props.Type.length} filtr</FilterCount>
            )}
          </FilterSubtitle>
          <Image2 loading="lazy" src={b_arrow} />
        </FilterSelect>

        <FilterChoice
          style={{
            gridTemplateRows: `repeat(${
              [
                ...new Map(
                  Data.map((item) =>
                    item.attributes.categories.data.map((x) => [x.id, x])
                  ).flat(1)
                ).values(),
              ].filter((x) => x.id != category).length
            },${Selected.Type ? "1fr" : "0fr"}`,
            gap: Selected.Type ? "8px" : "0",
            paddingTop: Selected.Type ? "12px" : "0",
          }}
        >
          {[
            ...new Map(
              Data.map((item) =>
                item.attributes.categories.data.map((x) => [x.id, x])
              ).flat(1)
            ).values(),
          ]
            .filter((x) => x.id != category)
            .sort((a, b) => a.attributes.name > b.attributes.name)
            .map((x) => (
              <FilterItem>
                <Checkbox
                  className={
                    props.Type.findIndex((c) => c === x.id) != -1
                      ? "checkbox-selected"
                      : "lol"
                  }
                  onClick={function () {
                    if (props.Type.findIndex((c) => c === x.id) === -1) {
                      props.setType([...props.Type, x.id]);
                    } else {
                      props.setType(props.Type.filter((c) => c != x.id));
                    }
                  }}
                />
                <GreyText>{x.attributes.name}</GreyText>
              </FilterItem>
            ))}
        </FilterChoice>
      </FilterSection>
    </Container>
  );
}
export default ProductFilter;

const FilterCount = styled.div`
  color: rgba(35, 28, 30, 0.5);

  font-family: Onest;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  letter-spacing: -0.14px;
`;
const FilterSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const FilterChoice = styled.div`
  padding-top: 16px;
  gap: 8px;
  display: grid;

  grid-template-rows: 1fr;

  transition: all 500ms;
  overflow: hidden;

  & > div {
    overflow: hidden;
  }
`;
const FilterItem = styled.div`
  display: flex;

  align-items: center;
  gap: 8px;
`;
const GreyText = styled.div`
  color: rgba(35, 28, 30, 0.5);

  font-family: Onest;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  letter-spacing: -0.2px;
`;
const Checkbox = styled.div`
  border-radius: 4px;
  background: rgba(227, 227, 227, 0.5);
  width: 32px;
  height: 32px;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
  &.checkbox-selected {
    /* background-color: #6e7e44; */
    background-image: url(${like});
  }
`;

const ColorCircle = styled.div`
  border-radius: 40px;
  background-color: ${(props) => props.color};
  width: 18px;
  /* border: ${(props) =>
    props.color === "#fff" ? "1px solid #231C1E" : ""}; */
  height: 18px;
`;

const green500 = "#228b22";
const green900 = "#7FFF00";

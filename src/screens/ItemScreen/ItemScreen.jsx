import React from "react";
import styled from "styled-components";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer/footer";
import { Shelf } from "../../components/Shelf/Shelf";
import PathComponent from "../Catalog/sections/path";
import { TopPart } from "./TopPart/TopPart";
import { BottomPart } from "./BottomPart/BottomPart";
import { useEffect, useState } from "react";
import axios from "axios";
import { SERVER_URL } from "../../const";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const StyledScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  & .component-1046-instance {
    left: 50px !important;
    position: absolute !important;
    top: 232px !important;
  }
`;

const Div44 = styled.div`
  max-width: 1340px;
  margin: auto;
  position: relative;

  @media (max-width: 1360px) {
    margin: 0 20px;
  }
`;

const DivItems = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

const Products = styled.div`
  width: 100%;
`;

const DivTop = styled.div`
  display: flex;
  gap: 10px;
`;

const Grid = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`;
import { useParams } from "react-router-dom";

export const ItemScreen = () => {
  const { itemId } = useParams();
  const [item, setItems] = useState(undefined);
  useEffect(() => {
    axios
      .get(
        `${SERVER_URL}/api/items/${itemId}?populate=brand,image,main_image,*,categories.image,categories.parent,categories.parent.parent,categories.parent.parent.parent,categories.parent.parent.parent.parent, categories.parent.parent.parent.parent.parent,brand.logo,characterisctics_b2b,characterisctics_b2c`
      )
      .then((response) => {
        setItems(response.data.data.attributes);
      })
      .catch((err) => {
        //console.log(err);
      });
  }, []);

  return (
    <StyledScreen>
      <Header />
      <Div44>
        {item != null ? (
          <>
            <PathComponent
              no_name={true}
              category={{
                data: item.categories.data.sort((a, b) => a.id > b.id)[0],
              }}
              style={{ padding: "0" }}
            />
            <TopPart {...item} id={itemId} />
            <BottomPart {...item} />
          </>
        ) : (
          <>
            <SkeletonContainer>
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </SkeletonContainer>
          </>
        )}
        <Shelf />
        <Shelf text="Recently Viewed" history={true} />
      </Div44>
      <Footer />
    </StyledScreen>
  );
};

const SkeletonContainer = styled.div`
  & span {
    /* display: block; */
  }
  & span:nth-child(1) > span {
    height: 23px;

    margin: 32px 0 24px 0px;
    width: 250px;
  }
  & span:nth-child(2) > span {
    height: 730px;

    margin-bottom: 20px;
    border-radius: 32px;
    width: 100%;
  }
  & span:nth-child(3) > span {
    height: 560px;
    border-radius: 32px;
    width: 100%;
  }
`;

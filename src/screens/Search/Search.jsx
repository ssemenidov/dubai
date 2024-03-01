import React, { useEffect } from "react";
import styled from "styled-components";
import { Header } from "../../components/header";
import { Banner } from "../../components/Banner/Banner";
import { SmallItemCard } from "../../components/Element";
import { Footer } from "../../components/footer/footer";
import { Shelf } from "../../components/Shelf/Shelf";
import search_svg from "./icons/search.svg";
import close_svg from "./icons/close.svg";
import { useState } from "react";
import MeiliSearch from "meilisearch";
import { SERVER_URL } from "../../const";
import { PageSelection } from "../Catalog/sections/PageSelection";
import { SmallItemCardSkeleton } from "../../components/Element/Element";
import { useSearchParams } from "react-router-dom";

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
  width: 1340px;
  margin: auto;
  position: relative;

  @media (max-width: 1340px) {
    margin: 0 15px;
    width: auto;
  }
`;

const DivItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

const Products = styled.div`
  width: 100%;
`;

const DivTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 24px;
  justify-content: center;
`;

const Grid = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, 340px);
  justify-content: space-evenly;
  margin-bottom: 20px;
  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, 160px);
  }
`;
export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchedWord, setSearch] = useState(searchParams.get("text") ?? "");
  const [resultSearch, setResults] = useState(null);
  const [Page, setPage] = useState(searchParams.get("page") ?? 1);
  const [PageCount, setPageCount] = useState(Page);
  let limit = 10;
  const client = new MeiliSearch({
    host: SERVER_URL + "/",
    apiKey: "masterKey",
  });

  //console.log(resultSearch);
  const index = client.index("item");
  useEffect(() => {
    // Create a scoped async function in the hook
    async function searchWithMeili() {
      const search = await index.search(searchedWord, {
        limit,
        offset: (Page - 1) * limit,
      });
      //console.log(search);
      setPageCount(Math.ceil(search.estimatedTotalHits / limit));

      setResults(
        search.hits.map((x) => ({
          attributes: {
            ...x,
            brand: { data: { attributes: x.brand } },
            main_image: { data: { attributes: x.main_image } },
            image: { data: x.image.map((i) => ({ attributes: i })) },
          },
          id: x.id,
        }))
      );
    }
    // Execute the created function directly
    searchWithMeili();
  }, [searchedWord, Page]);

  return (
    <StyledScreen>
      <Header />
      <Div44>
        <HeaderText>
          <h2>Search</h2>
          <p>
            You can enter the product name or brand, and then apply filters to
            find the right product for you!
          </p>
        </HeaderText>
        <SearchContainer>
          <img src={search_svg} />
          <SearchInput
            placeholder="Write Something to Search"
            value={searchedWord}
            onChange={(c) => {
              setPage(1);
              setSearchParams(
                { text: c.target.value, page: 1 },
                { replace: true, preventScrollReset: true }
              );
              // window.history.replaceState();
              setSearch(c.target.value);
            }}
          />
          {/* <img src={close_svg} onClick={() => setSearch("")} /> */}
          {/* <ButtonSearch
            style={{
              borderRadius: "8px",
              background: " rgba(162, 172, 135, 0.50)",
              marginLeft: "24px",
              border: "none",
              outline: "none",
              color: "white",
              padding: "0 26px",
              backdropFilter: "blur(10px)",
            }}
          >
            Search
          </ButtonSearch> */}
        </SearchContainer>
        {resultSearch == null || resultSearch.length != 0 ? (
          <DivItems>
            {/* <ProductFilter /> */}
            <Products>
              {/* {resultSearch} */}
              {/* <div
              style={{
                color: "#231C1E",

                fontFamily: "Onest",
                fontSize: "20px",
                display: "flex",
                marginBottom: "40px",
              }}
            >
              Sort:{" "}
              <div style={{ color: "#6E7E44", paddingLeft: "15px" }}>
                we recomend
              </div>
            </div> */}
              <Grid>
                {resultSearch != null ? (
                  resultSearch.map((x) => <SmallItemCard {...x} key={x.id} />)
                ) : (
                  <>
                    <SmallItemCardSkeleton />
                    <SmallItemCardSkeleton />
                    <SmallItemCardSkeleton />
                    <SmallItemCardSkeleton />
                    <SmallItemCardSkeleton />
                    <SmallItemCardSkeleton />
                    <SmallItemCardSkeleton />
                  </>
                )}
              </Grid>
              <PageSelection
                onChange={(e) => {
                  searchParams.set("page", e);
                  setSearchParams(searchParams, {
                    replace: true,
                    preventScrollReset: true,
                  });
                  setPage(e);
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
                page={Page}
                pageCount={PageCount}
              />
            </Products>
          </DivItems>
        ) : (
          <>
            <Shelf style={{ marginTop: "22px" }} />
            <Shelf style={{ marginTop: "22px" }} text="Recently Viewed" />
          </>
        )}
      </Div44>
      <Footer />
    </StyledScreen>
  );
};

const HeaderText = styled.div`
  margin: 32px 0;
  & h2 {
    color: #231c1e;
    font-family: Comic Helvetic;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 114.972%; /* 36.791px */
    letter-spacing: -0.32px;
  }

  & p {
    color: rgba(35, 28, 30, 0.5);
    font-family: Onest;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 114.972%; /* 22.994px */
    letter-spacing: -0.2px;
  }
`;
const SearchContainer = styled.div`
  /* margin: 0 16px; */
  position: relative;
  display: flex;
  width: 100%;

  & img {
    position: absolute;
    cursor: pointer;
    padding: 5px;
  }

  & img:first-child {
    top: 14px;
    left: 15px;
  }

  & img:last-child {
    top: 11px;
    right: 10px;
  }
`;

const SearchInput = styled.input`
  background-color: white;
  padding: 20px 60px;
  width: 100%;
  border: none;
  border-radius: 16px;

  color: #231c1e;

  font-family: Onest;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 115%; /* 23px */
  letter-spacing: -0.2px;

  &:focus-visible {
    padding: 19px 60px;
    border: 1px solid #6e7e44;
    outline: none;
  }

  @media (max-width: 450px) {
    font-size: 16px;
  }
`;

const ButtonSearch = styled.div`
  transition: all 0.5s;
  display: flex;
  align-items: center;
  &:hover {
    transform: scale(1.03);
  }
`;

const NothingFound = styled.div`
  display: grid;

  align-items: center;
  height: 500px;
  color: #231c1e;

  text-align: center;
  font-family: Onest;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 115%; /* 27.6px */
  letter-spacing: -0.24px;
  width: 100%;
`;

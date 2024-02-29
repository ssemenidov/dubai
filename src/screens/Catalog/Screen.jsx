import React, { useContext } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";
import { Header } from "../../components/header";
import PathComponent from "./sections/path";
import { Banner } from "../../components/Banner/Banner";
import ProductFilter from "./sections/filter";
import SmallCategory from "./sections/smallCategory";
import { SmallItemCard } from "../../components/Element";
import { Footer } from "../../components/footer/footer";
import { Shelf } from "../../components/Shelf/Shelf";
import { PageSelection } from "./sections/PageSelection";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Helmet from "react-helmet";
import { Context, SERVER_URL } from "../../const";
import book from "./book.svg";
import { SmallItemCardSkeleton } from "../../components/Element/Element";
import { ArrowRight } from "../../icons/arrowRight";

const StyledScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  & .banner-skeleton {
    height: 302px;
    border-radius: 32px;
    @media (max-width: 900px) {
      display: none;
    }
  }

  & .component-1046-instance {
    left: 50px !important;
    position: absolute !important;
    top: 232px !important;
  }
`;

const Div44 = styled.div`
  max-width: 1340px;
  margin: auto;
  width: 100%;
  position: relative;

  @media (max-width: 1340px) {
    margin: 0 15px;
    width: auto;
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
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 24px;
  justify-content: left;

  &:empty {
    margin: 0;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 10px;
  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, 160px);

    justify-content: center;
  }
  grid-template-columns: repeat(auto-fill, 340px);
  /* justify-content: space-evenly; */
`;
export const Catalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const brand = searchParams.get("brand");
  const category = searchParams.get("category");
  const collection = searchParams.get("collection");
  const new_items = searchParams.get("new");
  const sale = searchParams.get("sale");

  const [Items, setItems] = useState([]);
  const [Type, setType] = useState(
    JSON.parse(searchParams.get("type") || "[]")
  );
  const [Sizes, setSizes] = useState(
    JSON.parse(searchParams.get("sizes") || "[]")
  );
  const [Colors, setColors] = useState(
    JSON.parse(searchParams.get("colors") || "[]")
  );
  const [Price, setPrice] = useState(
    JSON.parse(searchParams.get("price") || "[]")
  );

  const [Loading, setLoading] = useState(true);
  const [Brand, setBrand] = useState();
  const [Category, setCategory] = useState();
  const [Collection, setCollection] = useState();
  const [MainCategory, setMainCategory] = useState();
  const [Page, setPage] = useState(1);
  const [PageCount, setPageCount] = useState(1);
  const [ProductCount, setProductCount] = useState(0);
  const { isBtb, setCart, Cart } = useContext(Context);

  const [SortSelected, setSortSelected] = useState(false);

  const [Sort, setSort] = useState([
    { name: "we recommend", selected: true, text: "" },
    { name: "by popularity", selected: false, text: "sort=quantity" },
    { name: "price descending", selected: false, text: "sort=price_b2c:desc" },
    { name: "price ascending", selected: false, text: "sort=price_b2c:asc" },
  ]);
  console.log(collection);
  // console.log(Brand, Category, new_items, sale);

  useEffect(() => {
    if (category) {
      axios
        .get(
          `${SERVER_URL}/api/categories/${category}?populate=children,image,children.image`
        )
        .then((response) => {
          //console.log(response.data.data);
          setMainCategory(response.data);
          setCategory(response.data.data.attributes.children.data);
        })
        .catch((err) => {
          //console.log(err);
        });
    }
    if (brand) {
      axios
        .get(
          `${SERVER_URL}/api/brands/${brand}?populate=logo,categories,categories.image,manual,coming_soon_images,banner_page_image`
        )
        .then((response) => {
          //console.log(Brand);
          setBrand(response.data.data);
        })
        .catch((err) => {
          //console.log(err);
        });
    }
    if (collection) {
      axios
        .get(`${SERVER_URL}/api/collections/${collection}`)
        .then((response) => {
          //console.log(Brand);
          setCollection(response.data.data);
        })
        .catch((err) => {
          //console.log(err);
        });
    }
    axios
      .get(
        `${SERVER_URL}/api/items?populate=brand,collections,image,main_image,*,categories.image,brand.logo,characterisctics_b2b,characterisctics_b2c&${
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
        }&${Sort.find((c) => c.selected).text}&${
          collection ? `filters[collections][id][$eq]=${collection}` : ""
        }&pagination[page]=${Page}&
        ${
          Colors.length != 0
            ? Colors.map(
                (x, i) => `&filters[color][$in][${i}]=${x.toLowerCase()}&`
              ).reduce((x, c) => x + c)
            : ""
        }
        ${
          Type.length != 0
            ? Type.map(
                (x, i) => `&filters[categories][id][$in][${i}]=${x}&`
              ).reduce((x, c) => x + c)
            : ""
        }
        ${
          Sizes.length != 0
            ? Sizes.map(
                (x, i) => `&filters[size][$in][${i}]=${x.toLowerCase()}&`
              ).reduce((x, c) => x + c)
            : ""
        }
        ${
          Price.length != 0
            ? [
                Price.reduce((p, c) => ({
                  max: Math.max(p.max, c.max),
                  min: Math.min(p.min, c.min),
                })),
              ].map(
                (p) => `&filters[price_b2c][$lte]=${p.max}&
                &filters[price_b2c][$gte]=${p.min}&
                `
              )
            : ""
        }
        `
      )
      .then((response) => {
        // //console.log(response.data);
        setLoading(false);
        setProductCount(response.data.meta.pagination.total);
        setPageCount(response.data.meta.pagination.pageCount);
        setItems(response.data.data);
      })
      .catch((err) => {
        //console.log(err);
      });
  }, [Sort, Page, Colors, Sizes, Price, Type]);
  //console.log(Brand);
  return (
    <StyledScreen>
      <Helmet>
        <title>Toy boutique</title>
        <meta
          name="description"
          content={
            Brand != null
              ? `Best premium toys from ${brand}`
              : MainCategory != null
              ? `Best premium toys from category of ${MainCategory.data.attributes.name}`
              : `Best premium toys. That you would definitely buy`
          }
        />
      </Helmet>
      <Header />
      <Div44>
        <PathComponent
          brand={Brand}
          category={MainCategory}
          new_item={new_items}
          sale={sale}
          ProductCountt={ProductCount}
          collection={Collection}
        />
        {Brand && <Banner style={{ margin: "20px 0 20px 0" }} {...Brand} />}
        {brand != null && Brand == null && (
          <Skeleton className="banner-skeleton" />
        )}
        <DivItems
          style={{
            display:
              Brand != null && Brand.attributes.coming_soon ? "block" : "flex",
            marginBottom:
              Brand != null && Brand.attributes.coming_soon ? "40px" : "0",
          }}
        >
          {Brand != null && Brand.attributes.coming_soon ? (
            <GridComingSoon>
              {Brand.attributes.coming_soon_images.data.map((x) => (
                <ComingSoonImage
                  img={SERVER_URL + x.attributes.formats.small.url}
                />
              ))}
            </GridComingSoon>
          ) : (
            <>
              <ProductFilter
                {...{
                  setSizes: (c) => {
                    searchParams.set("sizes", JSON.stringify(c));
                    setSearchParams(searchParams, {
                      replace: true,
                      preventScrollReset: true,
                    });
                    setSizes(c);
                  },
                  Sizes,
                  Colors,
                  Type,
                  setType: (c) => {
                    searchParams.set("type", JSON.stringify(c));
                    setSearchParams(searchParams, {
                      replace: true,
                      preventScrollReset: true,
                    });
                    setType(c);
                  },
                  setColors: (c) => {
                    searchParams.set("colors", JSON.stringify(c));
                    setSearchParams(searchParams, {
                      replace: true,
                      preventScrollReset: true,
                    });
                    setColors(c);
                  },
                  Price,
                  setPrice: (c) => {
                    searchParams.set("price", JSON.stringify(c));
                    setSearchParams(searchParams, {
                      replace: true,
                      preventScrollReset: true,
                    });
                    setPrice(c);
                  },
                }}
              />
              <Products>
                {isBtb && Brand && (
                  <BrandManual>
                    <div>
                      <h2>Instructions for brand implementation</h2>
                      <p>
                        We train your employees and also provide complete
                        information about the supplied brand. Download the{" "}
                        <strong>{Brand.attributes.name}</strong> brand guide.
                      </p>
                    </div>
                    <a
                      href={
                        SERVER_URL + Brand.attributes.manual.data.attributes.url
                      }
                      download="brand-manual"
                    >
                      <img srcSet={book} />
                      <span>download manual</span>
                    </a>
                  </BrandManual>
                )}
                <DivTop>
                  {Category &&
                    Category.map((c) => <SmallCategory key={c.id} {...c} />)}
                  {/* {Brand &&
                    Brand.attributes.categories.data.map((c) => (
                      <SmallCategory key={c.id} {...c} />
                    ))} */}
                  {Category == null &&
                    Brand == null &&
                    brand == null &&
                    !new_items &&
                    !sale &&
                    collection == null && (
                      <>
                        <Skeleton
                          height="120px"
                          width="342px"
                          style={{ borderRadius: "20px" }}
                        />
                        <Skeleton
                          height="120px"
                          width="342px"
                          style={{ borderRadius: "20px" }}
                        />
                        <Skeleton
                          height="120px"
                          width="342px"
                          style={{ borderRadius: "20px" }}
                        />
                      </>
                    )}
                </DivTop>
                <SortWrapper
                  style={{}}
                  className={
                    SortSelected ? "sort-selected noselect" : "noselect"
                  }
                >
                  <div style={{ gridArea: "a" }}>Sort: </div>

                  <div
                    style={{
                      color: "#6E7E44",
                      paddingLeft: "15px",
                    }}
                    className="sort-item"
                    onClick={() => setSortSelected(!SortSelected)}
                  >
                    {Sort.filter((c) => c.selected)[0].name}
                  </div>
                  <SortClicker>
                    <div className="wrapper">
                      {Sort.filter((c) => !c.selected).map((c) => (
                        <div
                          style={{
                            color: "inherit",
                            paddingLeft: "15px",
                          }}
                          className="sort-item"
                          onClick={(c) => {
                            Sort.forEach((c) => (c.selected = false));
                            Sort.filter(
                              (n) => n.name === c.currentTarget.textContent
                            )[0].selected = true;
                            setSort([...Sort]);
                            setSortSelected(false);
                          }}
                        >
                          {c.name}
                        </div>
                      ))}
                    </div>
                  </SortClicker>
                  <div className="empty"></div>
                  <ArrowRight
                    className="arrow"
                    onClick={() => setSortSelected(!SortSelected)}
                  />
                </SortWrapper>
                {Loading == true || Items.length != 0 ? (
                  <>
                    <Grid>
                      {Items.map((i) => (
                        <SmallItemCard {...i} key={i.id} />
                      ))}

                      {Loading && (
                        <>
                          <SmallItemCardSkeleton />
                          <SmallItemCardSkeleton />
                          <SmallItemCardSkeleton />
                          <SmallItemCardSkeleton />
                          <SmallItemCardSkeleton />
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
                  </>
                ) : (
                  <NotFound>Sorry, nothing found with this filter</NotFound>
                )}
              </Products>
            </>
          )}
        </DivItems>
      </Div44>
      <Footer />
    </StyledScreen>
  );
};

const SortClicker = styled.div`
  & .wrapper {
    display: flex;
    color: rgba(35, 28, 30, 0.5);
    transition: width 0.5s;
    width: 500px;
    @media (max-width: 600px) {
      flex-direction: column;
      width: fit-content;
      gap: 8px;
    }
  }

  & .sort-item {
    @media (max-width: 600px) {
      border-bottom: 1px solid rgba(35, 28, 30, 0.2);

      padding: 15px 16px;
    }
  }

  & .sort-item:last-child {
    border-bottom: none;
  }

  width: 0px;
  height: 0px;
  overflow: hidden;
  transition: width 0.5s;

  @media (max-width: 600px) {
    position: absolute;
    right: 52px;
    width: 0;
    top: 54px;
    background-color: white;
    z-index: 10;
    border-radius: 8px;
    border: 1px solid rgba(35, 28, 30, 0.1);
  }
  .sort-selected & {
    /* margin-right: auto; */
    width: 500px;
    height: auto;
    /* width: 100%; */
    @media (max-width: 600px) {
      width: fit-content !important;
    }
  }
`;

const GridComingSoon = styled.div`
  display: grid;
  gap: 42px;
  grid-template-columns: repeat(auto-fill, 340px);
  justify-content: center;

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, 160px);
    gap: 12px;
  }
`;
const ComingSoonImage = styled.img`
  border-radius: 20px;
  /* border: 1px solid rgba(35, 28, 30, 0.1); */
  width: 342px;
  height: 520px;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2) 100%,
      #fff
    ),
    #dddddd 50% / cover no-repeat url(${(props) => props.img});

  @media (max-width: 600px) {
    width: 160px;
    height: 285px;
  }
`;
const NotFound = styled.div`
  display: grid;

  justify-items: center;
  height: 387px;
  color: rgba(35, 28, 30, 0.5);
  font-family: Onest;
  font-size: 22px;
`;
const SortWrapper = styled.div`
  border-radius: 8px;
  background: #fff;
  color: #231c1e;

  flex-wrap: wrap;

  font-family: Onest;
  font-size: 20px;
  display: flex;
  margin-left: 0px;
  margin-bottom: 40px;

  padding: 20px;
  position: relative;

  @media (max-width: 700px) {
    margin-left: 0;
    /* font-size: 10px; */
    /* display: grid;
    grid-template: "a . ." "a . ."; */
  }
  & > div:first-child {
    font-size: 20px;
  }

  & .sort-item:hover {
    cursor: pointer;
  }

  & .arrow {
    transition: all 0.3s;
    margin-left: 15px;
    margin-bottom: 1px;
  }

  align-items: center;

  &.sort-selected .arrow {
    transform: rotateZ(180deg);
    @media (max-width: 600px) {
      transform: rotateZ(90deg);
    }
  }

  & .empty {
    transition: all 0.5s;
  }

  &.sort-selected .empty {
    @media (min-width: 600px) {
      flex-grow: 1;
    }
  }
`;

const BrandManual = styled.div`
  display: flex;
  padding: 38px 24px;
  border-radius: 16px;
  background: #fff;
  margin-bottom: 20px;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 16px;
    padding: 16px;
  }

  & > div {
    max-width: 450px;
    gap: 8px;
    display: flex;
    flex-direction: column;
  }
  & h2 {
    color: #231c1e;

    font-family: Onest;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 114.972%; /* 22.994px */
    letter-spacing: -0.2px;
  }

  & p {
    color: rgba(35, 28, 30, 0.5);

    font-family: Onest;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 114.972%; /* 16.096px */
    letter-spacing: -0.14px;
  }

  & strong {
    color: rgba(35, 28, 30, 0.5);
    font-family: Onest;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 114.972%;
    letter-spacing: -0.14px;
  }

  & a {
    color: #231c1e;

    text-align: right;
    font-family: Manrope;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: -0.2px;
    text-transform: uppercase;

    padding: 16px;
    border-radius: 8px;
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0.4) 100%
      ),
      rgba(0, 0, 0, 0.05);

    background-blend-mode: hard-light, normal;
    /* backdrop-filter: blur(12px); */
    transition: transform 0.4s;

    display: flex;
    align-items: center;
    gap: 8px;
  }

  & a:hover {
    cursor: pointer;
    transform: scale(1.03);
  }
`;

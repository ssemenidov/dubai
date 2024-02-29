import styled from "styled-components";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header";
import card_1 from "./icons/card_1.svg";
import card_2 from "./icons/card_2.svg";
import card_3 from "./icons/card_3.svg";
import card_4 from "./icons/card_4.svg";
import card2_1 from "./icons/card2_1.svg";
import card2_2 from "./icons/card2_2.svg";
import card2_3 from "./icons/card2_3.svg";
import card2_4 from "./icons/card2_4.svg";
import card3_1 from "./icons/card3_1.svg";
import Skeleton from "react-loading-skeleton";
import card3_2 from "./icons/card3_2.svg";
import card3_3 from "./icons/card3_3.svg";
import { Map } from "./section/map";
import { SERVER_URL } from "../../const";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Slider from "react-slick";
import { Logo } from "../../icons/Logo";

export function BecomeAPartner() {
  const [User, setUser] = useState({
    company_name: "",
    contact_name: "",
    phone_number: "",
    site_link: "",
    vat_number: "",
    email: "",
  });
  let bannerRef = useRef();

  const [Partners, setPartners] = useState([]);
  const [Error, setError] = useState("");
  //console.log(Error);
  let sendPassword = async () => {
    // //console.log(User);
    for (const key in User) {
      if (Object.hasOwnProperty.call(User, key)) {
        const el = User[key];
        if (el == "") {
          setError("Empty field");
          return;
        }
      }
    }

    axios
      .post(`${SERVER_URL}/api/register`, User)
      .then((response) => {
        if (response.data.details != undefined) {
          //console.log("hi");
          //console.log(response.data);
          //console.log(response.data.details.errors[0].path[0]);

          if (response.data.details.errors[0].path[0] === "username") {
            setError("email address already registered");
            return;
          }
          if (response.data.details.errors[0].path[0] === "email") {
            //console.log(response.data.details.errors[0].path[0]);
            setError(response.data.details.errors[0].message);
            return;
          }
          setError(
            response.data.details.errors[0].name +
              "  " +
              response.data.details.errors[0].path[0]
          );
          return;
        }
        window.location = "/";
      })
      .catch((error) => {
        //console.log(error);
        //console.log("An error occurred:", error.response);
      });
  };

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/api/our-partner?populate=partners`)
      .then((response) => {
        setPartners(response.data.data.attributes.partners.data);
        // setPartners(response.data.data.attributes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  return (
    <Container>
      <Header />
      <Div44>
        <WhiteContainer style={{ flexDirection: "column" }}>
          <OurShopName>
            <div>
              <GreenHeader>We are</GreenHeader>
              <Logo style={{ width: "230px", height: "60px" }} />
            </div>
            <p>
              We are always in touch and even when our toys find a new home, we
              continue to take care of them and are always ready to answer any
              of your questions. And if you need help in choosing a magical
              gift, just write to us.
            </p>
          </OurShopName>
          <Div23>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <img src={card_1} />
              <GreenHeader style={{ fontSize: "20px", padding: "10px 0" }}>
                Unique brands
              </GreenHeader>
              <p>of soft toys of the highest quality on the market.</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <img src={card_2} />
              <GreenHeader
                style={{
                  fontSize: "20px",

                  padding: "10px 0",
                }}
              >
                Marketing supportand training
              </GreenHeader>
              <p>
                We provide all our partners with accessto professional photo and
                video materials, and also conduct brand training for retail
                partner staff.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <img src={card_3} />
              <GreenHeader
                style={{
                  fontSize: "20px",

                  padding: "10px 0",
                }}
              >
                Recommendations on merchandising and design
              </GreenHeader>
              <p>of the brand zone in your retail spaces.</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <img src={card_4} />
              <GreenHeader
                style={{
                  fontSize: "20px",

                  padding: "10px 0",
                }}
              >
                Individual approach
              </GreenHeader>
              <p>
                Just tell us about your project,and we will select the most
                favorable terms of cooperation for you.
              </p>
            </div>
          </Div23>
        </WhiteContainer>
        <WhiteContainer style={{ flexDirection: "column" }}>
          <FlexHeader>
            <GreenHeader2> Our brands</GreenHeader2>
            <p style={{ maxWidth: "650px" }}>
              We connect the best toys brands from all over the world with high
              quality local GCC retailers, building a special atmosphere around
              our products.
            </p>
          </FlexHeader>
          <Flex style={{ marginTop: "40px" }}>
            <div
              style={{
                minWidth: "210px",
                width: "min-content",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <ImgCard3 src={card3_1} />
              <GreenHeader>turnover</GreenHeader>
              <p>
                We understand how to help our brands to grow and protect the
                image of brands building a strong partnership with brands owners
                and headquarters from all over the world
              </p>
            </div>
            <div
              style={{
                minWidth: "210px",
                width: "min-content",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <ImgCard3 src={card3_2} />
              <GreenHeader>marketing</GreenHeader>
              <p>
                We run local social networks for our brands and cooperate with
                local influencers that help us to promote our brands and create
                exclusive social network content
              </p>
            </div>
            <div
              style={{
                minWidth: "210px",
                width: "min-content",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <ImgCard3 src={card3_3} />
              <GreenHeader>certification</GreenHeader>
              <p>
                We take care of the Certification processand obtaining GMARK
                certificate for Persian Gulf
              </p>
            </div>
          </Flex>
        </WhiteContainer>
        <WhiteContainer style={{ flexDirection: "column" }}>
          <OurShopName>
            <div>
              <GreenHeader>Our partners</GreenHeader>
            </div>
          </OurShopName>
          <CaruselContainer>
            <ArrowLeftIcon onClick={() => bannerRef.slickPrev()} />
            <Slider
              className={"carousel-banner"}
              {...settings}
              ref={(c) => {
                bannerRef = c;
              }}
            >
              {Partners.map((b) => (
                <a className="carusel-item-banner" key={b.id}>
                  <img src={`${SERVER_URL}${b.attributes.url}`} />
                </a>
              ))}
              {Partners.length == 0 && (
                <>
                  <Skeleton height="100%" style={{ borderRadius: "16px" }} />
                  <Skeleton height="100%" style={{ borderRadius: "16px" }} />
                  <Skeleton height="100%" style={{ borderRadius: "16px" }} />
                </>
              )}
            </Slider>
            <ArrowRightIcon onClick={() => bannerRef.slickNext()} />
          </CaruselContainer>
        </WhiteContainer>
        <WhiteContainer id="form">
          <div style={{ maxWidth: "420px" }}>
            <GreenHeader>Become a partner</GreenHeader>
            <div style={{ marginTop: "30px" }}>
              We are open to wholesale cooperation.
            </div>
            <GreyText>
              If you are interested in cooperation, then leave your contact
              information and we will contact you!
            </GreyText>

            <div style={{ color: "red", fontSize: "16px" }}>
              {convertError(Error)}
            </div>
          </div>
          <Contacts>
            <div style={{ gridArea: "a" }}>
              <div style={{ display: "flex" }}>
                Company Name
                <RedStar>*</RedStar>
              </div>
              <Input
                placeholder="Your Company Name"
                value={User.company_name}
                onChange={(c) =>
                  setUser({ ...User, company_name: c.target.value })
                }
              />
            </div>
            <div style={{ gridArea: "b" }}>
              <div style={{ display: "flex" }}>
                Contact Name
                <RedStar>*</RedStar>
              </div>
              <Input
                placeholder="Contact Name"
                value={User.contact_name}
                onChange={(c) =>
                  setUser({ ...User, contact_name: c.target.value })
                }
              />
            </div>
            <div>
              <div style={{ display: "flex" }}>
                Email
                <RedStar>*</RedStar>
              </div>
              <Input
                placeholder="Your Email"
                value={User.email}
                onChange={(c) => setUser({ ...User, email: c.target.value })}
              />
            </div>
            <div>
              <div style={{ display: "flex" }}>
                Phone Number
                <RedStar>*</RedStar>
              </div>
              <Input
                placeholder="Your Phone Number"
                value={User.phone_number}
                onChange={(c) =>
                  setUser({ ...User, phone_number: c.target.value })
                }
              />
            </div>
            <div>
              <div style={{ display: "flex" }}>
                VAT Number
                <RedStar>*</RedStar>
              </div>
              <Input
                placeholder="Your VAT Number"
                value={User.vat_number}
                onChange={(c) =>
                  setUser({ ...User, vat_number: c.target.value })
                }
              />
            </div>
            <div>
              <div style={{ display: "flex" }}>
                Site
                <RedStar>*</RedStar>
              </div>
              <Input
                placeholder="Link to your site"
                value={User.site_link}
                onChange={(c) =>
                  setUser({ ...User, site_link: c.target.value })
                }
              />
            </div>
            <a
              onClick={(e) => {
                e.preventDefault();
                sendPassword();
              }}
              className={
                Object.values(User).findIndex((x) => x === "") == -1
                  ? "selected-button"
                  : "lol"
              }
            >
              Apply for Partnership
            </a>
          </Contacts>
        </WhiteContainer>
        <WhiteContainer style={{ flexDirection: "column" }}>
          <GreenHeader2>Our Values</GreenHeader2>
          <OurValues>
            <Card>
              <div className="imageWrapper">
                <img src={card2_1} height="60px" />
              </div>
              <GreenHeader style={{ color: "#6E7E44" }}>
                Continuous improvement
              </GreenHeader>
              <div>
                We stand alongside our customers, attentively listening to their
                opinions and desires.
              </div>
              <GreyText>
                By working together, we strive to enhance the quality, service
                levels, offerings, and internal processes for continuous growth.
              </GreyText>
            </Card>
            <Card>
              <div className="imageWrapper">
                <img src={card2_2} height="60px" />
              </div>
              <GreenHeader style={{ color: "#6E7E44" }}>
                Innovation and tradition
              </GreenHeader>
              <div>
                We harmonize innovation and tradition, offering modern products
                while respecting classical and traditional values.
              </div>
            </Card>
            <Card>
              <div className="imageWrapper">
                <img src={card2_3} height="60px" />
              </div>
              <GreenHeader style={{ color: "#6E7E44" }}>
                Responsibility
              </GreenHeader>
              <div>
                We take pride in the products we offer: quality, reliability,
                and the use of natural and/or premium materials are key aspects
                of our work.
              </div>
            </Card>
            <Card>
              <div className="imageWrapper">
                <img
                  src={card2_4}
                  width="82px"
                  height="40px"
                  style={{ marginRight: "-10px", marginTop: "10px" }}
                />
              </div>
              <GreenHeader style={{ color: "#6E7E44" }}>Our brands</GreenHeader>
              <div>
                We sincerely believe that we can bring positive emotions and
                smiles to families within the UAE through our products and a
                special atmosphere.
              </div>
              <GreyText>
                Our love for what we do is at the heart of everything.
              </GreyText>
            </Card>
          </OurValues>
        </WhiteContainer>

        <WhiteContainer>
          <Map />
        </WhiteContainer>
        <WhiteContainer
          style={{ flexDirection: "column", marginBottom: "20px" }}
        >
          <FlexHeader style={{ marginBottom: "80px" }}>
            <GreenHeader2>For customers</GreenHeader2>
            <p style={{ fontSize: "24px", maxWidth: "650px" }}>
              If any reclamation from a customer occurs we settle it with no
              damage to the brand image.
            </p>
          </FlexHeader>

          <Bottom>
            <div>
              <div>We are open to wholesale cooperation.</div>
              <p>
                If you are interested in cooperation, then leave your contact
                information and we will contact you!
              </p>
            </div>
            <a
              onClick={() => {
                // window.scrollTo({
                //   top: 0,
                //   left: 0,
                //   behavior: "smooth",
                // });

                document.querySelector("#form").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Become a partner
            </a>
          </Bottom>
        </WhiteContainer>
      </Div44>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  color: #231c1e;

  font-family: Onest;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 20px */
  letter-spacing: -0.2px;

  & p {
    color: #231c1e;
    font-family: Onest;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 115%; /* 18.4px */
    letter-spacing: -0.16px;
  }
`;

const Div44 = styled.div`
  margin: 0 auto;

  max-width: 1340px;

  @media (max-width: 1360px) {
    margin: 0 15px;
  }
`;

const Contacts = styled.div`
  width: 100%;
  gap: 24px;
  display: grid;
  grid-template-areas: "a a" "b b";

  @media (max-width: 600px) {
    font-size: 14px;
  }

  & > a.selected-button {
    background: #a2ac87;
  }

  & > a {
    color: #fff;
    text-align: center;
    text-align: right;
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 114.972%; /* 18.395px */
    letter-spacing: -0.16px;
    border-radius: 8px;
    background: rgba(162, 172, 135, 0.5);

    backdrop-filter: blur(10px);
    width: 100%;
    padding: 12px 0;

    text-align: center;
    @media (max-width: 900px) {
      grid-column: 1/3;
    }
    transition: all 0.5s;
    cursor: pointer;
    &:hover {
      transform: scale(1.03);
    }
  }
`;
const WhiteContainer = styled.div`
  border-radius: 32px;
  background: #fff;
  display: flex;
  padding: 40px;
  flex-direction: row;
  margin-top: 20px;
  @media (max-width: 900px) {
    gap: 16px;
    flex-direction: column;
  }
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  /* border-radius: 24px; */
  /* max-width: 610px; */
  width: 100%;
  height: 295px;
  padding: 16px 24px;
  overflow: hidden;
  border-radius: 20px;
  background: #fafbf9;

  @media (max-width: 1000px) {
    width: 100%;
  }
  @media (max-width: 600px) {
    height: 302px;
    padding-top: 74px;
  }

  justify-content: flex-end;
  gap: 16px;
  & .imageWrapper {
    width: 150px;
    height: 150px;
    padding: 53px;
    display: flex;
    flex-direction: row-reverse;
    border-radius: 80px;
    background: #a2ac87;
    position: absolute;

    right: -30px;
    top: -37px;
  }

  & > div:nth-child(2) {
    @media (max-width: 600px) {
      font-size: 22px;
    }
  }
  & > div:nth-child(3) {
    color: #2d2326;

    font-family: Onest;
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: 115%; /* 27.6px */
    letter-spacing: -0.24px;
    @media (max-width: 600px) {
      font-size: 14px;
    }
  }

  & > div:nth-child(4) {
    color: rgba(45, 35, 38, 0.7);

    font-family: Onest;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 115%; /* 23px */
    letter-spacing: -0.2px;
    @media (max-width: 600px) {
      font-size: 14px;
    }
  }
`;
const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: space-around;
`;
const FlexHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & p {
    font-size: 24px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 16px;
    align-items: start;
  }
`;

const GreenHeader2 = styled.div`
  color: #a2ac87;
  text-transform: capitalize;
  font-family: Comic Helvetic;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 114.972%; /* 36.791px */
  letter-spacing: -0.32px;
`;
const GreenHeader = styled.div`
  color: #a2ac87;
  text-transform: capitalize;
  font-family: Comic Helvetic;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 114.972%; /* 36.791px */
  letter-spacing: -0.32px;
`;
const GreyText = styled.div`
  color: #231c1e;

  font-family: Onest;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 115%; /* 18.4px */
  letter-spacing: -0.16px;
`;
const OurShopName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & p {
    font-size: 24px;
  }

  @media (max-width: 900px) {
    align-items: start;
    display: flex;
    flex-direction: column;
  }

  & img {
    @media (max-width: 900px) {
      width: 100%;
      height: auto;
    }
  }
  & > p {
    max-width: 760px;
  }
`;

const Input = styled.input`
  border-radius: 8px;
  background: #f6f6f6;
  height: 60px;
  padding: 0px 20px;
  width: 100%;
  margin-bottom: 24px;
  margin-top: 10px;

  border: 2px solid rgba(35, 28, 30, 0);
  &:last-child {
    margin-bottom: 0;
  }
  &:target,
  &:focus-visible {
    outline: none;
    border: 2px solid rgba(35, 28, 30, 0.4);
  }
`;

const RedStar = styled.div`
  content: "*";
  color: red;
`;

const Bottom = styled.div`
  display: flex;
  padding: 40px 0 20px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 900px) {
    text-align: center;
    gap: 24px;
    flex-direction: column;
  }
  & > div {
    max-width: 829px;
  }

  & > a {
    padding: 10px 15px;
    border-radius: 8px;
    background: #231c1e;

    color: #fff;

    text-align: center;
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: 114.972%; /* 18.395px */
    letter-spacing: -0.16px;
    text-transform: uppercase;
    transition: all 0.5s;
    cursor: pointer;
    &:hover {
      transform: scale(1.03);
    }
  }
`;

const ImgCard3 = styled.img`
  /* padding: 117.793px 20px 70.207px 19px; */
  padding: 123.714px 44px 118.286px 44px;
  margin-bottom: 32px;
  box-sizing: content-box;
  border-radius: 32px;
  width: 242px;
  height: 188px;
  background: #fafbf9;
  @media (max-width: 600px) {
    padding: 0;
    background: none;
  }
`;

const Div23 = styled.div`
  gap: 30px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 80px;
  justify-content: space-around;

  @media (max-width: 1250px) {
    /* padding: 0 152px; */
  }
  @media (max-width: 950px) {
    padding: 0 0;
  }

  & > div {
    max-width: 278px;
  }

  & p {
    font-size: 14px;
  }
`;

const OurValues = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 40px;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const CaruselContainer = styled.div`
  margin-top: 24px;

  height: 200px;
  display: flex;
  align-items: center;

  justify-content: space-between;

  @media (max-width: 800px) {
    height: 200px;
  }
  & > div {
    /* position: absolute; */
  }

  & > div:first-child {
    /* top: calc(50% - 10px);
    z-index: 1;
    left: 1%; */
    /* flex-grow: 1; */
    @media (max-width: 800px) {
      display: none;
    }
  }
  & > div:last-child {
    @media (max-width: 800px) {
      display: none;
    }
    /* top: calc(50% - 10px);
    z-index: 1;
    right: 1%; */
  }

  & .carousel-banner {
    width: calc(100% - 120px);
    height: fit-content;
    /* overflow: hidden; */
    outline: none;
    @media (max-width: 800px) {
      width: 100%;
    }
  }

  & .carusel-item-banner img {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  & .carusel-item-banner img {
    position: relative;
    height: 160px;
    width: 280px;
    object-fit: contain;
    @media (max-width: 800px) {
      width: 280px;
      height: 150px;
    }
    @media (max-width: 600px) {
      width: 220px;
      height: 120px;
    }
  }

  & .slick-track {
    display: flex;
    align-items: center;
  }
`;

const ArrowLeftIcon = styled.div`
  color: white;
  width: 40px;
  opacity: 0.2;
  height: 40px;
  background: no-repeat url("/img/icon/box-and-arrow.svg");
  @media (max-width: 600px) {
    display: none;
  }
`;

const ArrowRightIcon = styled.div`
  width: 40px;
  height: 40px;
  opacity: 0.2;
  transform: rotateZ(180deg);
  background: no-repeat url("/img/icon/box-and-arrow.svg");
  @media (max-width: 600px) {
    display: none;
  }
`;

function convertError(str) {
  if (str == "email must be a valid email") {
    return "Email must be valid";
  }
  if (str == "email address already registered") {
    return "Email already registered";
  }
  if (str == "ValidationError  phone_number") {
    return "Phone number must contain only + and numbers";
  }
  return str;
}

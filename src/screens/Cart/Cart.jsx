import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer/footer";
import { Shelf } from "../../components/Shelf/Shelf";
import image from "./item_pic.png";
import { PlusMinus } from "../../components/PlusMinus";
import trashLogo from "./trash.svg";
import { CURRENCY, Context, SERVER_URL } from "../../const";
import Form2 from "./section/complited";
import UpdatedComponent from "./section/complited";
import axios from "axios";
import Helmet from "react-helmet";
import mail_svg from "./section/mail.svg";
import phone_svg from "./section/phone.svg";

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
  padding: 50px;

  @media (max-width: 1380px) {
    padding: 0 50px 20px;
  }

  @media (max-width: 1110px) {
    padding: 0 8px 20px;
  }
`;

const BigHeader = styled.div`
  margin: 40px 0 24px 0;
  color: #231c1e;

  font-family: Comic Helvetic;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 114.972%; /* 36.791px */
  letter-spacing: -0.32px;
`;

const CartItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 15fr 5fr 2fr 5fr 1fr;
  border-bottom: 1px solid rgba(35, 28, 30, 0.2);

  padding: 16px;
  gap: 32px;
  align-items: center;

  @media (max-width: 600px) {
    grid-template-columns: 1fr 6fr 1fr;
    gap: 24px 8px;
  }

  & div {
    text-align: center;
  }

  & .quantity {
    @media (max-width: 720px) {
      display: none;
    }
  }
  & .withQuantity {
    display: none;
    height: 40px;
    @media (max-width: 720px) {
      display: block;
    }
  }
  & .withText {
    height: 120px;
    @media (max-width: 720px) {
      display: none;
    }
    @media (max-width: 500px) {
      display: none;
    }
  }

  & img:last-child {
    cursor: pointer;
  }

  &:last-child {
    grid-template-columns: 1fr 15000000000000fr 5fr 2fr;
    border: none;
    @media (max-width: 720px) {
      grid-template-columns: 1fr 6fr 1fr;
    }
  }

  &.state-buy {
    grid-template-columns: auto auto 1fr auto;
    @media (max-width: 600px) {
      grid-template-columns: auto auto 1fr;
    }
  }

  &.state-buy button {
    @media (max-width: 600px) {
      grid-area: 2/1/2/4;
      width: 100%;
    }
  }

  & .sum {
    width: 130px;
  }
`;

const GrayText = styled.div`
  color: rgba(35, 28, 30, 0.5);

  font-family: Onest;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 114.972%; /* 18.395px */
  letter-spacing: -0.16px;

  @media (max-width: 700px) {
    font-size: 12px;
  }

  &.product {
    text-align: left;
    @media (max-width: 700px) {
      text-align: center;
    }
  }
`;
const DivSlider = styled.div`
  border-radius: 32px;
  background: #fff;
  padding: 20px 20px 0 20px;

  @media (max-width: 700px) {
    border-radius: 22px;
  }
`;

const Button = styled.button`
  margin: 0;
  padding: 0;
  border-radius: 8px;
  background: #a2ac87;
  backdrop-filter: blur(10px);
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  width: 310px;
  height: 50px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;

  &.non {
    background: rgba(162, 172, 135, 0.5);
  }

  @media (max-width: 720px) {
    width: 100%;
    grid-area: 2 / 1 / 2 / 4;
  }

  color: #fff;
  text-align: right;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 114.972%;
  letter-spacing: -0.16px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    transform: scale(1.03);
  }
`;

const BoldText = styled.div`
  color: #231c1e;

  font-family: Onest;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 114.972%; /* 18.395px */
  letter-spacing: -0.16px;
  text-transform: uppercase;

  @media (max-width: 720px) {
    font-size: 12px;
    /* font-size: 16px; */
  }

  &.sum {
    font-size: 24px;
    width: 130px;
  }
`;

const VeryBald = styled.div`
  color: #6e7e44;

  text-align: center;
  font-family: Onest;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 24px */
  letter-spacing: -0.24px;
  text-transform: uppercase;

  @media (max-width: 700px) {
    font-size: 16px;

    text-align: left;
  }
`;

const Section = styled.div`
  display: grid;
  width: 100%;
  padding: 40px;
  border-radius: 32px;
  background: #fff;

  gap: 20px;
  grid-template-columns: 2fr 1fr;

  margin-top: 20px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    border-radius: 22px;
  }

  & > div:last-child {
    margin-top: 30px;
    font-size: 20;
    font-weight: 300;
    @media (max-width: 600px) {
      margin-top: 0px;
    }
  }

  & div {
    color: #231c1e;
    margin-bottom: 8px;

    font-family: Onest;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 115%; /* 18.4px */
    letter-spacing: -0.16px;
  }

  & div > div {
    display: flex;
    align-items: center;
  }
`;

const PlusContainer = styled.div`
  width: 0;
  @media (max-width: 1000px) {
    margin: -20px;
  }
`;

const RedStar = styled.div`
  /* content: "*"; */
  color: red !important;
`;

const Input = styled.input`
  border: none;
  border-radius: 8px;
  background: #f6f6f6;
  height: 60px;
  font-size: 20px;
  font-family: Onest;
  font-weight: 300;
  padding: 0px 20px;
  width: 100%;
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
  &:target,
  &:focus-visible {
    outline: none;
    padding: 0 18px;
    border: 2px solid rgba(35, 28, 30, 0.4);
  }
`;

const Accepter = styled.div`
  margin-top: 20px;
`;

export const Cart = (props) => {
  const [State, setState] = useState("cartCheck");
  let { Cart, isBtb, setCart, user } = React.useContext(Context);
  const [LocalCart, setLocalCart] = useState([]);
  const [Pending, setPending] = useState(false);

  const [Form, setForm] = useState({
    company_name: "",
    contact_name: "",
    phone_number: "",
    email: "",
  });

  useEffect(() => {
    if (State == "cartCheck") {
      setLocalCart(Cart);
    }
  }, [Cart]);
  let sum = 0;
  let iter = 0;
  let field_complited = true;
  for (const key in Form) {
    if (Object.hasOwnProperty.call(Form, key)) {
      const element = Form[key];
      if (element === "") {
        field_complited = false;
      }
    }
  }

  //console.log(Cart);
  return (
    <StyledScreen>
      <Helmet>
        <title>Toy boutique cart</title>
        <meta name="description" content="toy boutique's cart" />
      </Helmet>
      <Header />
      <Div44>
        {State == "Accepted" && (
          <Accepter>
            <UpdatedComponent email={user.email} />
          </Accepter>
        )}

        <BigHeader>Your Shopping Bag</BigHeader>
        <DivSlider>
          <CartItem>
            <GrayText>№</GrayText>
            <GrayText className="product">Product</GrayText>
            <GrayText>Price</GrayText>
            <GrayText>Quantity</GrayText>
            <GrayText>Sum</GrayText>
          </CartItem>
          {LocalCart.map((c) => {
            let price = (
              isBtb ? c.el.price_b2b : c.price_discount ?? c.el.price_b2c
            ).toFixed(1);
            let sum_price = (
              Math.ceil(c.cart_quntity * price * 100) / 100
            ).toFixed(2);
            sum += +sum_price;
            iter += 1;
            //console.log(c);
            return (
              <CartItem key={c.id}>
                <GrayText>
                  <img
                    className="withQuantity"
                    src={`${SERVER_URL}${c.el.main_image.data.attributes.formats.small.url}`}
                  />
                  <div className="quantity">{iter}</div>
                </GrayText>
                <div
                  style={{ display: "flex", gap: "16px", alignItems: "center" }}
                >
                  <a href={`/catalog/item/` + c.real_id}>
                    <img
                      src={`${SERVER_URL}${c.el.main_image.data.attributes.formats.small.url}`}
                      className="withText"
                    />
                  </a>
                  <CartDesc>
                    <BoldText>{c.el.name}</BoldText>
                    <GrayText>{c.el.brand.data.attributes.name}</GrayText>
                  </CartDesc>
                </div>
                <BoldText style={{ fontSize: "20px", fontWeight: "300" }}>
                  {price}
                  {CURRENCY}
                </BoldText>
                <PlusContainer>
                  <PlusMinus
                    input={c.cart_quntity}
                    setInput={function (q) {
                      let j = Cart.find((el) => c.id == el.id);
                      j.cart_quntity = q;
                      setCart(Cart);
                    }}
                  />
                </PlusContainer>
                <VeryBald>
                  {sum_price}
                  {CURRENCY}
                </VeryBald>
                <img
                  onClick={() => {
                    //console.log(Cart, c.id);
                    setCart(Cart.filter((a) => a.id != c.id));
                  }}
                  src={trashLogo}
                />
              </CartItem>
            );
          })}
          {State == "cartCheck" && (
            <CartItem>
              <BoldText>TOTAL</BoldText>
              <GrayText style={{ textAlign: "left", fontWeight: "normal" }}>
                Taxes and shipping calculated at checkout.
              </GrayText>
              <BoldText className="sum">
                {sum}
                {CURRENCY}
              </BoldText>
              <Button
                onClick={() => {
                  if (sum != 0) {
                    setState("Buy");
                  }
                }}
              >
                Check Out
              </Button>
            </CartItem>
          )}{" "}
          {State == "Buy" && (
            <CartItem className="state-buy">
              <BoldText>TOTAL</BoldText>
              <BoldText className="sum">
                {sum}
                {CURRENCY}
              </BoldText>
              <GrayText style={{ textAlign: "left", fontWeight: "normal" }}>
                Taxes and shipping calculated at checkout.
              </GrayText>
              <GreyButton
                onClick={() => {
                  setState("cartCheck");
                }}
              >
                Back
              </GreyButton>
            </CartItem>
          )}
          {State == "Accepted" && (
            <>
              <CartItem>
                <div></div>
              </CartItem>
            </>
          )}
        </DivSlider>

        {State == "Buy" ? (
          isBtb ? (
            <>
              <Section>
                <div>
                  <div style={{ marginBottom: "12px", fontWeight: "600" }}>
                    Your information
                  </div>
                  <div>Company Name</div>
                  <Input
                    placeholder="Company Name"
                    value={user.company_name}
                    disabled="true"
                  />
                  <div>Contact Name</div>
                  <Input
                    placeholder="Name"
                    disabled="true"
                    value={user.contact_name}
                  />
                  <div>
                    <img src={mail_svg} style={{ marginRight: "8px" }} />
                    Email
                  </div>
                  <Input
                    placeholder="Name"
                    disabled="true"
                    value={user.email}
                  />
                  <div>VAT Number</div>
                  <Input
                    placeholder="Name"
                    disabled="true"
                    value={user.vat_number}
                  />
                  <div>
                    <img src={phone_svg} style={{ marginRight: "8px" }} />
                    Phone Number
                  </div>
                  <Input
                    placeholder="Name"
                    disabled="true"
                    value={user.phone_number}
                  />
                  <div>Site</div>
                  <Input
                    placeholder="Name"
                    disabled="true"
                    value={user.site_link}
                  />
                </div>
                <div>
                  <div>
                    This information was provided by you prior to registration
                    and cannot be changed.
                  </div>
                  <div>If you find an error in the data, please write to:</div>
                  <a
                    href="mailto: contact@toybutiq.ae"
                    style={{ color: "#6E7E44" }}
                  >
                    contact@toybutiq.ae
                  </a>
                </div>
              </Section>
              <BuySection>
                <span>
                  <h2>purchase cost</h2>
                  <div className="space" />
                  <p>
                    {sum}
                    {CURRENCY}
                  </p>
                </span>
                <span>
                  <p className="total">Total amount:</p>{" "}
                  <div className="space" />
                  <p className="sum">
                    {sum}
                    {CURRENCY}
                  </p>
                  <Button
                    onClick={() => {
                      if (Pending == false) {
                        setPending(true);
                        axios
                          .post(`${SERVER_URL}/api/cart/b2b`, {
                            cart: Cart,
                            user,
                          })
                          .then((response) => {
                            //console.log(response);
                            setState("Accepted");

                            window.localStorage.removeItem("Cart");
                            setCart([]);
                          })
                          .catch((error) => {
                            //console.log(error);
                          });
                      }
                    }}
                  >
                    Send a Request
                  </Button>
                </span>
              </BuySection>
            </>
          ) : (
            <>
              <Section>
                <div>
                  <div style={{ marginBottom: "12px", fontWeight: "600" }}>
                    Your information
                    <RedStar>*</RedStar>:
                  </div>
                  <div>First Name:</div>
                  <Input
                    placeholder="Your First Name"
                    value={Form.company_name}
                    onChange={(c) =>
                      setForm({ ...Form, company_name: c.target.value })
                    }
                  />
                  <div>Last Name:</div>
                  <Input
                    placeholder="Your Last Name"
                    value={Form.contact_name}
                    onChange={(c) =>
                      setForm({ ...Form, contact_name: c.target.value })
                    }
                  />
                  <div>
                    <img src={mail_svg} style={{ marginRight: "8px" }} />
                    Email:
                  </div>
                  <Input
                    placeholder="Your Email"
                    value={Form.email}
                    onChange={(c) =>
                      setForm({ ...Form, email: c.target.value })
                    }
                  />
                  <div>
                    <img src={phone_svg} style={{ marginRight: "8px" }} />
                    Phone:
                  </div>
                  <Input
                    placeholder="Your Phone"
                    value={Form.phone_number}
                    onChange={(c) =>
                      setForm({ ...Form, phone_number: c.target.value })
                    }
                  />
                </div>
                <div>
                  Carefully fill out your personal information, using this
                  information we will send you an email with a tracking number
                  to track your order!
                </div>
              </Section>
              <BuySection>
                <span>
                  <h2>purchase cost</h2>
                  <div className="space" />
                  <p>
                    {sum}
                    {CURRENCY}
                  </p>
                </span>
                <span>
                  <p className="total">Total amount:</p>{" "}
                  <div className="space" />
                  <p className="sum">
                    {sum}
                    {CURRENCY}
                  </p>
                  <Button className={field_complited ? "lol" : "non"}>
                    Send a Request
                  </Button>
                </span>
              </BuySection>
              {/* <UpdatedComponent /> */}
            </>
          )
        ) : (
          <>
            <Shelf style={{ marginTop: "22px" }} />
            <Shelf
              style={{ marginTop: "22px" }}
              text="Recently Viewed"
              history={true}
            />
          </>
        )}
      </Div44>
      <Footer />
    </StyledScreen>
  );
};

const BuySection = styled.div`
  border-radius: 32px;
  gap: 16px;
  display: flex;
  flex-direction: column;
  padding: 40px;
  margin: 20px 0 40px;
  background: #fff;

  & .space {
    flex-grow: 1;
  }
  & span {
    display: flex;
    align-items: center;
    color: rgba(35, 28, 30, 0.5);
    gap: 40px;

    @media (max-width: 600px) {
      flex-wrap: wrap;
    }
  }

  & span:last-child {
    margin-top: 44px;
    @media (max-width: 600px) {
      justify-content: space-between;
    }
  }

  & span:last-child .space {
    @media (max-width: 600px) {
      display: none;
    }
  }
  & p {
    font-size: 24px;

    font-family: Onest;
  }

  & h2 {
    font-family: Onest;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }

  & .total {
    color: #231c1e;

    font-family: Onest;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
  }

  & .sum {
    color: #231c1e;

    font-family: Onest;
    font-size: 32px;
  }
`;

const CartDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  & > div {
    text-align: left;
    @media (max-width: 600px) {
      font-size: 10px;
    }
  }

  & > div:last-child {
    font-size: 16px;
    font-weight: 300;
    @media (max-width: 600px) {
      font-size: 10px;
    }
  }
`;

const GreyButton = styled.button`
  border-radius: 8px;
  outline: none;
  border: none;
  background: rgba(35, 28, 30, 0.05);

  backdrop-filter: blur(10px);
  width: 120px;
  height: 50px;
  display: grid;
  align-items: center;
  transition: all 0.5s;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
  justify-items: center;

  color: rgba(35, 28, 30, 0.3);

  text-align: right;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
`;

import React, { useContext, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Context, SERVER_URL } from "../../../const";

const StyledScreen = styled.div`
  align-items: center;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  padding: 32px 20px;
  position: relative;
  max-width: 430px;
  border-radius: 16px;

  @media (max-width: 900px) {
    width: 100%;
    border-radius: 0;
    max-width: none;
  }

  & .view {
    align-items: center;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    justify-content: space-between;
    position: relative;
    width: 100%;
  }

  & .text-wrapper-3 {
    color: #231c1e;
    font-family: "Onest-Medium", Helvetica;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: -0.2px;
    line-height: 23px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .x-square {
    height: 32px;
    position: relative;
    width: 32px;
  }

  & .view-2 {
    align-items: center;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 24px;
    justify-content: center;
    position: relative;
    width: 100%;
  }

  & .component-91 {
    align-self: stretch !important;
    flex: 0 0 auto !important;
    width: 100% !important;
  }

  & .login-to-account-wrapper {
    align-items: center;
    background-color: #231c1e;
    border-radius: 8px;
    display: flex;
    flex: 0 0 auto;
    gap: 16px;
    justify-content: center;
    overflow: hidden;
    padding: 16px 16px 14px;
    position: relative;
    width: 190px;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      transform: scale(1.05);
    }
  }

  & .login-to-account {
    color: #ffffff;
    font-family: "Manrope-ExtraBold", Helvetica;
    font-size: 16px;
    font-weight: 800;
    letter-spacing: -0.16px;
    line-height: 18.4px;
    margin-top: -3px;
    position: relative;
    text-align: center;
    white-space: nowrap;
    width: fit-content;
  }

  & .view-3 {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    padding: 8px 0px 0px;
    position: relative;
  }

  & .view-4 {
    align-items: center;
    display: inline-flex;
    flex-wrap: wrap;
    flex: 0 0 auto;
    gap: 16px;
    justify-content: center;
    position: relative;
  }

  & .text-wrapper-4 {
    color: #231c1e;
    font-family: "Onest-Regular", Helvetica;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: -0.16px;
    line-height: 18.4px;
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .text-wrapper-5 {
    color: #6e7e44;
    font-family: "Onest-SemiBold", Helvetica;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.16px;
    line-height: 18.4px;
    margin-top: -1px;
    position: relative;
    text-decoration: underline;
    white-space: nowrap;
    width: fit-content;
    cursor: pointer;
  }
`;

export const Form = () => {
  const [Login, setLogin] = useState("");
  const [Password, setPassword] = useState("");
  const [Error, setError] = useState("");
  const { isBtb, setCart, Cart } = useContext(Context);
  //console.log(Error);
  let login = () => {
    // if (Login == "asdasd@asd.com" && Password == "123456") {
    //   window.localStorage.setItem("Btb", true);
    //   window.location.replace("/");
    // }
    axios
      .post(`${SERVER_URL}/api/auth/local`, {
        identifier: Login,
        password: Password,
      })
      .then((response) => {
        window.localStorage.setItem("User", JSON.stringify(response.data.user));
        window.localStorage.setItem("Btb", true);
        window.localStorage.setItem("Time", new Date());

        window.location = "/";
        // //console.log("User token", response.data.jwt);
      })
      .catch((error) => {
        if (error.response.status == 400) {
          //console.log(error.data);
          setError(error.response.data.error.message);
          return;
        }
        //console.log("An error occurred:", error.response);
      });
  };
  return (
    <StyledScreen>
      <div className="view">
        <div className="text-wrapper-3">Partner Account Login</div>
      </div>
      <div className="view-2">
        <div style={{ width: "100%" }}>
          <p>Login</p>
          <Input
            placeholder="Your Company Name"
            value={Login}
            onChange={(c) => setLogin(c.target.value)}
          />
        </div>
        <div style={{ width: "100%" }}>
          <p>Password</p>
          <Input
            placeholder="Password"
            type="password"
            value={Password}
            onChange={(c) => setPassword(c.target.value)}
          />
        </div>
      </div>
      <div>{Error}</div>
      <div className="login-to-account-wrapper">
        <div className="login-to-account" onClick={login}>
          LOGIN TO ACCOUNT
        </div>
      </div>
      <div className="view-3">
        <div className="view-4">
          <p className="text-wrapper-4">
            Don&#39;t have an affiliate account yet?
          </p>
          <a className="text-wrapper-5" href="/become_partner">
            Become a partner
          </a>
        </div>
        {/* <div className="view-4">
          <div className="text-wrapper-4">Forgot your password?</div>
          <div className="text-wrapper-5">Restore password</div>
        </div> */}
      </div>
    </StyledScreen>
  );
};

const Input = styled.input`
  border: none;
  border-radius: 8px;
  background: #f6f6f6;
  height: 60px;
  padding: 0px 20px;
  width: 100%;
  margin-bottom: 24px;
  margin-top: 8px;

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

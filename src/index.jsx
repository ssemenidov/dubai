import React, { useState } from "react";
import ReactDOMClient from "react-dom/client";
import { MainSreen } from "./screens/MainScreen";
import { Catalog } from "./screens/Catalog";
import { SmallItemCard } from "./components/Element";
import { Header } from "./components/header";
import { ItemScreen } from "./screens/ItemScreen/ItemScreen";
import { Cart } from "./screens/Cart/Cart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainScreen2 } from "./screens/MainScreen2/MainScreen2";
import { BecomeAPartner } from "./screens/BecomeAPartner/BecomeAPartner";
import { LogIn } from "./screens/LogIn/LogIn";
import { Search } from "./screens/Search/Search";
import { Context } from "./const";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Privacy } from "./screens/Privacy/privacy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainSreen />,
  },
  {
    path: "/catalog",
    element: <MainScreen2 />,
  },
  {
    path: "/catalog/all",
    element: <Catalog />,
  },
  {
    path: "/catalog/item/:itemId",
    element: <ItemScreen />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/become_partner",
    element: <BecomeAPartner />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
]);

function App() {
  let time = window.localStorage.getItem("Time");
  if (time != null) {
    time = new Date(Date.parse(time));
    if (new Date().getDate() > time.getDate() + 2) {
      window.localStorage.clear();
    }
  }
  let [user, useUser] = useState(
    JSON.parse(window.localStorage.getItem("User") || "{}")
  );
  let [isBtb, useBtb] = useState(
    JSON.parse(window.localStorage.getItem("Btb") || "false")
  );
  const [Cart, setCart] = useState(
    JSON.parse(window.localStorage.getItem("Cart") || "[]")
  );

  let Visited = JSON.parse(window.localStorage.getItem("Visited") || "[]");

  return (
    <Context.Provider
      value={{
        Cart,
        setCart: function (c) {
          window.localStorage.setItem("Cart", JSON.stringify(c));
          //console.log("updated");
          setCart([...c]);
        },
        user,
        isBtb,
        Visited,
        setVisited: function (c) {
          Visited = Visited.filter((i) => i.id != c.id);
          window.localStorage.setItem(
            "Visited",
            JSON.stringify([c, ...Visited])
          );
        },
      }}
    >
      <RouterProvider router={router} />
    </Context.Provider>
  );
}

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(
  <React.StrictMode>
    {/* <BecomeAPartner /> */}
    {/* <LogIn /> */}
    <App />
  </React.StrictMode>
);

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Main/MainLayout";
import AboutUs from "../Pages/AboutUs";
import MortgageCalculator from "../Pages/MortgageCalculator";
import StartPage from "../Pages/StartPage";
import Home from "../Pages/Home";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/mortgage",
        element: <MortgageCalculator />,
      },
      {
        path: "/start-page",
        element: <StartPage />,
      },
    ],
  },
]);

export default Router;

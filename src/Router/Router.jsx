import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Main/MainLayout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
]);

export default Router;

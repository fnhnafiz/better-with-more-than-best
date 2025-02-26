import React from "react";
import Navbar from "../Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;

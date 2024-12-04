import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";

const Layout = () => (
  <div>
    <Navbar />
    <Outlet />
    <Footer />
  </div>
);
export default Layout;
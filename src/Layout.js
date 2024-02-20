import { Outlet, Link } from "react-router-dom";
import React from "react";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/about">About this page</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

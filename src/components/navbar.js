import React from "react";
import "./styles.css";
import { Outlet, Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <nav>
        <a href="##" className="logo-nav">
          Git Explorer
        </a>
        <div className="link-cont">
          <Link to='/'>Repos</Link>
          <Link to='/users'>Users</Link>
          <Link to="/search">Search</Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;

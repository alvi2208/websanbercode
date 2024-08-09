import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

const Navigation = () => {
  return (
    <>
      <Home />
      <About />
      <Contact />
    </>
  );
};

export default Navigation;

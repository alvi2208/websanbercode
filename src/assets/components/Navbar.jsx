import React from "react";
import { Link } from "react-router-dom";
import Tugas6 from "../tugas/Tugas6";
import Tugas7 from "../tugas/Tugas7";
import Tugas8 from "../tugas/Tugas8";
import Tugas9 from "../tugas/Tugas9";
import Tugas10 from "../tugas/Tugas10";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Tugas6">Tugas6</Link>
        </li>
        <li>
          <Link to="/Tugas7">Tugas7</Link>
        </li>
        <li>
          <Link to="/Tugas8">Tugas8</Link>
        </li>
        <li>
          <Link to="/Tugas9">Tugas9</Link>
        </li>
        <li>
          <Link to="/Tugas10">Tugas10</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

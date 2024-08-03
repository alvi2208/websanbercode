// index.js atau index.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./assets/pages/Home.jsx";
import Tugas6 from "./assets/tugas/Tugas6.jsx";
import Tugas7 from "./assets/tugas/Tugas7";
import Tugas8 from "./assets/tugas/Tugas8";
import Tugas9 from "./assets/tugas/Tugas9";
import Tugas10 from "./assets/tugas/Tugas10";
import Tugas11 from "./assets/tugas/Tugas11.jsx";
import Navigation from "./assets/pages/Navigation.jsx";

const App = () => (
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Tugas6" element={<Tugas6 />} />
      <Route path="/Tugas7" element={<Tugas7 />} />
      <Route path="/Tugas8" element={<Tugas8 />} />
      <Route path="/Tugas9" element={<Tugas9 />} />
      <Route path="/Tugas10" element={<Tugas10 />} />
      <Route path="/Tugas11" element={<Tugas11 />} />
      <Route path="/Navigation" element={<Navigation />} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

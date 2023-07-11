import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Plato from "./Pages/Plato";
import Socrates from "./Pages/Socrates";
import Aristotle from "./Pages/Aristotle";


const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/socrates" element={<Socrates />} />
        <Route path="/Plato" element={<Plato />} />
        <Route path="/Aristotle" element={<Aristotle />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Cuisine from "../components/Cuisine";

function Pages() {
  return (
    <Routes>
      <Route path="/cuisine/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
    </Routes>
  );
}

export default Pages;

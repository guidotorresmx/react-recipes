import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import Nav from "./Nav";
import Footer from "./Footer";
import Gallery from "./Gallery";
import About from "./About";
import Video from "./Video";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/video" element={<Video />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

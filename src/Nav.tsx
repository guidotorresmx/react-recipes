import { Routes, Route, Link } from "react-router-dom";
import "./css/Nav.css";
import "./css/background.css";
import "./css/defaults.css";
import ".//css/index.css";
import logo from "./media/logo.svg";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid">
      <img src={logo} className="App-logo rounded float-start" alt="logo" />

      <a className="navbar-brand" href="#">
        guidotorresmx
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/video">Video</Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
        </ul>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Nav;

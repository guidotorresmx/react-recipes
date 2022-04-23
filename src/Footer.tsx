import { Routes, Route, Link } from "react-router-dom";
import "./css/Nav.css";
import "./css/background.css";
import "./css/defaults.css";
import ".//css/index.css";
import logo from "./media/logo.svg";

function Footer() {
  return (
    <footer className="footer bg-light">
      <div className="d-flex flex-column bd-highlight mb-3 justify-content-evenly min-100">
        <div className="container">
          <span className="text-muted">
            <p>
              <a title="twitter" href="//twitter.com/guidotorresmx">
                <i className="fa fa-brands fa-twitter icon"></i>
              </a>
              {/* Github*/}
              <a title="github" href="//github.com/guidotorresmx">
                <i className="fa fa-brands fa-github icon"></i>
              </a>
              {/* Ins*/}
              <a title="instagram" href="//www.instagram.com/guidotorresmx">
                <i className="fa fa-brands fa-instagram icon"></i>
              </a>
              {/* Linkedin*/}
              <a title="linkedin" href="//www.linkedin.com/in/guidotorresmx">
                <i className="fa fa-brands fa-linkedin icon"></i>
              </a>
              {/* Facebook*/}
              <a title="facebook" href="//www.facebook.com/guidotorresmx">
                <i className="fa fa-brands fa-facebook icon"></i>
              </a>
              {/* Mail*/}
              <a title="mail" href="mailto:marco@guidotorres.mx">
                <i className="fa fa-solid fa-envelope-open icon"></i>
              </a>
              {/* Whatsapp*/}
              <a title="whatsapp" href="//wa.me/16479066194">
                <i className="fa fa-brands fa-whatsapp icon"></i>
              </a>
              {/* Telegram*/}
              <a title="telegram" href="//t.me/guidotorresmx">
                <i className="fa fa-brands fa-telegram icon"></i>
              </a>
              <br />
              2022. guidotorresmx. All rights unreserved. Created by
              <a href="https://github.com/guidotorresmx">@guidotorresmx. </a>
              Source code can be found at
              <a href="https://github.com/guidotorresmx/eleventy-website">
                @guidotorresmx/eleventy-website.{" "}
              </a>
              This website is built with React, Bootstrap, and TypeScript.
              Pug.
            </p>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

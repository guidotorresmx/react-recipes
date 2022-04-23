import { Routes, Route, Link } from "react-router-dom";
import "./css/Video.css";
import "./css/background.css";
import "./css/defaults.css";
import ".//css/index.css";
import logo from "./media/logo.svg";

function Video() {
  debugger;
  return (
    <iframe
      width="420"
      height="315"
      src="https://www.youtube.com/embed/tgbNymZ7vqY"
    ></iframe>
  );
}

export default Video;

import { Routes, Route, Link } from "react-router-dom";
import "./css/gallery.css";
import "./css/background.css";
import "./css/defaults.css";
import ".//css/index.css";
import logo from "./media/logo.svg";
import UtilsGallery from "./Utils";

function Gallery() {
  interface imgData {
    largeURL: string;
    thumbnailURL: string;
    width?: number;
    height?: number;
  }
  let imgArray: Array<imgData> = [];
  let path = "";
  for (let i = 1; i <= 7; i++) {
    path = "./react-website/" + i + ".jpg";
    imgArray.push({
      largeURL: path,
      thumbnailURL: path,
    });
  }

  return (
    <div>
      <UtilsGallery galleryID="custom-gallery" images={imgArray} />
    </div>
  );
}

export default Gallery;

import React, { useEffect } from "react";
//import PhotoSwipeLightbox from "/photoswipe/photoswipe-lightbox.esm.js";
import PhotoSwipeLightbox from "photoswipe/lightbox";
//import PhotoSwipe from "/photoswipe/photoswipe.esm.js";
import "photoswipe/style.css";

export default function GalleryUtils(props) {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      imageClickAction: "close",
      tapAction: "close",

      // tap delay is removed if set to false
      doubleTapAction: true,
      gallery: "#" + props.galleryID,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();
    lightbox.on("close", () => {
      lightbox.destroy();
    });
    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  });

  return (
    <div className="pswp-gallery" id={props.galleryID}>
      {props.images.map((image) => (
        <a href={image.largeURL}>
          <img className="gallery-img" src={image.thumbnailURL} alt="" />
        </a>
      ))}
    </div>
  );
}

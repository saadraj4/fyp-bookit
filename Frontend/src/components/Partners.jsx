import React from "react";
import img1 from "../assets/img/bus/10.png";
import img2 from "../assets/img/bus/13.png";
import img3 from "../assets/img/bus/4.png";
import img4 from "../assets/img/bus/5.png";
import img5 from "../assets/img/bus/6.png";
import img6 from "../assets/img/bus/7.png";
import img7 from "../assets/img/bus/8.png";
import "./../App.css";

export default function Partners() {
  const images = [img1, img2, img3, img4, img5, img6, img7];

  // Create a doubled list of images to facilitate the infinite loop.
  const doubledImages = [...images, ...images];

  return (
    <div className="px-20">
      <div className="text-slate-800 md:text-5xl text-3xl mt-20 mb-10">
        Our Partners
      </div>
      <div className="marquee-container">
        <div className="marquee-content">
          {doubledImages.map((img, index) => (
            <img key={index} src={img} alt={`Partner ${index % 7 + 1}`} style={{ marginRight: "10px" }} />
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import heart from "../images/heart-svgrepo-com.svg";
import build from "../images/build-svgrepo-com.svg";
import music from "../images/music-3-svgrepo-com.svg";
import footer from "../css/Footer.module.css";

export default function Footer() {
  const current = new Date();
  const year = `${current.getFullYear()}`;

  return (
    <div className={footer.footerContainer}>
      <p>
        {" "}
        <img src={build} alt="" className={footer.footerIcons} /> with{" "}
        <img src={heart} alt="" className={footer.footerIcons} /> and{" "}
        <img src={music} alt="" className={footer.footerIcons} /> by Medhavi
        Basera | © {year}
      </p>
    </div>
  );
}

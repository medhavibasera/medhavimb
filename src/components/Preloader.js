import React from "react";
import Lottie from "react-lottie";
import homeanimation from "../images/welcome.json";

export default function Preloader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: homeanimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div id="preloader" style={{ pointerEvents: "none" }}>
      <Lottie options={defaultOptions} height="70%" width="70%" />
    </div>
  );
}

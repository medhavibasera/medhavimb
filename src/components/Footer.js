import React from "react";
import heart from "../images/heart.png";
import program from "../images/programming.png";
export default function Footer() {
  return (
    <div
      style={{
        minHeight: "8vh",
        backgroundColor: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p
        style={{
          color: "#fff",
        }}
      >
        {" "}
        <img
          src={program}
          alt=""
          style={{ margin: "0px 4px", width: "24px", height: "24px" }}
        />{" "}
        with{" "}
        <img
          src={heart}
          alt=""
          style={{ margin: "0px 4px", width: "24px", height: "24px" }}
        />{" "}
        by Medhavi Basera  |  © 2021
      </p>
    </div>
  );
}

import React from "react";
import landing from "../css/LandingPage.module.css";
import { Container, Row, Col } from "react-bootstrap";
import landingimg from "../images/Landing-img.png";
import Lottie from "react-lottie";
// npm install --save react-lottie --legacy-peer-deps
import animationData from "../images/lottie.json";
function LandingPage() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      name="landing"
      style={{
        backgroundColor: "#fff",
        position: "relative",
        zIndex: "10",
      }}
    >
      <Container className={landing.Landingpage}>
        <Row xs={1} md={2}>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {/* style={{ backgroundColor: "red" }} */}
            <h1 className={landing.Landingpageheader}>
              Hello, <br />
              I'm
              <br /> Medhavi Basera.
              <br />
            </h1>
            <p
              className={landing.Landingpagedesc}
              style={{ textAlign: "left", background: "yellow", padding: "" }}
            >
              I'm a full-stack web developer
            </p>
          </Col>
          <Col className={landing.LandingPageimgsec}>
            <div>
              <img src={landingimg} className={landing.Landingpageimg} alt="" />
            </div>

            <Lottie
              options={defaultOptions}
              height="600px"
              width="100%"
              style={{ pointerEvents: "none" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;

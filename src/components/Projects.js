import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import "../css/Projects.css";
import Cards from "./Cards";
import background from "../images/woman-typing.mp4";

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="projectpage" name="project">
      <video autoPlay loop muted id="video" style={{ pointerEvents: "none" }}>
        <source src={background} type="video/mp4" />
      </video>
      <Container>
        <h1
          style={{
            marginBottom: "50px",
            marginTop: "50px",
            fontFamily: "Ubuntu",
            fontSize: "40px",
            fontWeight: "900",
            color: "#fff",
            zIndex: "10",
            position: "relative",
          }}
        >
          .projects( )
        </h1>
      </Container>
      <Cards />
    </div>
  );
}
export default Projects;

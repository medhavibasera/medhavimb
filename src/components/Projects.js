import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import "../css/Projects.css";
import Cards from "./Cards";
function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="projectpage" name="project">
      <Container>
        <h1
          style={{
            marginBottom: "50px",
            marginTop: "50px",
            fontFamily: "EB Garamond",
            fontSize: "50px",
            fontWeight: "900",
            color: "#fff",
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

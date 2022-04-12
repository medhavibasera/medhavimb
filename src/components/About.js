import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import about from "../css/About.module.css";
// import me from "../images/myphoto.jpg";
import Medhavi from "../images/Medhavi.png";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className={about.Aboutpage} name="about">
      <Container className={about.Aboutpagecontainer}>
        <h1 className={about.AboutHeading}>.about( )</h1>
        <Row xs={1} md={2}>
          <Col className={about.Aboutpagediv}>
            <img
              data-aos="fade-up"
              src={Medhavi}
              className={about.Aboutpagephoto}
              alt=""
            />
          </Col>
          <Col className={about.Aboutpagediv}>
            <div data-aos="fade-up">
              <p className={about.Aboutpageintro}>
                I'm a passionate and creative developer from India with a strong
                interest in Open source projects. A Computer Science
                Undergraduate who likes to play around with frontends 🔮.
                <br />
                Some of the technologies and tools used by me include{"  "}
                <br />
                <span></span>
                <span style={{ color: "rgb(59, 216, 245)" }}>ReactJS</span>,
                {"  "}
                <span></span>
                <span>Next.js</span>,{"  "}
                <span></span>
                <span style={{ color: "rgb(255, 166, 17)" }}>Firebase</span>,
                {"  "}
                <span></span>
                <span style={{ color: "#764ABC" }}>Redux</span>,{"  "}
                <span></span>
                <span style={{ color: "rgb(60, 135, 58)" }}>NodeJS</span>,{"  "}
                <span></span>
                <span style={{ color: "rgb(243, 79, 41)" }}>Git .</span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className={about.Aboutpageexperience} name="experience">
        <h1 className={about.AboutHeading}>.experience( )</h1>
        <VerticalTimeline style={{ marginBottom: "50p" }}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="March 2022 - Present"
            style={{ fontFamily: "Ubuntu" }}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ fontWeight: "800" }}
            >
              Software Development Engineer Intern
            </h3>
            <h5 className="vertical-timeline-element-subtitle">Awign</h5>
            {/* <p>Developed website for various Hackathon and events.</p> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2021 - Present"
            style={{ fontFamily: "Ubuntu" }}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ fontWeight: "800" }}
            >
              Frontend Web Developer
            </h3>
            <h5 className="vertical-timeline-element-subtitle">
              Microsoft Student Ambassadors Community KIIT
            </h5>
            {/* <p>Developed website for various Hackathon and events.</p> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2021 - August 2021"
            style={{ fontFamily: "Ubuntu" }}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ fontWeight: "800" }}
            >
              Web developer Intern
            </h3>
            <h5 className="vertical-timeline-element-subtitle">DoubtConnect</h5>
            {/* <p>
              Developed an Ed-Tech platform with real-time audio and video
              interaction.
            </p> */}
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            style={{ fontFamily: "Ubuntu" }}
            date="Nov 2020 - Jan 2021"
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ fontWeight: "800" }}
            >
              Executive
            </h3>
            <h5 className="vertical-timeline-element-subtitle">KIIT E-CELL</h5>
            {/* <p>Part of organizing committee of Hult Prize 2020.</p> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            style={{ fontFamily: "Ubuntu" }}
            date="Feb 2020 - Nov 2020"
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ fontWeight: "800" }}
            >
              Junior Executive
            </h3>
            <h5 className="vertical-timeline-element-subtitle">KIIT E-CELL</h5>
            {/* <p>
              Part of an organizing committee of events, I-camp (Asian’s biggest
              Internship camp) & E-Summit 2020.
            </p> */}
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};
export default About;

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

import me from "../images/myphoto.jpg";
import resume from "../images/resume.png";
import reactjs from "../images/React.png";
import reactbootstrap from "../images/bootstrap.png";
import firebase from "../images/logo-firebase-icon.png";
import nodejs from "../images/Nodejs.png";
import mongodb from "../images/mongodb.png";
import git from "../images/Git-Icon-1788C.png";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className={about.Aboutpage} name="about">
      <Container className={about.Aboutpagecontainer}>
        <h1
          style={{
            marginLeft: "8%",
            marginBottom: "40px",
            display: "inline-block",
            // color: "#7C9473",
            fontFamily: "EB Garamond",
            fontSize: "50px",
            fontWeight: "900",
          }}
        >
          .about( )
        </h1>
        <Row xs={1} md={2}>
          <Col className={about.Aboutpagediv}>
            <img
              data-aos="fade-up"
              src={me}
              className={about.Aboutpagephoto}
              alt=""
            />
          </Col>
          <Col className={about.Aboutpagediv}>
            <div data-aos="fade-up">
              <p className={about.Aboutpageintro}>
                I am a passionate and creative developer from India with a
                strong interest in Open source projects. I am currently pursuing
                B.Tech in Computer Science and Engineering. I have been into
                competitive coding and web develpment for a while now ,
                committed to developing innovative materials. I am highly
                self-motivated, enthusiastic and always willing to learn more.
                <br />
                Some of the technologies and tools used by me include{"  "}
                <br />
                <span>
                  <img
                    src={reactjs}
                    alt=""
                    style={{ width: "25px", height: "25px" }}
                  />
                </span>
                <span style={{ color: "rgb(59, 216, 245)" }}>ReactJS</span>,
                {"  "}
                <span>
                  <img
                    src={reactbootstrap}
                    alt=""
                    style={{ width: "25px", height: "25px" }}
                  />
                </span>
                <span style={{ color: "rgb(59, 216, 245)" }}>
                  React-Bootstrap
                </span>
                ,{"  "}
                <span>
                  <img
                    src={firebase}
                    alt=""
                    style={{ width: "25px", height: "25px" }}
                  />
                </span>
                <span style={{ color: "rgb(255, 166, 17)" }}>Firebase</span>,
                {"  "}
                <span>
                  <img
                    src={mongodb}
                    style={{ width: "20px", height: "20px" }}
                    alt=""
                  />
                </span>
                <span style={{ color: "rgb(63, 160, 55)" }}>MongoDB</span>,
                {"  "}
                <span>
                  <img
                    src={nodejs}
                    style={{ width: "25px", height: "25px" }}
                    alt=""
                  />
                </span>
                <span style={{ color: "rgb(60, 135, 58)" }}>NodeJS</span>,{"  "}
                <span>
                  <img
                    src={git}
                    alt=""
                    style={{ width: "25px", height: "25px" }}
                  />
                </span>
                <span style={{ color: "rgb(243, 79, 41)" }}>Git .</span>
              </p>
            </div>
            <div>
              <a href="https://drive.google.com/file/d/1uWlj-Rx4qoRapJLOk_Wq-7FG0n0dXz-j/view?usp=sharing" download="MedhaviBasera_Resume.pdf">
                <img
                  src={resume}
                  className={about.Aboutpageresume}
                  alt=""
                  data-aos="fade-left"
                />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <div className={about.Aboutpageexperience} name="experience">
        <h1
          style={{
            marginLeft: "8%",
            marginBottom: "40px",
            display: "inline-block",
            fontFamily: "EB Garamond",
            fontSize: "50px",
            fontWeight: "900",
          }}
        >
          .experience( )
        </h1>
        <VerticalTimeline style={{ marginBottom: "50p" }}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2021 - Present"
            style={{ fontFamily: "Uchen" }}
            // contentStyle={{ background: "#FBEEAC", color: "#000" }}
            // contentArrowStyle={{ borderRight: "7px solid  #FBEEAC" }}
            // iconStyle={{ background: "#D3E0EA", color: "#fff" }}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ fontWeight: "700" }}
            >
              Web developer Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">DoubtConnect</h4>
            <p>
              Developing an Ed-Tech platform with real-time audio and video
              interaction.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // contentStyle={{ background: "#FBEEAC", color: "#000" }}
            // contentArrowStyle={{ borderRight: "7px solid  #FBEEAC" }}
            date="Feb 2021 - Present"
            style={{ fontFamily: "Uchen" }}
            // iconStyle={{ background: "#D3E0EA", color: "#000" }}
            //   icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ fontWeight: "700" }}
            >
              Frontend Web Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Microsoft Student Ambassadors Community KIIT
            </h4>
            <p>Developed website for various Hackathon and events.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            style={{ fontFamily: "Uchen" }}
            // contentStyle={{ background: "#FBEEAC", color: "#000" }}
            // contentArrowStyle={{ borderRight: "7px solid  #FBEEAC" }}
            date="Nov 2020 - Jan 2021"
            // iconStyle={{ background: "#D3E0EA", color: "#fff" }}
            //   icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ fontWeight: "700" }}
            >
              Executive
            </h3>
            <h4 className="vertical-timeline-element-subtitle">KIIT E-CELL</h4>
            <p>Part of organizing committee of Hult Prize 2020.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            style={{ fontFamily: "Uchen" }}
            // contentStyle={{ background: "#FBEEAC", color: "#000" }}
            // contentArrowStyle={{ borderRight: "7px solid  #FBEEAC" }}
            date="Feb 2020 - Nov 2020"
            // iconStyle={{ background: "#D3E0EA", color: "#fff" }}
            //   icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ fontWeight: "700" }}
            >
              Junior Executive
            </h3>
            <h4 className="vertical-timeline-element-subtitle">KIIT E-CELL</h4>
            <p>
              Part of an organizing committee of events, I-camp (Asian’s biggest
              Internship camp) & E-Summit 2020.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};
export default About;

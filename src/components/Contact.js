import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col } from "react-bootstrap";
import contact from "../css/Contact.module.css";

import mail from "../images/gmail.png";
import github from "../images/github-logo-square.png";
import Linkedin from "../images/linkedin.png";
import location from "../images/location.png";

export default function Contact() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className={contact.contactpage} name="contact">
      <Container className={contact.contactpagecontainer}>
        <h1
          data-aos="fade-right"
          style={{
            marginLeft: "8%",
            marginBottom: "50px",
            marginTop: "50px",
            display: "inline-block",
          }}
        >
          .contact( )
        </h1>
        <Row xs={1} md={2}>
          <Col className={contact.contactpagediv}></Col>
          <Col
            className={contact.contactpagediv}
            style={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                margin: "20px 0px",
              }}
            >
              <img
                src={location}
                style={{ height: "50px", width: "50px" }}
                alt=""
              />
              <span
                style={{
                  fontSize: "30px",
                  paddingTop: "10px",
                  paddingLeft: "10px",
                }}
              >
                {" "}
                Dehradun, Uttarakhand
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                margin: "20px 0px",
              }}
            >
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
                <img
                  src={mail}
                  style={{ height: "50px", width: "50px", cursor: "pointer" }}
                  alt=""
                />
              </a>

              <span
                style={{
                  fontSize: "30px",
                  paddingTop: "10px",
                  paddingLeft: "10px",
                }}
              >
                {" "}
                mb.medhavi@gmail.com
              </span>
            </div>
            <h1 style={{ marginBottom: "30px" }}>Socials</h1>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                width: "60%",
              }}
            >
              <a href="https://github.com/medhavi11">
                <img
                  src={github}
                  style={{ height: "50px", width: "50px", cursor: "pointer" }}
                  alt=""
                />
              </a>
              <a href="https://www.linkedin.com/in/medhavibasera/">
                <img
                  src={Linkedin}
                  style={{ height: "50px", width: "50px", cursor: "pointer" }}
                  alt=""
                />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

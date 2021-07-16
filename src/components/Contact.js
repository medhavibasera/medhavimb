import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import contact from "../css/Contact.module.css";

import mail from "../images/gmail.png";
import github from "../images/github-logo-square.png";
import Linkedin from "../images/linkedin.png";
import location from "../images/location.png";

export default function Contact() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_t6blyra",
        "template_4xo76cl",
        e.target,
        "user_H34d8USbcfa1e9x5idUsk"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  const [text, settext] = useState("Submit");
  const [displays, setdisplay] = useState(false);
  function displaymessage() {
    // window.alert("Submitted !");
    settext("Submitted");
    setdisplay(true);
  }
  return (
    <div className={contact.contactpage} name="contact">
      <Container className={contact.contactpagecontainer}>
        <h1
          // data-aos="fade-right"
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
          <Col className={contact.contactpagediv}>
            <h2
              style={{
                marginBottom: "20px",
                fontFamily: "Open Sans",
                fontSize: "28px",
                fontWeight: "600",
              }}
            >
              {" "}
              Get in touch !
            </h2>
            <div
              className="forms"
              style={{
                background: "#053742",
                color: "#fff",
                padding: "20px",
                borderRadius: "20px",
              }}
            >
              <Form onSubmit={sendEmail} 
              // data-aos="fade-right"
              >
                {displays ? (
                  <p
                    style={{
                      color: "#93D9A3",
                      fontSize: "15px",
                    }}
                  >
                    Success !
                  </p>
                ) : null}

                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" name="name" placeholder="👩🏻" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="user-email"
                    placeholder="📧"
                  />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    placeholder="📨"
                    rows={3}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  value="Send"
                  onClick={displaymessage}
                >
                  {text}
                </Button>
              </Form>
            </div>
          </Col>
          <Col
            className={contact.contactpagediv}
            style={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
              flexDirection: "column",
              marginTop: "10%",
              width: "100%",
            }}
            // data-aos="fade-left"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                margin: "20px 0px",
              }}
            >
              <img
                src={location}
                style={{ height: "30px", width: "30px" }}
                alt=""
              />
              <span
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
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
                justifyContent: "right",
                textAlign: "right",

                margin: "20px 0px",
              }}
            >
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
                <img
                  src={mail}
                  style={{ height: "30px", width: "30px", cursor: "pointer" }}
                  alt=""
                />
              </a>

              <span
                style={{
                  fontSize: "24px",
                  textAlign: "right",
                  fontWeight: "600",
                  paddingLeft: "10px",
                }}
              >
                {" "}
                mb.medhavi@gmail.com
              </span>
            </div>
            <h2
              style={{
                marginBottom: "30px",
                fontFamily: "Open Sans",
                fontSize: "24px",
                fontWeight: "600",
              }}
            >
              {" "}
              Socials
            </h2>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                width: "20%",
              }}
            >
              <a href="https://github.com/medhavi11">
                <img
                  src={github}
                  style={{ height: "30px", width: "30px", cursor: "pointer" }}
                  alt=""
                />
              </a>
              <a href="https://www.linkedin.com/in/medhavibasera/">
                <img
                  src={Linkedin}
                  style={{ height: "30px", width: "30px", cursor: "pointer" }}
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

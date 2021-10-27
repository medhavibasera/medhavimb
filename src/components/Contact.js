import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
import { Container, Row, Col, Form } from "react-bootstrap";
import contact from "../css/Contact.module.css";
import Alert from "./Alert.js";

import hi from "../images/hi.png";
import mail from "../images/gmail.png";
import github from "../images/github-logo-square.png";
import Linkedin from "../images/linkedin.png";
import location from "../images/location.png";
import { Divider } from "@material-ui/core";

export default function Contact() {
  const [name, setnameboolean] = useState(false);
  const [email, setemailboolean] = useState(false);
  const [message, setmessageboolean] = useState(false);
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredemail, setEnteredemail] = useState("");
  const [enteredmessage, setEnteredmessage] = useState("");

  const isentername = (event) => {
    if (event.target.value.trim().length > 0) {
      setnameboolean(true);
    } else {
      setnameboolean(false);
    }
    setEnteredUsername(event.target.value);
  };
  const isenteremail = (event) => {
    if (event.target.value.trim().length > 0) {
      setemailboolean(true);
    } else {
      setemailboolean(false);
    }
    setEnteredemail(event.target.value);
  };
  const isentermessage = (event) => {
    if (event.target.value.trim().length > 0) {
      setmessageboolean(true);
    } else {
      setmessageboolean(false);
    }
    setEnteredmessage(event.target.value);
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  function sendEmail(e) {
    e.preventDefault();
    if (name && email && message) {
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
    setEnteredUsername("");
    setEnteredemail("");
    setEnteredmessage("");
    // setnameboolean(false);
    // setemailboolean(false);
    // setmessageboolean(false);
  }

  // console.log("name:", name);
  // console.log("email:", email);
  // console.log("msg:", message);

  return (
    <div className={contact.contactpage} name="contact">
      <Container className={contact.contactpagecontainer}>
        <h1
          // data-aos="fade-right"
          style={{
            marginBottom: "50px",
            marginTop: "50px",
            display: "inline-block",
            fontFamily: "EB Garamond",
            fontSize: "50px",
            fontWeight: "900",
          }}
        >
          .contact( )
        </h1>
        <Row xs={1} md={2}>
          <Col className={contact.contactpagediv}>
            <div
              // className="forms"
              className={contact.forms}
              style={{
                color: "#fff",
                padding: "20px",
                borderRadius: "20px",
              }}
            >
              <Form onSubmit={sendEmail}>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="👩🏻"
                    value={enteredUsername}
                    onChange={isentername}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="user-email"
                    placeholder="📧"
                    value={enteredemail}
                    onChange={isenteremail}
                  />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    placeholder="📨"
                    rows={3}
                    value={enteredmessage}
                    onChange={isentermessage}
                  />
                </Form.Group>

                <Alert bool1={name} bool2={email} bool3={message} />
              </Form>
            </div>
          </Col>
          <Col
            className={contact.contactpagediv}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              // backgroundColor: "red",
            }}
          >
            <div className={contact.hi}>
              <div className={contact.bk}>
                <img className={contact.hiimg} src={hi} alt="" />
              </div>
            </div>
            <div className={contact.contactitems}>
              <img
                src={location}
                style={{ height: "30px", width: "30px" }}
                alt=""
              />
              <span
                style={{
                  fontSize: "18px",
                  fontFamily: "Uchen",
                  fontWeight: "600",
                  paddingLeft: "10px",
                }}
              >
                {" "}
                Dehradun,Uttarakhand
              </span>
            </div>

            <div className={contact.contactitems}>
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
                <img
                  src={mail}
                  style={{ height: "30px", width: "30px", cursor: "pointer" }}
                  alt=""
                />
              </a>

              <span
                style={{
                  fontSize: "18px",
                  textAlign: "right",
                  fontWeight: "600",
                  paddingLeft: "10px",
                  fontFamily: "Uchen",
                }}
              >
                {" "}
                mb.medhavi@gmail.com
              </span>
            </div>
            <div className={contact.contactitemsocials}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "row",
                  width: "20%",
                  marginTop: "20px",
                  // left: "50%",
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
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

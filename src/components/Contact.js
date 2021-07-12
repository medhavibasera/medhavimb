import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col } from "react-bootstrap";
import contact from "../css/Contact.module.css";

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
          <Col className={contact.contactpagediv}></Col>
        </Row>
      </Container>
    </div>
  );
}

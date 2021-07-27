import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import icon from "../images/icons.png";
import { Link } from "react-scroll";

import styles from "../css/Navbar.module.css";
function Navbars() {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        position: "relative",
        zIndex: "10",
      }}
    >
      <Navbar expand="lg" className={styles.nav}>
        <Navbar.Brand href="#home">
          <img src={icon} alt="" className={styles.icons} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={styles.navitems}>
            <Link to="about" smooth={true}>
              <Nav.Link className={styles.navitemslist}>.about( )</Nav.Link>
            </Link>
            <Link to="experience" smooth={true}>
              <Nav.Link className={styles.navitemslist}>
                .experience( )
              </Nav.Link>
            </Link>
            <Link to="project" smooth={true}>
              <Nav.Link className={styles.navitemslist}>.projects( )</Nav.Link>
            </Link>
            <Link to="contact" smooth={true}>
              <Nav.Link className={styles.navitemslist}>.contact( )</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default Navbars;

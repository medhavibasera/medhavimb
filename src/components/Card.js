import React from "react";
import CardHoverMenus from "./CardHoverMenu/CardHoverMenu";
import Blumea from "../images/Blumea.png";
import Qode from "../images/qode.png";
import Techcolumns from "../images/Techcolumns.png";
import db from "../images/DoubtConnect.png";

//----====---------------------------------------------------
class Card extends React.Component {
  render() {
    return (
      <div className="row cards-placement">
        <div className="col-sm-12 col-md-12 col-lg-6 mt-4 ">
          <a
            href="https://tech-columns.netlify.app/"
            className="cards-placement"
          >
            <div className="card " data-aos="zoom-in">
              <img
                alt="random pic"
                className="card-img-top"
                src={Techcolumns}
                style={{ minWidth: 300, minHeight: 100 }}
              />
              <CardHoverMenus
                flashFn={this.props.flashFn}
                title="TechColumns"
                description="A platform that brings you the journey of every senior who was once a fresher. 
                Weekly blogs interviewing 
                college students who have explored the domain well enough.
                 Each blog is a storehouse to important links to courses, 
                 tips and tricks suggested by the interviewee !!!"
              />
            </div>
          </a>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 mt-4 ">
          <a
            href="https://01399f4e.msc-codeportal.pages.dev/"
            className="cards-placement"
          >
            <div className="card " data-aos="zoom-in">
              <img
                alt="Qode img"
                className="card-img-top"
                src={Qode}
                style={{ minWidth: 300, minHeight: 100 }}
              />
              <CardHoverMenus
                flashFn={this.props.flashFn}
                title="Qode"
                description="Qode is a great source for you to learn and follow as a self-paced course. It has full-feldged IDE which supports C, C++, Java, Python and more. It is also home to 1000+ questions of Data structure and Algorithm segregated into sheets."
              />
            </div>
          </a>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 mt-4 ">
          <a
            href="https://www.npmjs.com/package/blumea"
            className="cards-placement"
          >
            <div className="card " data-aos="zoom-in">
              <img
                alt="Blumea"
                className="card-img-top"
                src={Blumea}
                style={{ minWidth: 300, minHeight: 100 }}
              />
              <CardHoverMenus
                title="Blumea"
                description="The application helps to record the screen as well as tracks the time spent by user on the screen. The recording gets saved on your system after it is stopped."
                flashFn={this.props.flashFn}
              />
            </div>
          </a>
        </div>

        {/* <div className="col-sm-12 col-md-12 col-lg-6 mt-4 ">
          <a href="https://msackiit.tech/" className="cards-placement">
            {" "}
            <div className="card " data-aos="zoom-in">
              <img
                alt="random pic"
                className="card-img-top"
                src={Msac}
                style={{ minWidth: 300, minHeight: 100 }}
              />
              <CardHoverMenus
                title="Microsoft Student Ambassadors Club KIIT"
                description="A collaborated project website made for Microsoft Student Ambassadors Club KIIT."
                flashFn={this.props.flashFn}
              />
            </div>
          </a>
        </div> */}
        <div className="col-sm-12 col-md-12 col-lg-6 mt-4 ">
          <a href="https://doubtconnect.in/" className="cards-placement">
            {" "}
            <div className="card" data-aos="zoom-in">
              <img
                alt="random pic"
                className="card-img-top"
                src={db}
                style={{ minWidth: 300, minHeight: 100 }}
              />
              <CardHoverMenus
                title="DoubtConnect Official Website"
                description="A website made for mumbai based Ed-tech startup."
                flashFn={this.props.flashFn}
              />
            </div>
          </a>
        </div>
        {/* <div className="col-sm-12 col-md-12 col-lg-6 mt-4 ">
          <a href="https://codeinturns.tech/" className="cards-placement">
            <div className="card " data-aos="zoom-in">
              <img
                alt="random pic"
                className="card-img-top"
                src={Codeinturns}
                style={{ minWidth: 300, minHeight: 100 }}
              />
              <CardHoverMenus
                title="Code-In-Turns"
                description="A collaborated project website made for Code-In-Turns hackathon."
                flashFn={this.props.flashFn}
              />
            </div>
          </a>
        </div> */}
      </div>
    );
  }
}
export default Card;

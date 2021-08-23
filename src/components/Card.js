import React from "react";
import CardHoverMenus from "./CardHoverMenu/CardHoverMenu";
// // import screenrecorder from "../images/ScreenRecorder.png"
import ExpenseTracker from "../images/expenseTracker.png";
import Screenrecorder from "../images/ScreenRecorder.png";
import Codeinturns from "../images/CodeinTurns.jpeg";
import Techcolumns from "../images/Techcolumns.png";

import Msac from "../images/msac1.png";
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
                description="A platform that brings you the journey of every seniors that was once a fresher. 
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
            href="https://github.com/medhavi11/Expense-Tracker"
            className="cards-placement"
          >
            <div className="card " data-aos="zoom-in">
              <img
                alt="random pic"
                className="card-img-top"
                src={ExpenseTracker}
                style={{ minWidth: 300, minHeight: 100 }}
              />
              <CardHoverMenus
                flashFn={this.props.flashFn}
                title="ExpenseTracker"
                description="The application helps you track your expenses for different years.
You can add the item along with their cost and date purchased.
Filter by year helps you to ,find your expenses for that year across different months through the expenses bar"
              />
            </div>
          </a>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 mt-4 ">
          <a
            href="https://github.com/medhavi11/Screen-Recorder"
            className="cards-placement"
          >
            <div className="card " data-aos="zoom-in">
              <img
                alt="random pic"
                className="card-img-top"
                src={Screenrecorder}
                style={{ minWidth: 300, minHeight: 100 }}
              />
              <CardHoverMenus
                title="Screen Recorder"
                description="The application helps to record the screen as well as tracks the time spent by user on the screen. The recording gets saved on your system after it is stopped."
                flashFn={this.props.flashFn}
              />
            </div>
          </a>
        </div>

        <div className="col-sm-12 col-md-12 col-lg-6 mt-4 ">
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
        </div>
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
        <div className="col-sm-12 col-md-12 col-lg-6 mt-4 ">
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
        </div>
      </div>
    );
  }
}
export default Card;

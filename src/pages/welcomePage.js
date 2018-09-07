import React from "react";
import "./welcomePage.css";
import { Link } from "react-router-dom";

class WelcomePage extends React.Component {
  render() {
    return (
      <div className="my-5">
        <div className="container intro text-muted">
          <br />
          <div className="row">
            <div className="col-md-5 mx-auto">
              <img
                className="img-fluid mainPage"
                src="/images/myAvatar1.jpg"
                alt="david"
              />
            </div>
            <div className="col-md-8 mx-auto">
              <h2>Welcome to my porfolio website!</h2>
              <p>
                Please take a good look around and {""}
                <Link to="/contact">contact me</Link> {""}
                if you have any questions!
              </p>
            </div>

            <div className=" col-md-8 mx-auto">
              <p>
                My name is David Wu. I am a student of OpenClassroom on a
                Full-Stack developer path. My goal is to learn and keep learning
                the necessary skills to be a highly skilled web developer. My
                first step is to successfully complete this learnig path and
                receive my Bachelor's Level Diploma in web development.
              </p>
              <p>
                At this moment in time I am still relatively new in the scene of
                web development. Started in the December of 2017, as part of my
                learning path I have completed{" "}
                <Link to="/myProjects">3 projects</Link> {""}
                including this current porfolio website. From this I have learnt
                exciting new technical skills such as HTML, CSS, using
                WordPress, JavaScript, BootStrap and now React! At the same time
                I have learn valuable soft skills in the way I manage my
                projects and organise my codes. As well as this I know have a
                better understanding on what a well designed website is.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WelcomePage;

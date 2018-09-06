import React from "react";
import "./aboutPage.css";

const About = () => (
  <div className="bg-dark">
    <div className="container text-center">
      <div className="col-md-8 mx-auto">
        <div className="bg-white p-4 ">
          <h1 className="heading1">About me!</h1>
          <p className="introduction">
            My name is David Wu. Living in London, England; I am a student of an
            online education plaform call OpenClassRooms.
          </p>
          <p className="intro-part2">
            Relatively new in the web development field of work, I am looking
            forward to learn next skills and ultimately use those skills to
            develope visually pleasing web content.
            <br />I am a Christian, who love Jesus and accepted him as my Lord
            and Savivor. I also play football and enjoy listening to worship
            songs. I like to watch movies in my spare time, mainly action or
            thriller films. Mostly I watch football clips on Youtube.
          </p>

          <div>
            <h3>Brief background</h3>
            <ul className="style">
              <li>Study Abroad in the US for two years (2014-2016)</li>
              <li>Grade Point Average of 3.2</li>
              <li>Started the Full-Stack development path (December 2017)</li>
              <li>Have a vast experience in the field of Customer Service</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default About;

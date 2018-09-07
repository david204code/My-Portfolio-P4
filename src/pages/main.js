import React, { Component } from "react";
import "./main.css";
import AllProjects from "../components/AllProjects";
import Project from "../components/Project";

const allProjects = [
  {
    id: 1,
    title: "WordPress",
    description: "Install a WordPress theme for a Client Chalets and Caviar",
    images: [
      "/images/wordPress1.png",
      "/images/wordPress2.jpg",
      "/images/wordPress3.png"
    ],
    details: `
    In this project I used WordPress as a plaform to design a website that meets the needs
    of the client. Aside from designing the website, the client also requested I provide a
    simple manuel for their employees on how to constantly update their website in order 
    to ensure the information are up to date and relevant.
    In designing this website I choose the appropriate plugins that are well suitable in what
    the client requested.
    `
  },
  {
    id: 2,
    title: "Bootstrap",
    description: "Build a movie based website using the Bootstrap framework",
    images: [
      "/images/bootStrap1.png",
      "/images/bootStrap2.png",
      "/images/bootStrap3.png"
    ],
    details: `
    With my HTML and CSS knowledge I used the bootstrap framework to create a fully functional live website
    from scratch. I worked closely with client to ensure I get every single detail right. Details such as layout,
    user navigation and general outlook was very important for success of the website.    
    `
  },
  {
    id: 3,
    title: "React",
    description: "Build my own profolio website using React",
    images: [
      "/images/react.png",
      "/images/react1.png",
      "/images/react2.png"
  ],
    details: `
    Build reusable components using JSX and JavaScript. This very website is THE project, please take a good
    look around. All this is a single-page app, meaning it still function like a normal website but loads 
    way quicker! React is one of the best upcoming web development technology, it was great using it and more
    importantly learning about it. 
    `
  }
];

class Main extends Component {
  render() {
    console.log("Post ID:", this.props);
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <AllProjects allProjects={allProjects} />
          </div>
          <div className="col-md-8">
            {allProjects.map(
              p =>
                p.id === Math.floor(this.props.match.params.id) ? (
                  <Project key={p.id} project={p} />
                ) : (
                  ""
                )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;

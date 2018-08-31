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
      "/images/myAvatar1.jpg",
      "/images/myAvatar1.jpg",
      "/images/myAvatar1.jpg"
    ]
  },
  {
    id: 2,
    title: "Bootstrap",
    description: "Build a movie based website using the Bootstrap framework",
    images: []
  },
  {
    id: 3,
    title: "React",
    description: "Build my own profolio website using React",
    images: []
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

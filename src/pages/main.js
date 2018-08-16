import React, { Component } from "react";
import "./main.css";
import AllProjects from "../components/AllProjects";
import Project from "../components/Project";

const allProjects = [
  {
    id: 1,
    title: "WordPress",
    description: "Install a WordPress theme for a Client Chalets and Caviar",
    image: ""
  },
  {
    id: 2,
    title: "Bootstrap",
    description: "Build a movie based website using the Bootstrap framework",
    image: ""
  },
  {
    id: 3,
    title: "JavaScript",
    description: "Creating a board game to understand the concept of JavaScript",
    image: ""
  },
  {
    id: 4,
    title: "React",
    description: "Build my own profolio using React",
    image: ""
  }
];


class Main extends Component {
  render() {
    console.log('Post ID:', this.props)
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <AllProjects allProjects={allProjects} />
          </div>
          <div className="col-md-4">
            {allProjects.map( p => p.id == this.props.match.params.id ? <Project key={p.id} project={p} /> : "") }
          </div>
        </div>
      </div>
    );
  }
}

export default Main;

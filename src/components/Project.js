import React from "react";

class Project extends React.Component {
  render() {
    // const projects ={

    // };
    //My logo for the project

    return (
      <div>
        <h2>{this.props.project.title}</h2>
      </div>
    );
  }
}

export default Project;

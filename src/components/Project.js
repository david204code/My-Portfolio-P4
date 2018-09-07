import React from "react";
import "./Project.css";

class Project extends React.Component {
  render() {
    // const projects ={

    // };
    //My logo for the project

    const { title, images, details } = this.props.project;

    return (
      <div>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <img className="img-fluid title-pic" src={images[0]} alt="" />
            {/* {details ? (
              <p className="text-muted border bg-light p-5">{details}</p>
            ) : (
              ""
            )} */}
            <p className="text-muted border bg-light p-5">{details}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div>
              <img className="img-fluid" src={images[1]} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <img className="img-fluid" src={images[2]} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;

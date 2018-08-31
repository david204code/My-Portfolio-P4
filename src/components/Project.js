import React from "react";

class Project extends React.Component {
  render() {
    // const projects ={

    // };
    //My logo for the project

    const { title, images } = this.props.project;

    return (
      <div>
        <h2>{title}</h2>
        <div className="row">
          {images.map((image, id) => (
            <div className="col-md-4">
              <img key={id} className="img-fluid" src={image} alt="" />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Project;

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
          <div className="col-md-4">
            <div>
              {images.slice(1, images.lenght).map((image, id) => (
                <div className="">
                  <img key={id} className="img-fluid" src={image} alt="" />
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-8">
            <img className="img-fluid" src={images[0]} alt="" />
            {details ? (
              <p className="text-muted border bg-light p-5">{details}</p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Project;

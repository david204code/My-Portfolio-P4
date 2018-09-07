import React from "react";
import Card from "./Card/card";
import "./AllProjects.css";

const allProjects = ({ allProjects }) => (
  <div className="row">
    {allProjects.map(p => (
      <div key={p.id} className="col-md-12">
        <Card
          id={p.id}
          title={p.title}
          description={p.description}
          images={p.images}
        />
      </div>
    ))}
  </div>
);

export default allProjects;

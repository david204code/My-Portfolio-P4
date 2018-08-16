import React from "react";
import {Link} from 'react-router-dom';
import "./card.css";

const Card = props => (
  <div className="card mb-4">
    {props.image ? (
      <img className="card-img-top" src=".../100px180/" alt="Card image cap" />
    ) : (
      ""
    )}
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.description}</p>
      <Link to={`/project/${props.id}`} className="btn btn-primary">
        Find out more!
      </Link>
    </div>
  </div>
);

export default Card;

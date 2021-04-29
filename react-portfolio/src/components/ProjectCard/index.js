import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <a href={props.imageLink} target="blank">
          <img className="card-img-top" alt={props.name} src={props.image} />
        </a>
        <div className="card-body">
          <h5 className="card-title ">{props.name}</h5>
          <div className="flex-grow-1"><p className="card-text ">{props.description}</p></div>
          <div className="flex-grow-0"><a href={props.repoLink} target="_blank" className="btn btn-dark">View Repository</a></div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
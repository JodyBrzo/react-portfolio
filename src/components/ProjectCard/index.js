import React from "react";
import { Player } from 'video-react';
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        {/* <a className="card-a" href={props.imageLink} target="blank"> */}
          <Player
            playsInline
            fluid="false"
            width="10"
            poster={props.poster}
            src={props.image}
          />
        {/* </a> */}
        </div>
        <div className="card-body">
          <h5 className="card-title ">{props.name}</h5>
          <div className="flex-grow-1"><p className="card-text ">{props.description}</p></div>
          <div className="flex-grow-0"><a href={props.repoLink} target="_blank" rel="noreferrer" className="btn btn-dark mr-2">View Repository</a>
            <a href={props.liveLink} target="_blank" rel="noreferrer" className="btn btn-dark">View Live Site</a>
          </div>
        </div>
      
    </div>
  );
}

export default ProjectCard;
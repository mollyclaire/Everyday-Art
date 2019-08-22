import React from "react";

function ArtCard(props) {
    return (
      <div className="text-center">
        <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
        <h3>Medium: {props.medium}</h3>
        <h3>Artist: {props.artistDisplayName}</h3>
      </div>
    );
  }
  
  export default ArtCard;
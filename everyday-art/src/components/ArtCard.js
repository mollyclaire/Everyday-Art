import React from "react";

function ArtCard(props) {
  return(
  props.artworks.map(artwork => {
    return (
      <div className="text-center">
        {/* <img alt={props.title} className="img-fluid" src={props.primaryImageSmall} style={{ margin: "0 auto" }} /> */}
        <h3>Title: {artwork.title}</h3>
        <h3>Medium: {artwork.medium}</h3>
        {/* <h3>Artist: {props.artists}</h3> */}
        <h3>Description: {artwork.description}</h3>
      </div>)
    
  })
  )
  
    // return (
    //   <div className="text-center">
    //     {/* <img alt={props.title} className="img-fluid" src={props.primaryImageSmall} style={{ margin: "0 auto" }} /> */}
    //     <h3>Title: {props.title}</h3>
    //     <h3>Medium: {props.medium}</h3>
    //     {/* <h3>Artist: {props.artists}</h3> */}
    //     <h3>Description: {props.description}</h3>
    //   </div>
    // );
  }
  
  export default ArtCard;


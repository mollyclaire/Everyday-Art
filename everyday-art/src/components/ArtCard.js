import React from "react";
import styled from "styled-components";

function ArtCard(props) {
const Image = styled.img`
  justify-content: center;
  border: 3px solid black;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  
`

  return(
  props.artworks.map(artwork => {
    return (
      <div className="container">
        <Wrapper>
          <Image 
            alt="main" 
            // src={`${imgPath}${artwork.primary_image}`}>
            src="https://via.placeholder.com/200">
          </Image>
        </Wrapper>
        {/* <img alt={props.title} className="img-fluid" src={props.primaryImageSmall} style={{ margin: "0 auto" }} /> */}
        <p>Title: {artwork.title}</p>
        <p>Medium: {artwork.medium}</p>
        <p>Artist: {artwork.artist}</p>
        <p>Description: {artwork.description}</p>
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


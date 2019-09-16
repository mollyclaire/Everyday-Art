import React from "react";
import styled from "styled-components";

function ArtCard(props) {
const Image = styled.img`
  justify-content: center;
  border: 3px solid black;
  margin: 1em;

`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Paragraph = styled.div`
  flex-direction: column;
`

const Details = styled.div`
  flex-direction: column;
`

  return(
  props.artworks.map(artwork => {
    return (
      <Container>
        <Wrapper>
          <Image 
            alt="main" 
            // src={`${imgPath}${artwork.primary_image}`}>
            src="https://via.placeholder.com/200">
          </Image>
        </Wrapper>
        {/* <img alt={props.title} className="img-fluid" src={props.primaryImageSmall} style={{ margin: "0 auto" }} /> */}
        <Details>
          <p>Title: {artwork.title}</p> 
          <p>Medium: {artwork.medium}</p> 
          <p>Artist: {artwork.artist}</p>
        </Details>
        <Paragraph>Description: {artwork.description}</Paragraph>
      </Container>)
    
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


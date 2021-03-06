import React from "react";
import styled from "styled-components";

/* This ArtCard component is the main card on the page that contains the image, artist, year, medium, and description of the work. */

function ArtCard(props) {
const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 75%;
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  padding: 32px;
  margin: 48px auto 0;
  width: 75%;
  box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .09);
  border-radius: 5px;
`

const Paragraph = styled.div`
  flex-direction: column;
  letter-spacing: 0.6px;
  
`

const Details = styled.div`
  flex-direction: column;
`

const imgPath = "http://cdn2.brooklynmuseum.org/images/opencollection/objects/size1/"

return(
  
      <Container>
        
          <Image 
            alt="main" 
            src={`${imgPath}${props.primary_image}`}>
            {/* src="https://via.placeholder.com/200"> */}
          </Image>
        
        {/* <img alt={props.title} className="img-fluid" src={props.primaryImageSmall} style={{ margin: "0 auto" }} /> */}
        <Details>
          <h4>Title: {props.title}</h4> 
          <p>Artist: {props.artist}</p>
          <p>Medium: {props.medium}</p> 
          <p>Year: {props.year}</p>
        </Details>
        {/* The regex below eliminates some of the html elements from the text, 
        but I still need to figure out how to remove the left and right quotation marks. */}
        <Paragraph>Description: {props.description.replace(/(<([^>]+)>)/ig,"")}</Paragraph>
      </Container>
      
)
    
 

  // return(
  //   props.artworks.map(artwork => {
  //     return (
  //       <Container>
  //         <Wrapper>
  //           <Image 
  //             alt="main" 
              // src={`${imgPath}${artwork.primary_image}`}>
          //     src="https://via.placeholder.com/200">
          //   </Image>
          // </Wrapper>
          {/* <img alt={props.title} className="img-fluid" src={props.primaryImageSmall} style={{ margin: "0 auto" }} /> */}
        //   <Details>
        //     <p>Title: {artwork.title}</p> 
        //     <p>Medium: {artwork.medium}</p> 
        //     <p>Artist: {artwork.artist}</p>
        //   </Details>
        //   <Paragraph>Description: {artwork.description}</Paragraph>
        // </Container>)
      
    // })
    // )
  
   
  }
  
  export default ArtCard;


import React, { Component } from "react";
import API from "../utils/API";
// import ArtCard from "./ArtCard";
import Container from "./Container";
import Header from "./Header";



class SearchResult extends Component {
  constructor() {
    super()
    var today = new Date(),
        date = (today.getMonth() + 1) + '-' + today.getDate();
    this.state = {
      results: [{}],
      date: date
      
    };

    this.searchArt = this.searchArt.bind(this);
  }
    componentDidMount() {
        this.searchArt()

        // APIArtsy.getArtists().then(res => { console.log(res) })
    }

    searchArt () {
        API.search
          .then(res => 
          this.setState({ results: res.data })
        // console.log(res.data)
          )
          .catch(err => console.log(err));
      };


render() {
  // const imgPath = "http://cdn2.brooklynmuseum.org/images/opencollection/objects/size/2/"
  const artworks = this.state.results.map(artwork => (
    <div key={artwork.id}>
      <img 
        alt="main" 
        // src={`${imgPath}${artwork.primary_image}`}>
        src="https://via.placeholder.com/200">
      </img>
      <h4>{artwork.title}</h4>
      {/* <h5>{artwork.artists}</h5> */}
      <h5>{artwork.medium}</h5>
      <p>{artwork.description}</p>
    </div>
    
  ));

    return (
      
      <Container fullVertical>
        <div>
          <h1>Art for {this.today}</h1>
          <Header>{this.today}</Header>
            <div>
              {artworks[Math.floor(Math.random()* 11)]}
            </div>
        </div>
      </Container>
    )
}

}

export default SearchResult;


// render() {
//     const artworks = this.state.results

    
//       return (
//         <div>
//         {artworks.map(artwork => {
//           return (
//           <ArtCard 
//             key={artwork.id}
//             title={artwork.title}
//             primaryImageSmall={this.state.results.primaryImageSmall}
//             medium={artwork.medium}
//             artists={artwork.artists}
//             description={artwork.description}
//           /> )}
//         )}
          
//           </div>
//       )
//   }



// render() {
//   const artworks = this.state.results.map(artwork => (
//     <div key={artwork.id}>
//       <h4>{artwork.title}</h4>
//       {/* <h5>{artwork.artists}</h5> */}
//       <h5>{artwork.medium}</h5>
//       <p>{artwork.description}</p>
//     </div>
    
//   ));

//     return (
//       <Container fullVertical>
//         <div>
//           <h1>Art of the Day</h1>
//             <div>
//               {artworks}
//             </div>
//         </div>
//       </Container>
//     )
// }
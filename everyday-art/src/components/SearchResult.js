import React, { Component } from "react";
import API from "../utils/API";
import ArtCard from "./ArtCard";



class SearchResult extends Component {
  constructor() {
    super()
    this.state = {
      results: [{}]
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
      const artworks = this.state.results.map(artwork => (
        <div key={artwork.id}>
          <h4>{artwork.title}</h4>
          {/* <h5>{artwork.artists}</h5> */}
          <h5>{artwork.medium}</h5>
          <p>{artwork.description}</p>
        </div>
        
      ));

        return (
          <div>
          <h1>Art of the Day</h1>
          <div>
          {artworks}
          </div>
            
            </div>
        )
    }
};

export default SearchResult;
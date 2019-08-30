import React, { Component } from "react";
import API from "../utils/API";
import ArtCard from "./ArtCard";



class SearchResult extends Component {
    state = {
      results: []
    };

    componentDidMount() {
        this.searchArt()

        // APIArtsy.getArtists().then(res => { console.log(res) })
    }

    searchArt () {
        API.search
          .then(res => 
          this.setState({ results: res.data })
        // console.log(res)
          )
          .catch(err => console.log(err));
      };

    render() {
      const artworks = this.state.results

      
        return (
          <div>
          {artworks.map(artwork => {
            return (
            <ArtCard 
              key={artwork.id}
              title={artwork.title}
              // primaryImageSmall={this.state.results.primaryImageSmall}
              medium={artwork.medium}
              artists={artwork.artists}
              description={artwork.description}
            /> )}
          )}
            
            </div>
        )
    }
};

export default SearchResult;
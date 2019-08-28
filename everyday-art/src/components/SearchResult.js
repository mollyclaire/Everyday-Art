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
        // console.log(res.data)
          )
          .catch(err => console.log(err));
      };

    render() {
      // const artworks = this.state.results

      
        return (
          <div>
          this.state.results.map(artwork => {
<ArtCard 
            title={this.state.results.title}
            // primaryImageSmall={this.state.results.primaryImageSmall}
            medium={this.state.results.medium}
            artists={this.state.results.artists}
            description={this.state.results.description}
            />
          })
            
            </div>
        )
    }
};

export default SearchResult;
import React, { Component } from "react";
import API from "../utils/API";
import ArtCard from "./ArtCard";
import APIArtsy from "../utils/APIArtsy";

class SearchResult extends Component {
    state = {
      results: {}
    };

    componentDidMount() {
        // this.searchArt(Math.floor(Math.random() * 468991))

        APIArtsy.getArtists().then(res => { console.log(res) })
    }

    searchArt = query => {
        API.search(query)
          .then(res => 
          // this.setState({ results: res.data })
        console.log(res)
          )
          .catch(err => console.log(err));
      };

    render() {
        return (
            <ArtCard 
            title={this.state.results.title}
            primaryImageSmall={this.state.results.primaryImageSmall}
            medium={this.state.results.medium}
            artistDisplayName={this.state.results.artistDisplayName}
            />
            
        )
    }
};

export default SearchResult;
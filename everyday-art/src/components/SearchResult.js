import React, { Component } from "react";
import API from "../utils/API";
import ArtCard from "./ArtCard";



class SearchResult extends Component {
    state = {
      results: {}
    };

    componentDidMount() {
        this.searchArt()

        // APIArtsy.getArtists().then(res => { console.log(res) })
    }

    searchArt () {
        API.search
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
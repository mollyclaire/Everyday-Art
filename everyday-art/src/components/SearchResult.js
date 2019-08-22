import React, { Component } from "react";
import API from "../utils/API";
import ArtCard from "./ArtCard";

class SearchResult extends Component {
    state = {
      results: {}
    };

    componentDidMount() {
        this.searchArt(436535)
    }

    searchArt = query => {
        API.search(query)
          .then(res => 
          this.setState({ results: res.data })
        // console.log(res.data)
          )
          .catch(err => console.log(err));
      };

    render() {
        return (
            <ArtCard 
            title={this.state.results.title}
            src={this.state.results.src}
            medium={this.state.results.medium}
            artistDisplayName={this.state.results.artistDisplayName}
            />
            
        )
    }
};

export default SearchResult;
import React, { Component } from "react";
import API from "../utils/API";

class SearchResult extends Component {
    state = {
      results: []
    };

    searchArt = query => {
        API.search(query)
          .then(res => this.setState({ results: res.data.data }))
          .catch(err => console.log(err));
      };

    render() {
        return (
            <h1>Hi</h1>
        )
    }
};

export default SearchResult;
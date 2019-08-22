import React, { Component } from "react";
import API from "../utils/API";

class SearchResult extends Component {
    state = {
      results: []
    };

    componentDidMount() {
        this.searchArt(436535)
    }

    searchArt = query => {
        API.search(query)
          .then(res => 
        //   this.setState({ results: res.data.data })
        console.log(res)
          )
          .catch(err => console.log(err));
      };

    render() {
        return (
            <h1>Hi
                results={this.state.results}
            </h1>
            
        )
    }
};

export default SearchResult;
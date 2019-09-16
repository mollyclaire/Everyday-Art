import React, { Component } from "react";
import API from "../utils/API";
import ArtCard from "../components/ArtCard";


class Main extends Component {
    // creating initial state
    state ={
        artworks: [],

    }

    componentDidMount() {
        this.searchArt()
    }

   

    searchArt () {
        API.search
          .then(res => {
        //   this.setState({ results: res.data })
         console.log(res.data)
         let results = res.data
         let array = Object.values(results)
         
        //  results = results.map(result => {
        //      result = {
        //          key: result.id,
        //          title: result.title,
        //          artist: result.artists[0],
        //          medium: result.medium,
        //          description: result.description
        //      }
        //      return result;
        //  })
    
         this.setState({artworks: array})
         console.log({artworks: array})
         
        //  })
        //   .catch(err => console.log(err));
      })};

    render() {
        return (
            <div>
            {this.state.artworks.length ? (
                <ArtCard
                key={this.state.artworks.id}
                artworks={this.state.artworks.artworks}
                title={this.state.artworks[1]}
                medium={this.state.artworks[10]}
                description={this.state.artworks[32][0].content}
                artist={this.state.artworks[33][0].name}
                />
            ) : (<h3> No Results </h3>)}
            </div>
        )
    }
}

export default Main;
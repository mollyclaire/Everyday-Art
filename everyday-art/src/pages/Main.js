import React, { Component } from "react";
import API from "../utils/API";
import ArtCard from "../components/ArtCard";
import Button from "../components/Button";
import firebase from "../firebase";
// import { relative } from "path";
import { Redirect } from "react-router-dom"


/* This class component is one that renders the artwork from the Brooklyn Museum API 
and displays an Art Card component based on the information received. */
class Main extends Component {
    constructor() {
        super();
    /*The artworks array in the state refers to the data/artwork objects retrieved from the API call below*/
    this.state ={
        artworks: [],
        redirect: false
        
    }
    this.handleSubmit = this.handleSubmit.bind(this);
}

    componentDidMount() {
        this.searchArt()
    }

    searchArt () {
        /* See API.js file to further understand this API call */
        API.search
          .then(res => {
        //   this.setState({ results: res.data })
        //  console.log(res.data)
         let results = res.data
         /*The values method here returns an array of the containing the res.data object, so that I can map through it.*/
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

      /* The two Redirect functions refer to the "+" button press, which redirects 
      the user to the Saved page. */
      setRedirect = () => {
        this.setState({
          redirect: true
        })
      }
      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/saved' />
        }
      }

      /* This function adds the artwork displayed to Firebase (and also redirects the user using 
        the functions above) */
      handleSubmit(e) {
          e.preventDefault();
          console.log(e);
          const itemsRef = firebase.database().ref("items");
          const item = {
              saved: this.state.artworks
          }
          itemsRef.push(item);
          this.setRedirect();
          this.renderRedirect();

      }

    render() {
        return (
            <div>
            {this.state.artworks.length ? (
                /* Refer to the console to better understand the bracketed numbers below */
                <ArtCard
                key={this.state.artworks.id}
                artworks={this.state.artworks.artworks}
                title={this.state.artworks[1]}
                medium={this.state.artworks[10]}
                description={this.state.artworks[32][0].content}
                artist={this.state.artworks[33][0].name}
                year={this.state.artworks[4]}
                primary_image={this.state.artworks[27]}
                />
            ) : (<h3> No Results </h3>)}
            <div style={{display: "flex", justifyContent: "center"}}>
                <form onSubmit={this.handleSubmit}>
                    {this.renderRedirect()}
                    <Button
                        value={this.state.artworks}
                    ></Button>
                </form>
            </div>
            
            </div>
        )
    }
}

export default Main;
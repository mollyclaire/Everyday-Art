import React, { Component } from "react";
import API from "../utils/API";
import ArtCard from "../components/ArtCard";
import Button from "../components/Button";
import firebase from "../firebase";
// import { relative } from "path";
import { Redirect } from "react-router-dom"



class Main extends Component {
    constructor() {
        super();
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
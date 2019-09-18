import React, { Component } from "react";
import firebase from "../firebase";

class Saved extends Component {
    constructor() {
        super();
    this.state ={
        items: [],
        
    }
}

componentDidMount() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
        let items = snapshot.val();
        let newState = [];
        for (let item in items) {
          newState.push({
            id: item,
            artworks: items[item].artworks
          });
        } 
        this.setState({
            items: newState
        })
        
})
}

render() {
    return (
        <section className='display-item'>
  <div className="wrapper">
    <ul>
    
      {this.state.items.map((item) => {
          console.log(this.state.items)
        return (
          <li key={item.id}>
            <p>{item.artworks}</p>
          </li>
        )
      })}
    </ul>
  </div>
</section>
    )
}
}

export default Saved;
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
        console.log(items);
        let newState = [];
        for (let item in items) {
          newState.push({
            id: item,
            saved: items[item].saved
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
          console.log(item);
        return (
          <li key={item.id}>
            
            <h3>Artist: {item.saved[33][0].name}</h3>
            <h5>Title: {item.saved[1]}</h5>
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
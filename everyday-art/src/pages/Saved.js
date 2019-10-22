import React, { Component } from "react";
import firebase from "../firebase";
import styled from "styled-components";

const Title = styled.div`
  text-align: center;
  padding: 1em;
  font-size: 2em;
  font-weight: bold;
  
`

const Item = styled.li`
  list-style-type: none;
  margin: 2em;
  background-color: white;
  padding: .5em;
`

const Ul = styled.ul`
  list-style: none;
  padding-left: 0em;
`

class Saved extends Component {
    constructor() {
        super();
    /* The state object only contains one array called items, and this refers to the saved artworks
    that are in the database */
    this.state ={
        items: [],
        
    }
}

componentDidMount() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      /* snapshot.val() is provided by Firebase */
        let items = snapshot.val();
        console.log(items);
        /* I created a new array called newState, so that I could push new items into it */
        let newState = [];
        /* For every item in Firebase, push an object with the id (given by Firebase) and the artwork object data*/
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
          <Title>Saved</Title>
          <div className="wrapper">
            <Ul>
              {this.state.items.map((item) => {
                  console.log(this.state.items)
                  console.log(item);
                return (
                  <Item key={item.id}>
                    
                    <h3>Artist: {item.saved[33][0].name}</h3>
                    <p>Title: {item.saved[1]}</p>
                  </Item>
                )
              })}
            </Ul>
          </div>
        </section>
    )
}
}

export default Saved;
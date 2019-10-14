import React from "react";
// import SearchResult from "./components/SearchResult";
import Container from "./components/Container";
import Header from "./components/Header";
import Main from "./pages/Main";
import Saved from "./pages/Saved";
import styles from "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "../src/components/Navigation";


function App() {
  return (
    <Router>
      <div className="app">
        <Container full>
        <Navigation />
          <Header></Header>
          <Route exact path="/" component={Main} />
          <Route exact path="/saved" component={Saved} />
          
        </Container>
      </div>
    </Router>
  )
}

export default App;

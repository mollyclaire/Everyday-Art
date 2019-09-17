import React from "react";
// import SearchResult from "./components/SearchResult";
import Container from "./components/Container";
import Header from "./components/Header";
import Main from "./pages/Main";
import styles from "./App.css";

function App() {
  return (
    <div className="app">
      <Container fullVertical>
        <Header></Header>
        <Main />
      </Container>
    </div>
  )
}

export default App;

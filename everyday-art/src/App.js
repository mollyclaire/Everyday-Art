import React from "react";
import SearchResult from "./components/SearchResult";
import Container from "./components/Container";
import Header from "./components/Header";

function App() {
  return (
    <Container>
      <Header>Art for Today</Header>
      <SearchResult />
    </Container>
  )
}

export default App;

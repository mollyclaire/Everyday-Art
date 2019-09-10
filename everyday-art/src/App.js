import React from "react";
import SearchResult from "./components/SearchResult";
import Container from "./components/Container";
import Header from "./components/Header";
import Main from "./pages/Main";

function App() {
  return (
    <Container>
      <Header>Art for Today</Header>
      <Main />
    </Container>
  )
}

export default App;

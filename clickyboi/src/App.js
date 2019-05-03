import React, { Component } from "react";
import MatchCard from "./components/MatchCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import "./App.css";

class App extends Component {
render() {
  return (
      <Wrapper>
          <Title>Relevant Office Quote</Title>  
          <h3>
          </h3>
          
          <h3>
              Correct Guesses:
              <br />
              Best Score:
          </h3>           
              <MatchCard />
      </Wrapper>
  );
}
}

export default App;

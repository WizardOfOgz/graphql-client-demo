import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "./ApolloClient";
import Companies from "./Companies";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={ ApolloClient }>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">GraphQL Demo</h1>
          </header>
        </div>

        <Companies />
      </ApolloProvider>
    );
  }
}

export default App;

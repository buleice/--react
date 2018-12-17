import React, { Component } from 'react';
import './App.css';
import TestGraph from './components/test-graph/test-graph'

class App extends Component {
  render() {
    return (
      <div className="App">
          <TestGraph></TestGraph>
      </div>
    );
  }
}

export default App;

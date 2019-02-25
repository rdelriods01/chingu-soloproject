import React, { Component } from 'react';
import Searchbar from './Components/Searchbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="superior">
          <h1>BOOK FINDER</h1>
          <Searchbar />
        </div>
      </div>
    );
  }
}

export default App;

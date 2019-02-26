import React, { Component } from 'react';
import Searchbar from './Components/Searchbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="upper">
          <h1>BOOK FINDER</h1>
          <Searchbar />
        </div>
        <div className="lower">

        </div>
      </div>
    );
  }
}

export default App;

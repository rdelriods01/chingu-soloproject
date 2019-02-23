import React, { Component } from 'react';
import Searchbar from './Components/Searchbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="superior">
          <Searchbar />
        </div>
      </div>
    );
  }
}

export default App;

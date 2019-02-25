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
        <img src="https://camo.githubusercontent.com/a436c7e6ac2fe649eb7db19e9771e5762043fa8b/687474703a2f2f672e7265636f726469742e636f2f487a764443634f586f442e676966" alt="" />
      </div>
    );
  }
}

export default App;

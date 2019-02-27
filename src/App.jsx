import React, { Component } from 'react';
import firebase from 'firebase/app';
import fbconfig from './fbconfig';
import 'firebase/functions';

import Searchbar from './Components/Searchbar';
import Gallery from './Components/Gallery';

const fb = firebase.initializeApp(fbconfig);

class App extends Component {

  state = {
    items: [],
    loading: false
  }

  searchBook = (query) => {
    this.setState({
      loading: true
    })
    const readBooks = fb.functions().httpsCallable('searchBook');
    readBooks(query).then(res => {
      console.log(res);
      this.setState({
        loading: false,
        items: res.data.items
      })
    })
  }

  reset = () => {
    this.setState({
      items: []
    }, () => {
      console.log(this.state.items)
    })
  }
  render() {
    return (
      <div className="App">
        <div className="upper">
          <h1>BOOK FINDER</h1>
          <Searchbar search={(query) => this.searchBook(query)} reset={this.reset} />
        </div>
        <div className="lower">
          {
            this.state.loading ?
              <div className="loader">Loading...</div> :
              this.state.items.length > 1 ?
                <Gallery items={this.state.items} /> :
                <p className="notgallery" ><span>☹️</span> Nothing Here Yet - Try Searching For A Book! </p>
          }
        </div>
      </div>
    );
  }
}

export default App;

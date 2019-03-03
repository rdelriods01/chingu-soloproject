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
    loader: false,
    addClass: false
  }

  searchBook = (query) => {
    this.setState({
      loader: true
    })
    const readBooks = fb.functions().httpsCallable('searchBook');
    readBooks(query).then(res => {
      if (res.data.items) {
        this.setState({
          loader: false,
          items: res.data.items
        })
      } else {
        this.setState({
          loader: false,
          items: [],
          addClass: true
        })
      }
    })
      .catch(err => {
        console.log(err);
      })
  }

  reset = () => {
    this.setState({
      items: []
    })
  }

  render() {
    let toastClass = ["toast"]
    if (this.state.addClass) {
      toastClass.push('show');
      setTimeout(() => {
        toastClass.pop();
        this.setState({
          addClass: false
        })
      }, 4000);
    }
    return (
      <div className="App">
        <div className={toastClass.join(' ')}><div className="desc">No results! Try with another query please.</div></div>
        <div className="upper">
          <h1>BOOK FINDER</h1>
          <Searchbar search={(query) => this.searchBook(query)} reset={this.reset} />
        </div>
        <div className="lower">
          {
            this.state.loader ?
              <div className="loader">Loader...</div> :
              this.state.items.length > 1 ?
                <Gallery items={this.state.items} /> :
                <p className="notgallery" ><span role="img" aria-label="sadman" >☹️</span> Nothing Here Yet - Try Searching For A Book! </p>
          }
        </div>
      </div>
    );
  }
}

export default App;

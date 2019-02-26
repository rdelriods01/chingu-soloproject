import React, { Component } from 'react'
import firebase from 'firebase/app';
import fbconfig from '../fbconfig';
import 'firebase/functions';

const fb = firebase.initializeApp(fbconfig);


export class Searchbar extends Component {

    state = {
        searchInput: ''
    }

    render() {
        return (
            <div className="searchbar" >
                <input type="search" placeholder="Search by book title, author..." onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
                <button onClick={this.searchBook}  >Search</button>
            </div>
        )
    }
    handleKeyPress = (ev) => {
        if (ev.key === 'Enter') {
            this.searchBook();
        }
    }
    handleChange = (ev) => {
        this.setState({
            searchInput: ev.target.value
        })
    }
    searchBook = () => {
        if (this.state.searchInput === '') {
            alert('Please provide a title or author in the input search')
        } else {
            console.log('It will search for: ' + this.state.searchInput);
            const readBooks = fb.functions().httpsCallable('searchBook');
            readBooks(this.state.searchInput).then(res => {
                console.log(res);
            })
        }
    }
}

export default Searchbar

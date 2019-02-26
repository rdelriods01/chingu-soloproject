import React, { Component } from 'react'

export class Searchbar extends Component {

    state = {
        searchInput: '',
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
            this.props.search(this.state.searchInput);
        }
    }
}

export default Searchbar

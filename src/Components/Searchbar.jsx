import React, { Component } from 'react'

export class Searchbar extends Component {

    state = {
        searchInput: ''
    }

    render() {
        return (
            <div className="searchbar" >
                <div id="toast2"><div id="desc">Please provide a title or author in the input search.</div></div>
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
        }, () => {
            if (this.state.searchInput === '') {
                this.props.reset();
            }
        })
    }
    searchBook = () => {
        if (this.state.searchInput === '') {
            let notification = document.getElementById("toast2")
            notification.className = "show";
            setTimeout(() => { notification.className = notification.className.replace("show", ""); }, 4000);
        } else {
            console.log('It will search for: ' + this.state.searchInput);
            this.props.search(this.state.searchInput);
        }
    }
}

export default Searchbar

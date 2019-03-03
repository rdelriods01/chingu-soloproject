import React, { Component } from 'react'

export class Searchbar extends Component {

    state = {
        searchInput: '',
        addClass: false
    }

    render() {
        let toastClass = ["toast2"]
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
            <div className="searchbar" >
                <div className={toastClass.join(' ')}><div className="desc">Please provide a title or author in the input search.</div></div>
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
        if (this.state.searchInput === '' || this.state.searchInput[0] === ' ') {
            this.setState({
                addClass: true
            })
        } else {
            console.log('It will search for: ' + this.state.searchInput);
            this.props.search(this.state.searchInput);
        }
    }
}

export default Searchbar

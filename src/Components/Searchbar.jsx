import React from 'react'

export default function Searchbar() {
    return (
        <div className="searchbar" >
            <input type="search" placeholder="Search by book title, author..." />
            <button>Search</button>
        </div>
    )
}

import React, { Component } from 'react';

export default class Gallery extends Component {
    render() {
        return (
            <div className="gallery">
                {
                    this.props.items && this.props.items.map((item, i) => {
                        let { title, imageLinks, infoLink, authors, publisher } = item.volumeInfo
                        return (
                            <div className="card" key={i}>
                                <div className="grid">
                                    <img src={imageLinks !== undefined ? imageLinks.thumbnail : ''} alt="book" className="bookImage" />
                                    <div className="details">
                                        <h4>{title}</h4>
                                        <p>By: {authors[0]} {(authors.length > 1) ? 'and others' : ''} </p>
                                        <p>Published by: {publisher} </p>
                                        <div className="btn"><a href={infoLink}>See this book</a></div>
                                    </div>
                                </div>

                            </div>
                        );
                    })
                }
            </div>
        );
    }
}
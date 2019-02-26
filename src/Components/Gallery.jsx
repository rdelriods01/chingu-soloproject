import React, { Component } from 'react';

export default class Gallery extends Component {
    render() {
        return (
            <div>
                {
                    this.props.items.map((item, i) => {
                        let { title, imageLinks, infoLink } = item.volumeInfo
                        return (
                            <a href={infoLink} key={i} className="book">
                                <img src={imageLinks !== undefined ? imageLinks.thumbnail : ''} alt="book" className="bookImage" />
                                <div className="titleText">{title}</div>
                            </a>
                        );
                    })
                }</div>

        );
    }
}
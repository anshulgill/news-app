/* eslint-disable no-script-url */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Newsitem extends Component {
    static propTypes = {
        title: PropTypes.string,
        description: PropTypes.string,
        imageUrl: PropTypes.string,
        newsUrl: PropTypes.string,
    };

    static defaultProps = {
        title: "No Title",
        description: "No Description",
        imageUrl: "",
        newsUrl: "javascript:void(0)",
    };

    render() {
        const { title, description, imageUrl, newsUrl } = this.props;

        return (
            <div>
                <div className="card" style={{ width: "18rem" }}>
                    {imageUrl && <img src={ !imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt={title} />}
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Newsitem;

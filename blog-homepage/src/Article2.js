import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Article2 extends Component {
    static propTypes = {
        article: PropTypes.shape({
            author: PropTypes.shape({
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                isMediumMember: PropTypes.bool.isRequired
            }).isRequired,
            description: PropTypes.string.isRequired,
            hasAudioAvailable: PropTypes.bool.isRequired,
            image: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
            memberPreview: PropTypes.bool.isRequired,
            minutesToRead: PropTypes.number.isRequired,
            postedDate: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
        }).isRequired
    }
    render() {
        const { title, link, description, image, minutesToRead, postedDate, memberPreview, author } = this.props.article;
        let hasMemberPreview;
        if (memberPreview) {
            hasMemberPreview = (
                <p>
                <span className="star"><i className="fa fa-star fa-1" aria-hidden="true"></i></span>
                Member preview
                </p>
            )
        }
        return (
                <a href={link} className="missed">
                <div className="img">
                    <img src={image} alt="" />
                </div>
                <div className="main">
                    <div className="info">
                        {hasMemberPreview}
                    <h1>{title}</h1>
                    <p>{description}</p>
                    </div>
                    <div className="author">
                    <div>
                        <img src={author.image} alt="" />
                    </div>
                    <div className="details">
                        <h2>{author.name}</h2>
                        <p>
                        <span>{postedDate}</span>
                        </p>
                        <p>
                        <span>{minutesToRead} min red</span>
                    </p>
                    </div>
                    <div className="bookmark">
                        <i className="fa fa-bookmark" aria-hidden="true" />
                    </div>
                    </div>
                </div>
                </a>
        )
    }
}

export default Article2;
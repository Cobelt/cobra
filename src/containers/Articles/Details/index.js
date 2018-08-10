import React, { Component } from 'react';
import { connect } from "react-redux";

// import { Card, CardImage CardImg, CardText, CardBody, CardTitle } from 'muejs';

class ArticleDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imgHeight: '39.2rem',
        };
    }

    render() {
        return (
            <Card>
                <div className="img-container" style={{height: this.state.imgHeight}}>
                    <CardImg top width="100%" src={this.props.article.imgSrc} alt="Article Thumbnail"/>
                </div>
                <CardBody>
                    <CardTitle>{this.props.article.title}</CardTitle>
                    <CardText>{this.props.article.body}</CardText>
                </CardBody>
            </Card>
        );
    };
}


function mapStateToProps(state) {
    return {
        article: state.activeArticle
    };
}

export default connect(mapStateToProps)(ArticleDetails);
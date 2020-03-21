import React from 'react';
import { Card } from 'react-bootstrap';

import classes from './Article.module.css';

const Article = (props) => {
    return (
        <Card>
            <a href={props.article.url} className={classes.articleUrl} target="_blank" rel="noopener noreferrer">
                <Card.Img variant="top" src={props.article.urlToImage} />
            </a>
            <Card.Body>
                <Card.Title>
                    <a href={props.article.url} className={classes.articleUrl} target="_blank" rel="noopener noreferrer">
                        {props.article.title}
                    </a>
                </Card.Title>
                <Card.Text>{props.article.content}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Article;
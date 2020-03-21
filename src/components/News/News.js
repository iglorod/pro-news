import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, CardColumns } from 'react-bootstrap';

import { loadNewsAction } from '../../store/actions/news';
import Article from './Article/Article';

const News = (props) => {
    useEffect(() => {
        if (!props.news.length) props.loadNews();
    }, [])

    return (
        <Container style={{paddingTop: '5%'}}>
            <CardColumns>
                {
                    props.news.map(item => {
                        return (
                            <Article key={item.url} article={item} />
                        )
                    })
                }
            </CardColumns>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        news: state.news.articles,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadNews: () => { dispatch(loadNewsAction()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(News);

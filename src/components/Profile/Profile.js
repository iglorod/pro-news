import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import ProfileImg from './ProfileImg/ProfileImg';
import ProfileData from './ProfileData/ProfileData';
import './Profile.css';

const Profile = (props) => {
    if (!props.userEmail) {
        return <Redirect to={'/login'} />
    }

    return (
        <Container style={{paddingTop: '5%'}}>
            <Row>
                <Col md={1}></Col>

                <Col md={5}>
                    <ProfileImg />
                </Col>

                <Col md={5}>
                    <ProfileData />
                </Col>

                <Col md={1}></Col>

            </Row>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        userEmail: state.auth.email,
    }
}

export default connect(mapStateToProps)(Profile);

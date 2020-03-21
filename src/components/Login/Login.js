import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import LoginForm from './LoginForm/LoginForm';

const Login = () => {
    return (
        <Container fluid style={{ paddingTop: '5%' }}>
            <Row>
                <Col sm={2} lg={4}></Col>
                <Col sm={8} lg={4}>
                    <LoginForm />
                </Col>
                <Col sm={2} lg={4}></Col>
            </Row>
        </Container>
    )
}

export default Login;

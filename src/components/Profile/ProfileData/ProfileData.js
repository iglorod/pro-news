import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt, faHome, faSkating } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';

const ProfileData = (props) => {
    return (
        <Card style={{ width: '100%', height: '100%' }}>
            <Card.Body>
                <Card.Title>Koko Jambo</Card.Title>
                <Card.Subtitle className="mb-4 text-muted">Cras adipiscing enim</Card.Subtitle>

                <Card.Text>
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Euismod nisi porta
                    lorem mollis aliquam. Non odio euismod lacinia
                    at quis risus sed vulputate.
                    </Card.Text>

                
                <ul>
                    <li><FontAwesomeIcon icon={faEnvelope} /> {props.userEmail}</li>
                    <li><FontAwesomeIcon icon={faPhoneAlt} /> + 39 (054) 636-15-75</li>
                    <li><FontAwesomeIcon icon={faHome} /> str. Kigoasana, 63a</li>
                    <li><FontAwesomeIcon icon={faSkating} /> arcu cursus</li>
                </ul>
            </Card.Body>
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        userEmail: state.auth.email,
    }
}

export default connect(mapStateToProps)(ProfileData);

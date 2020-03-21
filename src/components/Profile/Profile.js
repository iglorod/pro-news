import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Profile = (props) => {
    if (!props.userEmail) {
        return <Redirect to={'/login'} />
    }

    return (
        <div>Profile</div>
    )
}

const mapStateToProps = state => {
    return {
        userEmail: state.auth.email,
    }
}

export default connect(mapStateToProps)(Profile);
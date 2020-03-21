import React from 'react';
import { Image } from 'react-bootstrap';

import ProfileLogo from '../../../assets/image/profile.png';

const ProfileImg = () => {
    return (
        <Image src={ProfileLogo} rounded width={'100%'} />
    )
}

export default ProfileImg;

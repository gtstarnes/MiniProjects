import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
        <Link to="/"><button type="button">Home</button></Link>
        <h1>Hello From Profile</h1>
    </div>
  )
}

export default Profile
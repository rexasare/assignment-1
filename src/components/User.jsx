import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const User = () => {
  let params = useParams();
  const navigate = useNavigate();
  return (
    <div className='container py-5'>
      <h3>User Profile - {params.username} </h3>
      <button
        className='btn btn-outline-primary my-5'
        onClick={() => navigate('/users')}>
        Go Back to Users
      </button>
    </div>
  );
};

export default User;

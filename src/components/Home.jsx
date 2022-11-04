import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='container py-5'>
      <h3>Welcome to the random User Game Generator</h3>
      <button
        className='btn btn-outline-primary'
        onClick={() => navigate('/users')}>
        Fetch Users
      </button>
    </div>
  );
};

export default Home;

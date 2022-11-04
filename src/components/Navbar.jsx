import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth, logout } from './firebase';
import Loading from './Loading';

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      <Loading />;
    }
    if (!user) return navigate('/');
  }, [user, loading]);

  return (
    <nav className='navbar navbar-expand-lg bg-light'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          RandomGame
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse'
          id='navbarNav'
          style={{ justifyContent: 'space-between' }}>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link to='/' className='nav-link active' aria-current='page'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/users/' className='nav-link' aria-current='page'>
                Users
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/page/404' className='nav-link' aria-current='page'>
                404 Page
              </Link>
            </li>
          </ul>
          {user ? (
            <button class='btn btn-outline-success' onClick={logout}>
              Logout
            </button>
          ) : (
            <Link to='/login' className='nav-link'>
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

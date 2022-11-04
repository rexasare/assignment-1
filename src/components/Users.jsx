import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as api from '../api/Users';
import ErrorMessage from './ErrorMessage';
import Loading from './Loading';

const Users = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    loading: true,
    users: [],
    currentPage: 1,
    postsPerPage: 10,
    error: null,
  });

  useEffect(() => {
    api
      .fetchUsers(userData.postsPerPage, userData.currentPage)
      .then((response) => {
        setUserData((prevData) => ({
          ...prevData,
          loading: false,
          users: response.results,
        }));
      })
      .catch((err) => {
        setUserData((prev) => ({
          ...prev,
          loading: false,
          error: err.message,
        }));
        console.error(err.message);
      });
  }, [userData?.currentPage]);

  const fetchSinglePage = (e, page) => {
    e.preventDefault();
    setUserData((prev) => ({ ...prev, currentPage: page }));
  };

  const fetchNextData = (e) => {
    e.preventDefault();
    setUserData((prev) => ({ ...prev, currentPage: prev.currentPage + 1 }));
  };

  const fetchPreviousData = (e) => {
    e.preventDefault();
    setUserData((prev) => ({
      ...prev,
      currentPage: Math.max(prev.currentPage - 1, 1),
    }));
  };

  if (userData?.loading) {
    return <Loading />;
  }

  if (userData?.error !== null) {
    return <ErrorMessage error={userData?.error} />;
  }

  // const indexOfLastPost = userData?.currentPage * userData?.postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - userData?.postsPerPage;
  // // const currentUsers = userData?.users?.slice(
  // //   indexOfFirstPost,
  // //   indexOfLastPost
  // // );

  return (
    <div className='container py-5'>
      <h1 className=''>Users List</h1>
      <button
        className='btn btn-outline-primary my-3'
        onClick={() => navigate('/')}>
        Go Back to Home Page
      </button>
      <table className='table '>
        <thead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Age</th>
            <th scope='col'>Email</th>
            <th scope='col'>Location</th>
            <th scope='col'>Phone</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {userData?.users?.map((user, index) => (
            <tr key={user?.name?.first}>
              <td>{`${user?.name?.first} ${user?.name?.last}`}</td>
              <td>{user?.dob?.age}</td>
              <td>{user?.email}</td>
              <td>{`${user?.location?.street?.number} ${user?.location?.street?.name}`}</td>
              <td>{user.phone}</td>
              <td>
                <span>
                  <Link to={`/users/${user?.name?.first}`}>View Profile</Link>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav
        aria-label='Page navigation example'
        style={{ display: 'flex', justifyContent: 'center' }}>
        <ul className='pagination'>
          <li
            className={`page-item ${
              userData?.currentPage === 1 && 'disabled button-disable'
            }`}>
            <a
              className='page-link'
              href='#'
              onClick={(e) => fetchPreviousData(e)}>
              Previous
            </a>
          </li>
          <li className='page-item'>
            <a
              className={`page-link ${userData?.currentPage === 1 && 'active'}`}
              href='#'
              onClick={(e) => fetchSinglePage(e, 1)}>
              1
            </a>
          </li>
          <li className='page-item'>
            <a
              className={`page-link ${userData?.currentPage === 2 && 'active'}`}
              href='#'
              onClick={(e) => fetchSinglePage(e, 2)}>
              2
            </a>
          </li>
          <li className='page-item'>
            <a
              className={`page-link ${userData?.currentPage === 3 && 'active'}`}
              href='#'
              onClick={(e) => fetchSinglePage(e, 3)}>
              3
            </a>
          </li>
          <li
            className={`page-item ${
              userData?.currentPage >= 3 && 'disabled button-disable'
            }`}>
            <a className='page-link' href='#' onClick={(e) => fetchNextData(e)}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Users;

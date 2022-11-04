import React from 'react';
import { Routes, Route } from 'react-router-dom';
import User from './User';
import Users from './Users';

const Layout = () => {
  return (
    <Routes>
      <Route path='/' element={<Users />}></Route>
      <Route path=':username' element={<User />}></Route>
    </Routes>
  );
};

export default Layout;

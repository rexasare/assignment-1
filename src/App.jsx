import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import Login from './components/Login';
import Navbar from './components/Navbar';
import PageNotFound from './components/PageNotFound';
import Register from './components/Register';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/register' element={<Register />}></Route>
          <Route path='/users/*' element={<Layout />}></Route>
          <Route path='/page/404' exact element={<PageNotFound />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;

import React from 'react'
import Home from './pages/home/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import ProductDetails from './pages/ProductDetail/ProductDetails';
import Login from './pages/login/login';
import SignUp from './pages/SignUp/SignUp';
const MyApp = () => {
  return (
    <>
      <Router>
        <Routes>
          
          <Route  exact path='/' element={<Login />} />
          <Route  exact path='/signup' element={<SignUp />} />
          <Route path='/home' element={<Home />} />
          <Route path='/products/:id' element={<ProductDetails />} />
        </Routes>
      </Router>
    </>

  );
}

export default MyApp;

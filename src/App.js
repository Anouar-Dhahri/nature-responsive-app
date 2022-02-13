import React from 'react';
import  { BrowserRouter, Routes, Route}from 'react-router-dom'
import { Navbar } from './components';
import { Home, Offers, Contact, SignUp } from './pages'
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/offers" element={<Offers />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/sign-up" element={<SignUp />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

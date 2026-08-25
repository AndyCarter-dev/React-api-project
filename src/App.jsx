import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Landing from './pages/landing/Landing';
import Movieinfo from './pages/Movieinfo/Movieinfo';
import Navbar from './Components/Navbar';
import Contact from './pages/Contact/Contact';

function App() {
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/home/:searchTerm' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/movie/:id' element={<Movieinfo />}></Route>
      
      </Routes>
    </Router>
  )

}

export default App;

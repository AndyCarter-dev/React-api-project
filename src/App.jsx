import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Movieinfo from './pages/Movieinfo/Movieinfo';
import Navbar from './Components/Navbar';
import Contact from './pages/Contact/Contact';
import Aboutus from './pages/Aboutus/Aboutus';
import Footer from './Components/Footer';

function App() {
  return(
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Contact />}></Route>
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/home/:searchTerm' element={<Home />}></Route>
        <Route path='/movie/:id' element={<Movieinfo />}></Route>
      
      </Routes>
      <Footer />
     </> 
  )

}

export default App;

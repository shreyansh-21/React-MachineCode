import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Carousel from './components/Carousel';
import Home from './Home';
import Pagination from './components/Pagination';

function App() {
  

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/Carousel" element ={<Carousel/>} />
        <Route path="/Pagination" element ={<Pagination/>} />

      </Routes>
    </BrowserRouter>
    )
}

export default App

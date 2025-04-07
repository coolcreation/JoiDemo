import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomePage from '../pages/HomePage';
import BlogpostPage from '../pages/BlogpostPage'


function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/blogposts" element={<BlogpostPage />} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
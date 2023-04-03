import './App.css';
import React from 'react';

import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Academics from './pages/Academics';
import About from "./pages/About";
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/academics' element={<Academics />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

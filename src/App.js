import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import NoPage from './pages/NoPage';
import './App.css';

function App() {
  return (
  <div>
    <BrowserRouter>
	     <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/home" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/skills" element={<Skills />} />
         <Route path="/projects" element={<Projects />} />
         <Route path="*" element={<NoPage />} />
	     </Routes>
  	</BrowserRouter>
  </div>
  );
}

export default App;

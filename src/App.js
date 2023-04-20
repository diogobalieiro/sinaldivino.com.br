import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ReactPixel from 'react-facebook-pixel';
import HomePage from './HomePage';

const initPixel = (pixelId) => {
  ReactPixel.init(pixelId);
};

function App() {
  useEffect(() => {
    // Inicializa o pixel com o pixelId 1234 na rota A
    if (window.location.pathname === '/') {
      initPixel('179538898286619');
    }
    // Inicializa o pixel com o pixelId 5678 na rota B
    if (window.location.pathname === '/inicio') {
      initPixel('5678');
    }
  }, []);

  return (
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/inicio" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
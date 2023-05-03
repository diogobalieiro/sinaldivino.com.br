import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import { compraEfetuada, entrouNoSite } from './facebookPixelEvent';



function App() {
    // Inicializa o pixel com o pixelId 1234 na rota A
  useEffect(() => {
    if (window.location.pathname === '/') {
      entrouNoSite();
      
    }
    // Inicializa o pixel com o pixelId 5678 na rota B
    if (window.location.pathname === '/inicio') {
      compraEfetuada();
    }
  },[])
  
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
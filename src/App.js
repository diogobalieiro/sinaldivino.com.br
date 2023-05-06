import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import { compraEfetuada, entrouNoSite } from './facebookPixelEvent';



function Apps() {
  console.log('dada');
    // Inicializa o pixel com o pixelId 1234 na rota A
  useEffect(() => {
    if (window.location.pathname === '/') {
      console.log('entrou no site');
      entrouNoSite();
      
    } else if (window.location.pathname === '/inicio'){
      compraEfetuada();
    }
    // Inicializa o pixel com o pixelId 5678 na rota B

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

export default Apps;
import React, { useState, useEffect } from 'react';
import ContagemRegressiva from './ContagemRegressiva';
import ComprarButton from './BotaoComprar';
import VideoPlayer from './VideoPlayer';
import './App.css';
import Preco from './Preco';
import Resultados from './Resultados';
import QuadroTexto from './QuadroTexto';
import Contato from './Contato';
import Dice from './Dado';
import DiceImg from './img/pngegg3.png';



function App() {
  return (
    <div className="container">
      <header className="header" style={{gridArea: "header"}}><ContagemRegressiva /></header>
      <main className="content" style={{gridArea: "content"}}>
        <div className="content_1" style={{gridArea: "results"}}>
          <Resultados green={6402} red={803} white={897} data="30/03/2023" />
          <QuadroTexto />
          
        </div>
        <div className="content_2" style={{gridArea: "video"}}>
          <VideoPlayer />
        </div>
      </main>
      <footer className="footer" style={{gridArea:"footer"}}>
        <div style={{display:'flex'}} id="contato">
          <Contato />
          
         
        </div>
        <div style={{display:'flex'}}>
          
          <Preco precoOriginal="399,99" precoPromocional="99" />
          <ComprarButton />
          <img src={DiceImg} style={{width:'6em'}} id="dice" />
        </div>
      </footer>
      
    </div>
  );
}

export default App;
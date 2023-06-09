import React, { useEffect, useRef } from 'react';
import ContagemRegressiva from './ContagemRegressiva';
import ComprarButton from './BotaoComprar';
import VideoPlayer from './VideoPlayer';
import './App.css';
import Preco from './Preco';
import Resultados from './Resultados';
import QuadroTexto from './QuadroTexto';
import Contato from './Contato';
import DiceImg from './img/pngegg3.png';


function HomePage() {
    const headerRef = useRef(null);
    const contentRef = useRef(null);
    const footerRef = useRef(null);
  
    useEffect(() => {
      function setMargin() {
        const header = headerRef.current;
        const footer = footerRef.current;
        const content = contentRef.current;
  
        const headerHeight = header.offsetHeight;
        const footerHeight = footer.offsetHeight;
        content.style.paddingTop = `${headerHeight}px`;
        content.style.paddingBottom = `${footerHeight}px`;
  
      }
      if (window.matchMedia("(max-width: 768px)").matches) {
        setMargin();
  
        window.addEventListener("resize", setMargin);
        return () => {
          window.removeEventListener("resize", setMargin);
        };
      }
    }, []);

    return(
        <div className="container">
      <header className="header" ref={headerRef} style={{gridArea: "header"}}><ContagemRegressiva /></header>
      <main className="content"ref={contentRef} style={{gridArea: "content"}}>
        <div className="content_1" style={{gridArea: "results"}}>
          <Resultados green={6402} red={803} white={897} data="30/03/2023" />
          <QuadroTexto />
          
        </div>
        <div className="content_2" style={{gridArea: "video"}}>
          <VideoPlayer />
        </div>
      </main>
      <footer className="footer" ref={footerRef} style={{gridArea:"footer"}}>
        <div style={{display:'flex'}} id="contato">
          <Contato />
        </div>
        <div style={{display:'flex'}}>
          <Preco precoOriginal="399,99" precoPromocional="9,90" />
          <ComprarButton />
          <img src={DiceImg} style={{width:'6em'}} id="dice" alt="dice" />
        </div>
      </footer>
      
    </div>
    )
}

export default HomePage;
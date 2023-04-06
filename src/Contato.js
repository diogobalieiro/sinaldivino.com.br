import React from 'react';
import { FaTelegram, FaEnvelope } from 'react-icons/fa';

const styles = {
  contato: {
    display: 'block',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '0.5em',
    gap:'1em',
    color: '#fff',
    
  },
  icone: {
    fontSize: '1.5em',
    marginRight: '8px',
  },
  texto: {
    display: 'flex',
    fontSize: '16px',
    alignItems: 'center'
  },
};

function Contato() {
  return (
    <div style={styles.contato}>
      <p style={styles.texto}>
        <a href="https://t.me/nomedogrupo" style={{
          textDecoration: 'none', color: '#fff', alignItems: 'center', display: 'flex'
        }}target="_blank" rel="noopener noreferrer">
          <FaTelegram style={styles.icone} />
          <b>@sinaldivino </b>
        </a>
      </p>
      <p style={styles.texto}>
        <a href="mailto:contato@empresa.com.br" style={{
          textDecoration: 'none', color: '#fff', alignItems: 'center', display: 'flex'
        }}>
          <FaEnvelope style={styles.icone} />
          <b>sinaldivino2@gmail.com </b>
        </a>
      </p> 
    </div>
  );
}

export default Contato;

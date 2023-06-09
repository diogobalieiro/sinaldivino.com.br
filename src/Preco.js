import React from 'react';

const styles = {
  preco: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  precoOriginal: {
    fontSize: '1.2em',
    textDecoration: 'line-through',
    marginRight: '0.5em',
    marginTop: '-1em',
    color: 'red',
  },
  precoPromocional: {
    fontSize: '3em',
    fontWeight: 'bold',
    
    marginRight: '0.8em',
    fontFamily: 'Poppins, sans-serif',
  },
  parcelas: {
    fontSize: '0.4em',
  }
};

if (window.matchMedia('(max-width: 768px)').matches) {
  styles.precoPromocional.fontSize = '1.5em';
  styles.precoOriginal.fontSize = '0.6em';
  styles.parcelas.fontSize = '0.2em'
  }



function Preco(props) {
  const { precoOriginal, precoPromocional } = props;

  return (
    <div style={styles.preco}>
      <div style={styles.precoOriginal}>{`R$ ${precoOriginal}`}</div>
      <div style={styles.precoPromocional}><span style={styles.parcelas}>10x </span>{`R$ ${precoPromocional}`}</div>
    </div>
  );
}

export default Preco;
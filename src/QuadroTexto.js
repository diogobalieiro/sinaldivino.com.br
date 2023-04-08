import React from 'react';

const QuadroTexto = () => {
  const estilo = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      padding: '24px',
      boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
      width: '100%',
      textAlign: 'center',

    },
    titulo: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '24px',
    },
    texto: {
      fontSize: '16px',
      lineHeight: '1.5',
    },
  };

  if (window.matchMedia('(max-width: 768px)').matches) {
    estilo.container.padding = '2em';
    estilo.container.flexWrap = 'wrap';
    estilo.container.overflow = 'wrap';
    estilo.container.wordWrap = 'break-word'
    estilo.container.maxWidth = '100%';
    estilo.container.width = '';
    estilo.texto.fontSize = '14px';
    estilo.titulo.fontSize = '14px';
    estilo.titulo.marginBottom = '8px';
  
  }

  

  return (
    <div style={estilo.container}>
      <h2 style={estilo.titulo}>Como Funciona</h2>
      <p style={estilo.texto}>
        Desenvolvemos um robô que monitora as jogadas em tempo real e analisa através de
        inteligência artificial para encontrar possíveis tendências do dia e
        enviar os melhores sinais aos nossos usuários.
        Os nossos sinais são enviados via grupo do Telegram. 
        Ao efetuar a compra, em instantes, 
        você receberá um link de <b>acesso único</b> por e-mail e terá acesso a todos os nossos sinais na íntegra
      </p>
    </div>
  );
};

export default QuadroTexto;

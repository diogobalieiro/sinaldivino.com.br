import React from 'react';

const Resultado = ({ green, white, red, data }) => {
    const assertividade = (green + white) / (green + white + red) * 100;
const assertividadeFormatada = isNaN(assertividade)
  ? '0%'
  : assertividade.toFixed(1) + '%';

const estilo = {
    container: {
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#F7F7F7',
      borderRadius: '10px',
      padding: '2em',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',

    },
    red:{
      backgroundColor: '#E76161',
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      marginRight: '5px',
    },
    green:{
      backgroundColor: '#68C06D',
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      marginRight: '5px',
    },
    white:{
      backgroundColor: '#F4F4F4',
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      marginRight: '5px',
      border: "1px solid black",
    },
    labelResultado:{
      marginLeft: '4px',
    }
  };

  if (window.matchMedia('(max-width: 768px)').matches) {
    estilo.container.fontSize ='0.8em';
    estilo.labelResultado.display = 'none';
    estilo.container.width = '';
  }
  return (
    <div
      style={estilo.container}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          marginBottom: '20px',
        }}
      >
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={estilo.red}
          />
          <span>{red}</span> <span style={estilo.labelResultado}> Erros</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={estilo.green}
          />
          <span>{green}</span> <span style={estilo.labelResultado}>Vitorias na cor</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={estilo.white}
          />
          <span>{white}</span> <span style={estilo.labelResultado}> Vitorias no branco</span>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <span
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#E76161',
            marginBottom: '10px',
          }}
        >
          {assertividadeFormatada}
        </span>
        <span style={{ fontSize: '14px', color: '#A9A9A9' }}>Assertividade</span>
      </div>
      <span style={{ fontSize: '12px', color: '#A9A9A9', marginTop: '20px' }}>
        Última atualização: {data}
      </span>
    </div>
  );
};

export default Resultado;

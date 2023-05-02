import React from 'react';
import ReactPixel from 'react-facebook-pixel';

const styles = {
  '@keyframes moveUpDown': {
    '0%': {
      transform: 'translateY(0)',
    },
    '50%': {
      transform: 'translateY(-5px)',
      boxShadow: '0px 12px 20px rgba(0, 0, 0, 0.2)',
    },
    '100%': {
      transform: 'translateY(0)',
    },
  },
  button: {
    background: 'linear-gradient(to bottom, #ff7f50, #ff6347)',
    border: 'none',
    borderRadius: '20px',
    color: 'white',
    fontSize: '18px',
    fontWeight: 'bold',
    padding: '1em 2em',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
    margin: '20px 0',
    
  },
  
  buttonHover: {
    transform: 'translateY(-5px)',
    boxShadow: '0px 12px 20px rgba(0, 0, 0, 0.2)',
  },
  
};


function ComprarButton() {
  const [hover, setHover] = React.useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };
  
  const handleClick = () => {
    ReactPixel.trackCustom('IniciouCheckout');
    window.open('https://pag.ae/7ZinYuYS6', '_blank');
  }

  return (
    <button
      style={{
        ...styles.button,
        ...(hover ? styles.buttonHover : {}),
        ...styles.buttonAnimation
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      Comprar agora
    </button>
  );
}



export default ComprarButton;
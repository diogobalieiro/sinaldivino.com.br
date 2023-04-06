import React from 'react';

function Dice({ value }) {
  const styles = {
    dice: {
      position: 'relative',
      width: '100px',
      height: '100px',
      transformStyle: 'preserve-3d',
      transition: 'transform 0.5s',
    },
    diceHover: {
      transform: 'rotateX(360deg) rotateY(360deg)',
    },
    face: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      border: '2px solid black',
      boxSizing: 'border-box',
      backfaceVisibility: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    dot: {
      position: 'absolute',
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      backgroundColor: 'black',
    },
    dot1: {
      top: '25%',
      left: '25%',
    },
    dot2: {
      top: '25%',
      right: '25%',
    },
    dot3: {
      bottom: '25%',
      left: '25%',
    },
    dot4: {
      bottom: '25%',
      right: '25%',
    },
    dot5: {
      top: '50%',
      left: '50%',
    },
    dot6: {
      bottom: '50%',
      left: '50%',
    },
    faceBack: {
      transform: 'translateZ(-50px) rotateY(180deg)',
    },
    faceRight: {
      transform: 'rotateY(90deg) translateZ(50px)',
    },
    faceLeft: {
      transform: 'rotateY(-90deg) translateZ(50px)',
    },
    faceTop: {
      transform: 'rotateX(90deg) translateZ(50px)',
    },
    faceBottom: {
      transform: 'rotateX(-90deg) translateZ(50px)',
    },
    face1: {
      backgroundColor: 'white',
    },
    face2: {
      backgroundColor: 'yellow',
    },
    face3: {
      backgroundColor: 'red',
    },
    face4: {
      backgroundColor: 'blue',
    },
    face5: {
      backgroundColor: 'orange',
    },
    face6: {
      backgroundColor: 'green',
    },
  };

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className="dice"
      style={{
        ...styles.dice,
        ...(hovered ? styles.diceHover : {}),
      }}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div className="face" style={styles.face}></div>
      <div className="face face-back" style={styles.faceBack}>
        <div style={{ ...styles.dot, ...styles.dot1 }}></div>
        <div style={{ ...styles.dot, ...styles.dot6 }}></div>
      </div>
      <div className="face face-right"
        style={{ ...styles.face, ...styles.faceRight }}
        >
          <div style={{ ...styles.dot, ...styles.dot1 }}></div>
          <div style={{ ...styles.dot, ...styles.dot3 }}></div>
          <div style={{ ...styles.dot, ...styles.dot4 }}></div>
          <div style={{ ...styles.dot, ...styles.dot6 }}></div>
        </div>
        <div className="face face-left" style={{ ...styles.face, ...styles.faceLeft }}>
          <div style={{ ...styles.dot, ...styles.dot1 }}></div>
          <div style={{ ...styles.dot, ...styles.dot2 }}></div>
          <div style={{ ...styles.dot, ...styles.dot5 }}></div>
          <div style={{ ...styles.dot, ...styles.dot6 }}></div>
        </div>
        <div className="face face-top" style={{ ...styles.face, ...styles.faceTop }}>
          <div style={{ ...styles.dot, ...styles.dot1 }}></div>
          <div style={{ ...styles.dot, ...styles.dot2 }}></div>
          <div style={{ ...styles.dot, ...styles.dot3 }}></div>
          <div style={{ ...styles.dot, ...styles.dot4 }}></div>
        </div>
        <div className="face face-bottom" style={{ ...styles.face, ...styles.faceBottom }}>
          <div style={{ ...styles.dot, ...styles.dot2 }}></div>
          <div style={{ ...styles.dot, ...styles.dot3 }}></div>
          <div style={{ ...styles.dot, ...styles.dot4 }}></div>
          <div style={{ ...styles.dot, ...styles.dot5 }}></div>
          <div style={{ ...styles.dot, ...styles.dot1 }}></div>
          <div style={{ ...styles.dot, ...styles.dot6 }}></div>
        </div>
      </div>
    );
  }
  
  export default Dice;
  
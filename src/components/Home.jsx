import React from 'react';
import '../styles/Home.css';
import backgroundImage from '../assets/pinnacle.png';

const Home = () => {
  const containerStyles = {
    position: 'relative',
    height: '100vh', // Set the height of your component
  };

  const backgroundStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
  };

  const overlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Adjust the alpha value for the desired shade
  };

  return (
    <>
      <div className="home" style={containerStyles}>
        <div style={backgroundStyles}></div>
        <div style={overlayStyles}></div>
        <div className="content">
          {/* Your content goes here */}
          Home
        </div>
      </div>
    </>
  );
};

export default Home;

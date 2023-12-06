import React from 'react';
import GetStarted from '../Elements/GetStarted';
import '../css/Homepage.css';

const HomePage = () => {

  const scrollDown = () => {
    const aboutSection = document.getElementById('about_page');
  
    if (aboutSection) {
      const navBarHeight = document.querySelector('nav').offsetHeight;
      window.scrollTo({
        top: aboutSection.offsetTop - navBarHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="home_page">
      <div className="home_heading">
        <h1>THE PINNACLE OVERSEAS</h1>
        <p>
          This is a paragraph hvaucbjh ad abinn da jbsz skjvbjsjkbv k svkjbjsbvn kjSBDVisndvkjs
          skB kbasicbbsdbk s dkjbjsbd jks knkjbschibvdj s
        </p>
      </div>

      <div className="home_explore_btn" onClick={scrollDown}>
        <GetStarted />
      </div>
    </div>
  );
};

export default HomePage;

import React from 'react';
import '../css/About.css';
import stu_1 from '../assets/images/stu_1.jpg';
import 'boxicons';

const About = () => {
  return (
    <div id='about_page' className="about_page">
      <div className="about_heading">
        <h1>About Us</h1>
      </div>

      {/* Display Image and Text */}
      <div className="about_box">
        <div className="about_container">
          <div className="about_image">
            <img src={stu_1} alt="student" />
          </div>

          <div className="about_text">
            <h1>The Pinnacle Overseas</h1>
            <p>
              Welcome to Pinnacle Overseas, where the convergence of language mastery and exam triumph awaits you! We are committed to taking your English proficiency to unprecedented heights, providing a transformative learning experience that seamlessly blends fluency and precision. Emphasizing both language skills and strategic exam techniques, we will lead you through the journey of mastering English for the IELTS exam. Our dedicated team of experienced instructors is enthusiastic about nurturing your abilities and ensuring you are well-prepared to overcome the challenges presented by the IELTS test. Join us on this thrilling adventure, where your aspirations for academic and professional success are not mere dreams but attainable realities.
            </p>

            <div className="about_socials" style={{ textAlign: 'center', marginTop: '20px' }}>
              <a target='_blank' href="https://www.instagram.com/" style={{ margin: '10px', fontSize: '24px' }}>
                <box-icon type='logo' name='instagram-alt'></box-icon>
              </a>

              <a target='_blank' href="https://www.facebook.com/" style={{ margin: '10px', fontSize: '24px' }}>
                <box-icon type='logo' name='facebook-circle'></box-icon>
              </a>

              <a target='_blank' href="https://www.youtube.com/" style={{ margin: '10px', fontSize: '24px' }}>
                <box-icon type='logo' name='youtube'></box-icon>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

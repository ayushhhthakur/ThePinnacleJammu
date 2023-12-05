import React from 'react'
import stu_1 from '../assets/images/stu_1.jpg'

const About = () => {
  return (
    <>
    <div className="about_page">
        <div className="aboutz-heading">
            <h1>About Us</h1>
        </div>
        <div className="about_image">
            <img src={stu_1} alt="student" style={{
                width: "50%",
                height: "auto"
            }}/>
        </div>
        <div className="about_text">
            
        </div>
    </div>
    </>
  )
}

export default About
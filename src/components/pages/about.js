import React from 'react'
import contactPagePicture from "../../../static/assets/images/auth/profile-pic.png";
export default function() {
  return (
      <div className="content-page-wrapper">
      <div className="left-column" style={{
        paddingLeft: '30px',
        fontSize: '2rem',
        fontFamily: 'inherit'
      }} >  Hello!  I am a full stack web developer born in Woodland hills, California with about 3 years of coding experience. 
Certified in:  Javascript, ReactJS, Python 3, HTML5, CSS, JSON, Git, SQL Databases, SCSS/SASS, Flexbox, & CSS Grid. Growing up, videogames and computers made me very passionate about technology and what drew me to programming was the endless possibilities that a career in coding provides. Coding allows me to express my passion for storytelling by bringing my clients story to life through web design. Ultimately my goal is to create beautiful things that serve beautiful purposes.

     </div>
        <div 
        className="right-column"
        style={{
          background: "url(" + contactPagePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>

       
      </div>
      </div>
  )
}
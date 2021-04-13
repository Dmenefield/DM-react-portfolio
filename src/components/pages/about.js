import React from 'react'
import contactPagePicture from "../../../static/assets/images/auth/login.jpg";
export default function() {
  return (
      <div className="content-page-wrapper">
      <div className="left-column" >    Hello World! My name is David Menefield Jr. and I am a fullstack web developer from Los Angeles California!
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
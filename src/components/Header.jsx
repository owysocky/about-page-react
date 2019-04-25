import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/images/logo.png';

function Header(){
  let linkDecoration = {
    textDecoration: 'none',
    color: '#75c603'
  }
  return(
    <div className="main">
      <style jsx>{`
        p{
          display: inline-block;
          padding: 20px;
          padding-top: 30px;
        }
        img{
          width: 100px;
          float: left;
        }
        .main{
          text-align: center;
          background-color: white;
          height:100px;
          width: 100%;
          background-image: none;
          background-repeat: repeat;
          background-attachment: scroll;
          background-position: 0% 0%;
          position: fixed;
          top: 0pt;
          left: 0pt;

          border-bottom: 4px solid white;

        }
        .border-line{
          margin-bottom: 2px;
          border-bottom: 2px solid #75c603;
        }
      `}</style>
    <div className="border-line">
      <img src={logo}></img>
      <p><Link to="/" style={linkDecoration}>Home</Link></p>
      <p><Link to="/team" style={linkDecoration}>Our Team</Link></p>
      <p><Link style={linkDecoration} to="">Locations</Link></p>
    </div>
    </div>
  );
}

export default Header;

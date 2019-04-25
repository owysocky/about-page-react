import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/images/logo.png';

function Header(){
  let linkDecoration = {
    textDecoration: 'none',
    color: '#75c603'
  }
  return(
    <div>
      <style jsx>{`
        p{
          display: inline-block;
          padding: 20px;
          padding-top: 30px;
        }
        div{
          text-align: center;
        }
        img{
          width: 100px;
          float: left;
        }
      `}</style>
      <img src={logo}></img>
      <p><Link to="/" style={linkDecoration}>Home</Link></p>
      <p><Link to="/team" style={linkDecoration}>Our Team</Link></p>
      <p><Link style={linkDecoration} to="">Locations</Link></p>
    </div>
  );
}

export default Header;

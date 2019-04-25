import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

function Footer(){
  return(
    <div>
      <style jsx>{`
        div{
          text-align: center;
        }
        img{
          width: 150px;
        }
        `}</style>
      <img src={logo}></img>
    </div>
  );
}

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

function Footer(){
  return(
    <div>
      <style jsx>{`
        div{
          text-align: center;
          background-color: white;
          height:160px;
          width: 100%;
          background-image: none;
          background-repeat: repeat;
          background-attachment: scroll;
          background-position: 0% 0%;
          position: fixed;
          bottom: 0pt;
          left: 0pt;
          border-top: 4px solid white;
        }
        img{
          width: 150px;
        }
        .border-line{
          margin-top: 2px;
          border-top: 2px solid #75c603;
        }
        `}</style>
      <div className="border-line">
        <img src={logo}></img>
      </div>

    </div>
  );
}

export default Footer;

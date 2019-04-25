import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
  let linkDecoration = {
    textDecoration: 'none',
    color: '#0090f7'
  }
  return(
    <div>
      <style jsx>{`
        p{
          display: inline-block;
          padding: 20px;
        }
        div{
          text-align: center;
          font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
        }
      `}</style>
      <p><Link style={linkDecoration} to="">About us</Link></p>
      <p><Link style={linkDecoration} to="">Our Team</Link></p>
      <p><Link style={linkDecoration} to="">Locations</Link></p>
    </div>
  );
}

export default Header;

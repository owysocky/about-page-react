import React from 'react';
import julia from '../assets/images/julia.jpg';
import biker from '../assets/images/biker2.png';
import biker1 from '../assets/images/biker1.jpg';
import olha from '../assets/images/olha.jpg';

function Team(){
  return(
    <div>
      <style jsx>{`
        img{
          height: 400px;
        }
      `}</style>
      <p>That's our team!</p>
      <img src={julia}></img>
      <img src={olha}></img>
      <img src={biker}></img>
      <img src={biker1}></img>
    </div>
  );
}

export default Team;

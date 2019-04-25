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
        h3{
          margin-left: 100px;
          color: #75c603;
        }
      `}</style>
    <h3>That's our team!</h3>
      <img src={julia}></img>
      <br/>
      <img src={olha}></img>
      <br/>
      <img src={biker}></img>
      <br/>
      <img src={biker1}></img>
    </div>
  );
}

export default Team;

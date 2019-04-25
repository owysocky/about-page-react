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
        .text{
          float: left;
        }
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
      `}</style>
    <h3>That's our team!</h3>

      <div className="containter">
        <div>
          <img src={julia}></img>
        </div>
        <div>
          <h3>Julia</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div>
          <img src={olha}></img>
        </div>
        <div>
          <h3>Olya</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div>
          <img src={biker}></img>
        </div>
        <div>
          <h3>Lorem</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div>
          <img src={biker1}></img>
        </div>
        <div>
          <h3>Ipsum</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

      </div>
    </div>
  );
}

export default Team;

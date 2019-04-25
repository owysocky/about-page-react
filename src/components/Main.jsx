import React from 'react';
import rainier from '../assets/images/rainier.jpg'

function Main(){
  return(
    <div>
      <style jsx>{`
        .image{
          text-align: center;
        }
      `}</style>
    <div className="image">
        <img src={rainier}></img>
    </div>

    </div>
  );
}

export default Main;

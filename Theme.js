import React from "react";
import anh1 from './img/anh1.jpg';
import anh2 from './img/anh2.jpg';
import anh3 from './img/anh3.jpg';
import './theme.css';
import Button from "./Button";


const Card = () => {
  return (
    <div className="card-container">
      <div className="card-items">
        <div className="items-container">
          <div className="img-items">
            <img className="img-content" src={anh1} alt="" />
          </div>
          <div className="text-items">
            <p style={{fontSize : '25px', opacity: '0.8' , fontWeight:'bold'}}>Ha Noi</p>
            <p style={{opacity: '0.3'}}>Fri 28 Nov 2021</p>
            <p style={{fontSize:'20px' , fontWeight:'550'}}>Hanoi faith and hope. We always waiting for you!</p>
            <Button />
          </div>
        </div>
        <div className="items-container">
          <div className="img-items">
            <img className="img-content" src={anh2} alt="" />
          </div>
          <div className="text-items">
            <p style={{fontSize : '25px', opacity: '0.8', fontWeight:'bold' }}>Ho Chi Minh City</p>
            <p style={{opacity: '0.3'}}>Tue 28 Dec 2021</p>
            <p style={{fontSize:'20px' , fontWeight:'550'}}>HCM City active and modernization. We always waiting for you!</p>
            <Button />
          </div>
        </div>
        <div className="items-container">
          <div className="img-items">
            <img className="img-content" src={anh3} alt="" />
          </div>
          <div className="text-items">
            <p style={{fontSize : '25px' , opacity: '0.8' , fontWeight:'bold'}}>Da Nang</p>
            <p style={{opacity: '0.3'}}>Thu 28 Nov 2021</p>
            <p style={{fontSize:'20px', fontWeight:'550'}}>Da Nang has regional stature. We always waiting for you!</p>
            <Button />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;

